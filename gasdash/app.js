/* ═══════════════════════════════════════════════════════════
   GasDash 2.0 — full client-side app
   Customer mode: order → live tracking → rate & tip → history
   Driver mode: go online → accept jobs → complete → earnings
   All data persists locally (demo — no server, no real charges)
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── Config ─────────────────────────────────────────────── */

const BASE_LOCATION = { lat: 35.3859, lng: -94.3985 }; // Fort Smith, AR (72904)
const PREMIUM_FEE = 9.99;
const PREMIUM_RATE = 0.15; // 15% off the service fee only — fuel is always pump price
const DRIVER_FEE = 8.99;
const DRIVER_SHARE = 0.60; // drivers keep 60% of the service fee (platform 40%); fuel + tips are 100% theirs
const FUEL_PICKUP_FEE = 5; // gas orders only: flat fee for the pump stop, 100% to the driver — not part of the platform's cut, not discounted by Premium

const GAS_TYPES = [
    { id: 'regular',  name: 'Regular 87',  price: 3.29 },
    { id: 'midgrade', name: 'Mid 89',      price: 3.79 },
    { id: 'premium',  name: 'Premium 93',  price: 4.29 },
    { id: 'diesel',   name: 'Diesel',      price: 3.99 },
];

// Uber-style fare: flat service fee covers the first includedMiles,
// then perMile is added for every mile beyond that.
const SERVICES = {
    gas:  { icon: '⛽', name: 'Gas Delivery', from: 35, badge: '24/7', baseFee: 35, includedMiles: 5, perMile: 2 },
    jump: { icon: '🔋', name: 'Jump Start',   from: 30, badge: '24/7', baseFee: 30, includedMiles: 3, perMile: 1 },
};

function serviceFee(svcKey, miles) {
    const s = SERVICES[svcKey];
    const extra = Math.max(0, Math.ceil(miles - s.includedMiles));
    return { fee: s.baseFee + extra * s.perMile, extraMiles: extra };
}

const driverCut = (fee) => Math.round(fee * DRIVER_SHARE * 100) / 100;
const newPin = () => String(Math.floor(100000 + Math.random() * 900000));

// ── Real payments (Stripe) ──
// Deploy backend/worker.js (see backend/README.md), then paste its URL here,
// e.g. 'https://gasdash-payments.YOURNAME.workers.dev'. Empty = demo checkout.
const PAYMENT_API_URL = '';
// (can also be overridden per-device: localStorage.setItem('gd2:paymentApi', 'https://…'))
const PAYMENT_API = (localStorage.getItem('gd2:paymentApi') || PAYMENT_API_URL).replace(/\/$/, '');

const DRIVER_NAMES = ['Marcus T.', 'Sarah K.', 'Devon R.', 'Alicia M.', 'James P.', 'Rosa G.', 'Tyler B.', 'Nina V.'];
const DRIVER_CARS = ['Black Ford F-150', 'White Chevy Silverado', 'Silver Toyota Tacoma', 'Red RAM 1500', 'Blue Honda Ridgeline', 'Gray GMC Sierra'];
const CUSTOMER_NAMES = ['Jordan W.', 'Emily C.', 'Mike D.', 'Tanya R.', 'Chris L.', 'Ashley B.'];
const STREETS = ['Rogers Ave', 'Grand Ave', 'Towson Ave', 'Zero St', 'Midland Blvd', 'Phoenix Ave', 'Kelley Hwy'];

/* ── Tiny helpers ───────────────────────────────────────── */

const $ = (id) => document.getElementById(id);
const $$ = (sel) => document.querySelectorAll(sel);
const money = (n) => `$${n.toFixed(2)}`;
const rand = (min, max) => min + Math.random() * (max - min);
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

function toast(msg, kind = '') {
    const el = document.createElement('div');
    el.className = `toast ${kind}`;
    el.textContent = msg;
    $('toast-stack').appendChild(el);
    setTimeout(() => { el.classList.add('out'); setTimeout(() => el.remove(), 350); }, 3200);
}

async function hash(str) {
    const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode('gd2:' + str));
    return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('');
}

/* ── Store (localStorage) ───────────────────────────────── */

const Store = {
    accounts() { return JSON.parse(localStorage.getItem('gd2:accounts') || '{}'); },
    saveAccounts(a) { localStorage.setItem('gd2:accounts', JSON.stringify(a)); },
    get(email) { return this.accounts()[email] || null; },
    put(user) {
        const a = this.accounts();
        a[user.email] = user;
        this.saveAccounts(a);
    },
    session() { return localStorage.getItem('gd2:session'); },
    setSession(email) { email ? localStorage.setItem('gd2:session', email) : localStorage.removeItem('gd2:session'); },
};

function newUser(name, email, phone, pw) {
    return {
        name, email, phone, pw,
        premium: false, isDriver: false, driverApproved: false,
        orders: [], payouts: [],
        stats: { orders: 0, saved: 0, earned: 0, trips: 0, tips: 0, ratingSum: 0, ratingCount: 0 },
        week: [0, 0, 0, 0, 0, 0, 0],
    };
}

/* ── App state ──────────────────────────────────────────── */

let user = null;            // current account object
let mode = 'customer';      // customer | driver
let myLoc = { ...BASE_LOCATION };
let draft = null;           // order being built
let active = null;          // order being tracked (customer)
let job = null;             // active driver job
let driverState = { online: false, onlineSince: null, requestTimer: null };
let maps = {};              // leaflet instances
let markers = {};
let deferredInstall = null;

function save() { if (user) Store.put(user); }

/* ── Screen router ──────────────────────────────────────── */

let screenStack = [];

function show(name, push = true) {
    $$('.screen').forEach((s) => s.classList.remove('active'));
    const el = $(`screen-${name}`);
    el.classList.add('active');
    if (push) screenStack.push(name);

    const custTabs = ['home', 'orders'].includes(name) || (name === 'account' && mode === 'customer');
    const drvTabs = ['driver', 'earnings'].includes(name) || (name === 'account' && mode === 'driver');
    $('tabbar-customer').hidden = !custTabs;
    $('tabbar-driver').hidden = !drvTabs;
    $$('#tabbar-customer .tab, #tabbar-driver .tab').forEach((t) => t.classList.toggle('active', t.dataset.tab === name));

    if (name === 'home') setTimeout(() => maps.home?.invalidateSize(), 60);
    if (name === 'driver') setTimeout(() => maps.driver?.invalidateSize(), 60);
    if (name === 'track') setTimeout(() => maps.track?.invalidateSize(), 60);
}

function goBack() {
    screenStack.pop();
    const prev = screenStack.pop() || (mode === 'driver' ? 'driver' : 'home');
    show(prev);
}

/* ── Maps ───────────────────────────────────────────────── */

const hasMaps = () => typeof L !== 'undefined';

function makeMap(elId) {
    if (!hasMaps()) { $(elId).classList.add('map-fallback'); return null; }
    const m = L.map(elId, { zoomControl: false, attributionControl: false }).setView([myLoc.lat, myLoc.lng], 14);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { className: 'map-tiles-dark', maxZoom: 19 }).addTo(m);
    return m;
}

// no-op stand-ins so every map call is safe when Leaflet/tiles are unavailable
const nullMarker = { setLatLng() { return this; }, remove() {}, getLatLng() { return { lat: myLoc.lat, lng: myLoc.lng }; } };
function addMarker(map, pos, iconFn) {
    return map && hasMaps() ? L.marker(pos, { icon: iconFn() }).addTo(map) : nullMarker;
}

const meIcon = () => L.divIcon({ className: '', html: '<div class="marker-me"></div>', iconSize: [18, 18], iconAnchor: [9, 9] });
const carIcon = () => L.divIcon({ className: '', html: '<div class="marker-car">🚗</div>', iconSize: [26, 26], iconAnchor: [13, 13] });

function locate(cb) {
    if (!navigator.geolocation) return cb && cb();
    navigator.geolocation.getCurrentPosition(
        (pos) => { myLoc = { lat: pos.coords.latitude, lng: pos.coords.longitude }; cb && cb(); },
        () => cb && cb(),
        { timeout: 5000 }
    );
}

/* ── Boot ───────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        // Always reveal the app first — a later error must never leave a blank screen.
        $('splash-screen').classList.add('hide');
        $('app').hidden = false;
        try {
            const email = Store.session();
            if (email && Store.get(email)) {
                user = Store.get(email);
                if (!handleConnectReturn() && !handleCheckoutReturn()) enterRoleHub();
            } else {
                show('auth');
            }
        } catch (err) {
            console.error('GasDash boot error:', err);
            try { show('auth'); } catch (_) { /* shell is already visible */ }
        }
    }, 1400);

    wireAuth(); wireRoleHub(); wireCustomer(); wireOrderBuilder(); wireTracking();
    wireOrdersList(); wireAccount(); wirePremium(); wireDriverOnboarding(); wireDriver();
    wireTabs(); wireAssistant(); wirePWA();
});

/* ── Auth ───────────────────────────────────────────────── */

function wireAuth() {
    $$('.seg-tab').forEach((tab) => tab.addEventListener('click', () => {
        $$('.seg-tab').forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        $('login-form').classList.toggle('active', tab.dataset.authtab === 'login');
        $('signup-form').classList.toggle('active', tab.dataset.authtab === 'signup');
    }));

    $('login-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = $('login-email').value.trim().toLowerCase();
        const pw = $('login-password').value;
        if (!email || !pw) return toast('Enter your email and password');
        const acct = Store.get(email);
        if (!acct) return toast('No account found — create one first');
        if (acct.pw !== await hash(pw)) return toast('Wrong password');
        user = acct;
        Store.setSession(email);
        enterRoleHub();
    });

    $('signup-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        const name = $('signup-name').value.trim();
        const email = $('signup-email').value.trim().toLowerCase();
        const phone = $('signup-phone').value.trim();
        const pw = $('signup-password').value;
        if (!name || !email || !phone || !pw) return toast('Please fill in every field');
        if (!/^\S+@\S+\.\S+$/.test(email)) return toast('That email doesn\'t look right');
        if (pw.length < 8) return toast('Password needs 8+ characters');
        if (Store.get(email)) return toast('Account already exists — log in instead');
        user = newUser(name, email, phone, await hash(pw));
        save();
        Store.setSession(email);
        toast(`Welcome to GasDash, ${name.split(' ')[0]}! 🎉`, 'ok');
        enterRoleHub();
    });

    $('demo-btn').addEventListener('click', async () => {
        const email = 'demo@gasdash.app';
        user = Store.get(email) || newUser('Demo Rider', email, '(479) 555-0100', await hash('demo1234'));
        save();
        Store.setSession(email);
        toast('Demo mode — explore everything freely ✨', 'ok');
        enterRoleHub();
    });
}

function logout() {
    stopTracking(); stopDriverSim();
    Store.setSession(null);
    user = null; screenStack = [];
    show('auth');
}

/* ── Role hub ───────────────────────────────────────────── */

function enterRoleHub() {
    screenStack = [];
    $('role-hello').textContent = `Hey ${user.name.split(' ')[0]} 👋`;
    const cm = $('chip-membership');
    cm.textContent = user.premium ? '⭐ Premium' : 'Standard';
    cm.classList.toggle('gold', user.premium);
    const cd = $('chip-driver');
    cd.textContent = user.driverApproved ? '✓ Active driver' : user.isDriver ? '⏳ Under review' : 'Not a driver yet';
    cd.classList.toggle('green', user.driverApproved);
    $('stat-orders').textContent = user.stats.orders;
    $('stat-saved').textContent = `$${Math.round(user.stats.saved)}`;
    $('stat-earned').textContent = `$${Math.round(user.stats.earned)}`;
    show('role');
}

function wireRoleHub() {
    $('role-customer').addEventListener('click', () => enterCustomer());
    $('role-driver').addEventListener('click', () => {
        if (user.driverApproved) return enterDriver();
        if (user.isDriver) { startApplicationReview(true); return; }
        show('driver-intro');
    });
    $('role-logout').addEventListener('click', logout);
}

/* ── Customer home ──────────────────────────────────────── */

function enterCustomer() {
    mode = 'customer';
    show('home');
    if (!maps.home) {
        maps.home = makeMap('map-home');
        markers.homeMe = addMarker(maps.home, [myLoc.lat, myLoc.lng], meIcon);
        locate(() => { maps.home?.setView([myLoc.lat, myLoc.lng], 14); markers.homeMe.setLatLng([myLoc.lat, myLoc.lng]); });
    }
    $('home-eta').textContent = `${Math.floor(rand(5, 14))} min`;
    $('banner-premium').hidden = user.premium;
    refreshActiveBanner();
    renderServiceGrid();
}

function refreshActiveBanner() {
    $('banner-active-order').hidden = !active;
    if (active) $('banner-active-sub').textContent = `${SERVICES[active.service].icon} ${SERVICES[active.service].name} · ${active.statusLabel || 'in progress'}`;
}

function renderServiceGrid() {
    const grid = $('service-grid');
    grid.innerHTML = '';
    Object.entries(SERVICES).forEach(([key, s]) => {
        const btn = document.createElement('button');
        btn.className = 'service-card';
        btn.innerHTML = `<span class="s-badge">${s.badge}</span>
            <span class="s-icon">${s.icon}</span><span class="s-name">${s.name}</span>
            <span class="s-price">From $${s.from} · first ${s.includedMiles} mi included</span>`;
        btn.addEventListener('click', () => openOrderBuilder(key));
        grid.appendChild(btn);
    });
}

function wireCustomer() {
    $('home-menu').addEventListener('click', () => show('account'));
    $('home-assistant').addEventListener('click', openAssistant);
    $('banner-upgrade').addEventListener('click', () => show('premium'));
    $('banner-track').addEventListener('click', () => active && show('track'));
}

/* ── Order builder ──────────────────────────────────────── */

function openOrderBuilder(service) {
    if (active) { toast('Finish your current order first'); return show('track'); }
    draft = {
        service,
        gasType: 'regular', gallons: 5,
        driverDistance: Math.round(rand(1.5, 12) * 10) / 10, // nearest driver, miles (simulated)
        notes: '',
    };
    const s = SERVICES[service];
    $('order-title').textContent = `${s.icon} ${s.name}`;
    $('order-notes').value = '';
    renderOrderOptions();
    recalc();
    show('order');
}

function renderOrderOptions() {
    const host = $('order-options');
    const d = draft;
    const s = SERVICES[d.service];
    const distNote = `<div class="loc-row"><div class="loc-dot"></div>
        <div class="loc-text"><b>Nearest driver: ${d.driverDistance.toFixed(1)} mi away</b>
        <span>First ${s.includedMiles} miles included · $${s.perMile}/mi after that</span></div></div>`;

    if (d.service === 'gas') {
        host.innerHTML = `<div class="card"><div class="opt-group"><span class="opt-label">Fuel type</span>
            <div class="opt-pills">${GAS_TYPES.map((g) => `<button class="opt-pill${d.gasType === g.id ? ' active' : ''}" data-gas="${g.id}">${g.name} · $${g.price}</button>`).join('')}</div></div>
            <div class="opt-group"><span class="opt-label">How many gallons</span>
            <div class="stepper"><button data-step="-1">−</button><b>${d.gallons} gal</b><button data-step="1">+</button></div>
            <p class="fineprint">You pay for the fuel here in the app — your driver buys it fresh at the pump and brings it straight to you.</p></div>
            ${distNote}</div>`;
    } else {
        host.innerHTML = `<div class="card">
            <p class="muted">A driver with a professional jump kit will get your battery going — usually under 5 minutes on site.</p>
            ${distNote}</div>`;
    }

    host.querySelectorAll('[data-gas]').forEach((b) => b.addEventListener('click', () => { draft.gasType = b.dataset.gas; renderOrderOptions(); recalc(); }));
    host.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => {
        draft.gallons = Math.min(20, Math.max(1, draft.gallons + Number(b.dataset.step)));
        renderOrderOptions(); recalc();
    }));
}

function priceDraft() {
    const d = draft;
    const s = SERVICES[d.service];
    const { fee, extraMiles } = serviceFee(d.service, d.driverDistance);
    const rows = [{ label: `Service fee (first ${s.includedMiles} mi included)`, amt: s.baseFee }];
    if (extraMiles > 0) rows.push({ label: `Distance · +${extraMiles} mi × $${s.perMile}`, amt: extraMiles * s.perMile });

    let fuel = 0, fuelPickupFee = 0;
    if (d.service === 'gas') {
        const g = GAS_TYPES.find((x) => x.id === d.gasType);
        fuel = Math.round(g.price * d.gallons * 100) / 100;
        rows.push({ label: `${g.name} × ${d.gallons} gal (pump price)`, amt: fuel });
        fuelPickupFee = FUEL_PICKUP_FEE;
        rows.push({ label: 'Fuel pickup fee (100% to driver)', amt: fuelPickupFee });
    }

    // Premium discount applies to the service fee only — never the fuel,
    // never the pickup fee, and never the driver's cut (drivers are paid on the full fee).
    let discount = 0;
    const notes = [];
    if (user.premium) { discount = Math.round(fee * PREMIUM_RATE * 100) / 100; notes.push('⭐ Premium −15% service fee'); }

    return {
        rows, fee, fuel, fuelPickupFee, discount, notes,
        subtotal: fee + fuel + fuelPickupFee,
        total: Math.max(0, fee + fuel + fuelPickupFee - discount),
        driverEarns: driverCut(fee) + fuel + fuelPickupFee, // what the driver takes home (before tip)
    };
}

function recalc() {
    const p = priceDraft();
    $('price-rows').innerHTML =
        p.rows.map((r) => `<div class="price-row"><span>${r.label}</span><span>${money(r.amt)}</span></div>`).join('') +
        (p.discount > 0 ? `<div class="price-row discount"><span>${p.notes.join(' · ')}</span><span>−${money(p.discount)}</span></div>` : '');
    $('price-total').textContent = money(p.total);
    $('order-submit-price').textContent = money(p.total);
    const nudge = $('premium-nudge');
    nudge.hidden = user.premium;
    if (!user.premium) $('premium-nudge-amt').textContent = money(p.fee * PREMIUM_RATE);
}

function wireOrderBuilder() {
    $$('[data-nav]').forEach((b) => b.addEventListener('click', () => {
        const t = b.dataset.nav;
        if (t === 'back') goBack(); else show(t);
    }));

    $('order-loc-refresh').addEventListener('click', () => {
        $('order-loc-sub').textContent = 'Refreshing GPS…';
        locate(() => { $('order-loc-sub').textContent = 'GPS locked · within service area'; toast('Location updated', 'ok'); });
    });

    $('order-submit').addEventListener('click', () => {
        draft.notes = $('order-notes').value.trim();
        const p = priceDraft();
        if (PAYMENT_API) return startRealCheckout();
        openPayModal(`${SERVICES[draft.service].icon} ${SERVICES[draft.service].name}`, p, () => placeOrder(p));
    });
}

/* ── Real checkout via Stripe (when PAYMENT_API is configured) ──────── */

async function startRealCheckout() {
    const btn = $('order-submit');
    const prevHtml = btn.innerHTML;
    btn.disabled = true;
    btn.textContent = 'Opening secure checkout…';
    try {
        // remember the order so we can resume when Stripe sends the customer back
        localStorage.setItem('gd2:pendingCheckout', JSON.stringify({ draft, ts: Date.now() }));
        const res = await fetch(`${PAYMENT_API}/api/checkout`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                service: draft.service,
                gasType: draft.gasType,
                gallons: draft.gallons,
                distanceMiles: draft.driverDistance,
                premium: !!user.premium,
                notes: draft.notes,
            }),
        });
        const data = await res.json();
        if (!res.ok || !data.url) throw new Error(data.error || 'could not start checkout');
        window.location.assign(data.url); // → Stripe's hosted payment page
    } catch (err) {
        localStorage.removeItem('gd2:pendingCheckout');
        toast(`Payment error: ${err.message}`);
        btn.disabled = false;
        btn.innerHTML = prevHtml;
        recalc();
    }
}

// Handles ?checkout=success|cancel when Stripe redirects back to the app.
// Returns true when it took over navigation (an order is being resumed).
function handleCheckoutReturn() {
    const params = new URLSearchParams(location.search);
    const state = params.get('checkout');
    if (!state) return false;
    const sessionId = params.get('session_id');
    history.replaceState(null, '', location.pathname);
    const pendingRaw = localStorage.getItem('gd2:pendingCheckout');
    localStorage.removeItem('gd2:pendingCheckout');

    if (state === 'cancel') {
        toast('Checkout cancelled — you have not been charged');
        return false;
    }
    if (state !== 'success' || !sessionId || !pendingRaw || !PAYMENT_API) return false;

    draft = JSON.parse(pendingRaw).draft;
    mode = 'customer';
    enterCustomer();
    toast('Confirming your payment…', 'ok');
    fetch(`${PAYMENT_API}/api/checkout?session_id=${encodeURIComponent(sessionId)}`)
        .then((r) => r.json())
        .then((d) => {
            if (d.paid) placeOrder(priceDraft(), { sessionId, pin: d.pin });
            else toast('Payment not completed — you have not been charged');
        })
        .catch(() => toast('Could not confirm payment — check your email for a Stripe receipt'));
    return true;
}

// Handles ?connect=return|refresh when a driver comes back from Stripe
// bank onboarding. Returns true when it took over navigation.
function handleConnectReturn() {
    const params = new URLSearchParams(location.search);
    const state = params.get('connect');
    if (!state) return false;
    const accountId = params.get('account_id');
    history.replaceState(null, '', location.pathname);
    if (!accountId || !PAYMENT_API || !user) return false;

    user.stripeAccountId = accountId;
    save();
    mode = 'driver';
    enterDriver();

    if (state === 'refresh') {
        toast('Bank setup wasn\'t finished — tap "Set up" to continue');
        return true;
    }
    toast('Checking your payout setup…', 'ok');
    fetch(`${PAYMENT_API}/api/driver/status?account_id=${encodeURIComponent(accountId)}`)
        .then((r) => r.json())
        .then((d) => {
            user.payoutReady = d.ready === true;
            save();
            renderDriverStats();
            toast(d.ready
                ? '💸 Payouts are LIVE — you\'ll be paid instantly after every job'
                : 'Almost there — Stripe needs a bit more info. Tap "Set up" to finish.', d.ready ? 'ok' : '');
        })
        .catch(() => toast('Could not check payout status — try again in a minute'));
    return true;
}

/* Driver bank onboarding (Stripe Connect Express) */
async function startDriverOnboarding() {
    const btn = $('driver-payout-setup');
    btn.disabled = true;
    btn.textContent = 'Opening…';
    try {
        const res = await fetch(`${PAYMENT_API}/api/driver/onboard`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ account_id: user.stripeAccountId || undefined, email: user.email }),
        });
        const data = await res.json();
        if (!res.ok || !data.url) throw new Error(data.error || 'could not start onboarding');
        user.stripeAccountId = data.account_id;
        if (data.token) user.driverToken = data.token;
        save();
        window.location.assign(data.url); // → Stripe-hosted bank onboarding
    } catch (err) {
        toast(`Payout setup error: ${err.message}`);
        btn.disabled = false;
        btn.textContent = 'Set up';
    }
}

// Live mode = real dispatch + real payouts (needs a payment server + connected bank)
const liveDriver = () => !!(PAYMENT_API && user?.payoutReady && user?.driverToken);

/* ── Checkout modal ─────────────────────────────────────── */

let payCb = null;

function openPayModal(title, pricing, cb) {
    payCb = cb;
    $('pay-title').textContent = title;
    $('pay-rows').innerHTML =
        pricing.rows.map((r) => `<div class="price-row"><span>${r.label}</span><span>${money(r.amt)}</span></div>`).join('') +
        (pricing.discount > 0 ? `<div class="price-row discount"><span>Discounts</span><span>−${money(pricing.discount)}</span></div>` : '') +
        `<div class="price-total"><span>Total</span><b>${money(pricing.total)}</b></div>`;
    $('pay-amount').textContent = money(pricing.total);
    openModal('modal-pay');
}

function openModal(id) { $('modal-backdrop').hidden = false; $(id).hidden = false; }
function closeModals() { $('modal-backdrop').hidden = true; $$('.modal').forEach((m) => m.hidden = true); }

/* ── Place order + tracking simulation ──────────────────── */

const STATUS_LABELS = ['Finding your driver…', 'Driver assigned', 'Driver en route', 'Driver has arrived', 'Complete'];
let trackTimers = [];

function clearTrackTimers() { trackTimers.forEach(clearTimeout); trackTimers = []; }
const later = (fn, ms) => trackTimers.push(setTimeout(fn, ms));

function placeOrder(pricing, real = null) {
    const d = draft;
    active = {
        id: real ? real.sessionId.slice(-8).toUpperCase() : 'GD' + Date.now().toString(36).toUpperCase(),
        service: d.service,
        pricing,
        notes: d.notes,
        pin: real?.pin || newPin(),
        sessionId: real?.sessionId || null,
        real: !!real,
        placedAt: Date.now(),
        step: 0,
        statusLabel: STATUS_LABELS[0],
        driver: null,
    };
    toast('Payment secured — finding your driver…', 'ok');
    startTracking();
}

function startTracking() {
    show('track');
    setStep(0);
    $('track-driver-card').hidden = true;
    $('track-eta').textContent = 'finding driver';
    $('track-summary').innerHTML = `<b>${SERVICES[active.service].icon} ${SERVICES[active.service].name}</b>
        <span class="muted">Order ${active.id} · ${money(active.pricing.total)}${active.notes ? ` · “${esc(active.notes)}”` : ''}</span>`;
    $('track-cancel').hidden = false;
    $('track-pin-card').hidden = true;
    $('track-confirm').hidden = true;

    if (!maps.track) {
        maps.track = makeMap('map-track');
    }
    maps.track?.setView([myLoc.lat, myLoc.lng], 14);
    if (markers.trackMe) markers.trackMe.remove();
    markers.trackMe = addMarker(maps.track, [myLoc.lat, myLoc.lng], meIcon);
    if (markers.trackCar) { markers.trackCar.remove(); markers.trackCar = null; }
    if (markers.trackLine) { markers.trackLine.remove(); markers.trackLine = null; }

    $('track-real-hint').hidden = true;
    if (active.real) {
        $('track-cancel').hidden = true; // paid orders: refunds handled by support
        pollRealOrder();
        return;
    }

    // ── demo simulation ──
    later(() => {
        showAssignedDriver({
            name: pick(DRIVER_NAMES),
            car: pick(DRIVER_CARS),
            rating: (4.7 + Math.random() * 0.3).toFixed(2),
        });
        later(() => {
            setStep(2);
            animateDriverIn();
        }, 1800);
    }, rand(2500, 4500));
}

function showAssignedDriver(driver) {
    active.driver = driver;
    setStep(1);
    $('track-driver-card').hidden = false;
    $('track-driver-avatar').textContent = driver.name[0];
    $('track-driver-name').textContent = driver.name;
    $('track-driver-vehicle').textContent = driver.car;
    $('track-driver-rating').textContent = `★ ${driver.rating}`;
    toast(`${driver.name} accepted your request 🚗`, 'ok');
}

// Real orders: the server is the source of truth — poll it and mirror the status.
function pollRealOrder() {
    let last = 'open';
    const iv = setInterval(async () => {
        if (!active) return clearInterval(iv);
        let status;
        try {
            const r = await fetch(`${PAYMENT_API}/api/orders/status?session_id=${encodeURIComponent(active.sessionId)}`);
            status = (await r.json()).status;
        } catch { return; } // transient network error — keep polling
        if (!status || status === last) return;
        last = status;
        if (status === 'assigned' && active.step < 2) {
            showAssignedDriver({ name: 'Your GasDash driver', car: 'Verified driver', rating: '✓' });
            setStep(2);
            animateDriverIn(true); // car animates in but arrival waits for the server
        } else if (status === 'arrived' && active.step < 3) {
            driverArrived();
        } else if ((status === 'paid' || status === 'payout_failed') && active.step < 4) {
            completeOrder();
        }
    }, 4000);
    trackTimers.push(iv);
}

function animateDriverIn(holdArrival = false) {
    const ang = Math.random() * Math.PI * 2;
    const dist = 0.028; // ~2 miles
    let carPos = { lat: myLoc.lat + Math.sin(ang) * dist, lng: myLoc.lng + Math.cos(ang) * dist };
    markers.trackCar = addMarker(maps.track, [carPos.lat, carPos.lng], carIcon);
    if (maps.track && hasMaps()) {
        markers.trackLine = L.polyline([[carPos.lat, carPos.lng], [myLoc.lat, myLoc.lng]], { color: '#DC143C', weight: 3, dashArray: '6 8', opacity: 0.8 }).addTo(maps.track);
        maps.track.fitBounds(markers.trackLine.getBounds(), { padding: [46, 46] });
    } else {
        markers.trackLine = { setLatLngs() {}, remove() {} };
    }

    const totalSecs = Math.floor(rand(25, 40)); // demo-speed "minutes"
    let elapsed = 0;
    const iv = setInterval(() => {
        elapsed++;
        if (!active) return clearInterval(iv);
        // real orders: creep to 90% and hold until the server reports arrival
        const f = holdArrival ? Math.min(0.9, elapsed / totalSecs) : elapsed / totalSecs;
        const lat = carPos.lat + (myLoc.lat - carPos.lat) * f;
        const lng = carPos.lng + (myLoc.lng - carPos.lng) * f + Math.sin(elapsed * 1.3) * 0.0006 * (1 - f);
        markers.trackCar.setLatLng([lat, lng]);
        markers.trackLine.setLatLngs([[lat, lng], [myLoc.lat, myLoc.lng]]);
        const etaMin = Math.max(0, Math.ceil((1 - f) * 8));
        $('track-eta').textContent = etaMin <= 0 ? 'arriving' : `${etaMin} min`;
        if (active.step >= 3) return clearInterval(iv);
        if (!holdArrival && elapsed >= totalSecs) {
            clearInterval(iv);
            driverArrived();
        }
    }, 1000);
    trackTimers.push(iv);
}

function driverArrived() {
    if (!active) return;
    setStep(3);
    $('track-eta').textContent = 'here now';
    // show the verification code
    $('track-pin').textContent = active.pin;
    $('track-pin-card').hidden = false;
    $('track-cancel').hidden = true;
    // demo: customer closes the job; real: the driver closes it by entering the code
    $('track-confirm').hidden = active.real;
    $('track-real-hint').hidden = !active.real;
    toast(`${active.driver?.name || 'Your driver'} has arrived — give them your code 🔐`, 'ok');
    if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
}

function completeOrder() {
    if (!active) return;
    setStep(4);
    $('track-confirm').hidden = true;
    $('track-pin-card').hidden = true;
    $('track-real-hint').hidden = true;
    if (active.real) {
        toast('Job complete ✅ Your driver has been paid instantly', 'ok');
    } else {
        const payout = driverCut(active.pricing.fee) + active.pricing.fuel + (active.pricing.fuelPickupFee || 0);
        toast(`Job complete ✅ ${active.driver.name} was paid ${money(payout)} instantly`, 'ok');
    }
    later(() => openRating(), 900);
}

function setStep(n) {
    if (active) { active.step = n; active.statusLabel = STATUS_LABELS[n]; }
    $$('#track-status-strip .status-step').forEach((el) => {
        const i = +el.dataset.step;
        el.classList.toggle('done', i < n || n === 4 && i === 4);
        el.classList.toggle('now', i === n && n < 4);
    });
    refreshActiveBanner();
}

function stopTracking() {
    clearTrackTimers();
    active = null;
    refreshActiveBanner();
}

function wireTracking() {
    $('track-cancel').addEventListener('click', () => {
        if (!active) return;
        if (active.step >= 3) return toast('Driver already arrived — cancellation unavailable');
        stopTracking();
        toast('Order cancelled — no charge', 'ok');
        show('home');
    });
    $('track-confirm').addEventListener('click', () => completeOrder());
    $('track-help').addEventListener('click', openAssistant);
    $('track-call').addEventListener('click', () => toast('📞 Calling driver… (demo)'));
    $('track-msg').addEventListener('click', () => { openAssistant(); assistantSay(`I've let ${active?.driver?.name || 'your driver'} know you messaged — they'll reply through the app. Anything else I can help with?`); });
}

/* ── Rating & tip ───────────────────────────────────────── */

let rateVal = 5, tipVal = 5;

function openRating() {
    rateVal = 5;
    tipVal = active.real ? 0 : 5; // card tips come with the Connect tip phase — cash for now
    $('rate-avatar').textContent = active.driver?.name?.[0] || 'D';
    $('rate-name').textContent = active.real ? 'your driver' : active.driver.name.split(' ')[0];
    $('rate-tips').hidden = active.real;
    $('rate-tip-label').hidden = active.real;
    $('rate-tip-note').hidden = !active.real;
    paintStars();
    $$('#rate-tips button').forEach((b) => b.classList.toggle('active', +b.dataset.tip === tipVal));
    openModal('modal-rate');
}

function paintStars() {
    $$('#rate-stars button').forEach((b) => b.classList.toggle('lit', +b.dataset.star <= rateVal));
}

function finishRating() {
    const order = active;
    order.rating = rateVal;
    order.tip = tipVal;
    order.completedAt = Date.now();
    order.pricing.total += tipVal;

    user.orders.unshift({
        id: order.id, service: order.service, total: order.pricing.total,
        discount: order.pricing.discount, tip: tipVal, rating: rateVal,
        rows: order.pricing.rows, driver: order.driver.name, at: order.completedAt,
    });
    user.stats.orders++;
    user.stats.saved += order.pricing.discount;
    save();

    closeModals();
    stopTracking();
    show('home');
    toast(tipVal > 0 ? `Thanks! ${money(tipVal)} tip sent to your driver 💚` : 'Thanks for riding with GasDash!', 'ok');
}

/* ── Orders history ─────────────────────────────────────── */

function renderOrders() {
    const host = $('orders-list');
    if (!user.orders.length) {
        host.innerHTML = `<div class="empty-state"><span class="big">🧾</span><b>No orders yet</b><span>Your rescues will show up here.</span></div>`;
        return;
    }
    host.innerHTML = '';
    user.orders.forEach((o, i) => {
        const s = SERVICES[o.service];
        const btn = document.createElement('button');
        btn.className = 'order-item';
        btn.innerHTML = `<span class="o-icon">${s.icon}</span>
            <span class="o-mid"><b>${s.name}</b><span>${new Date(o.at).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })} · ${o.driver} · ${'★'.repeat(o.rating)}</span></span>
            <span class="o-amt">${money(o.total)}</span>`;
        btn.addEventListener('click', () => openReceipt(i));
        host.appendChild(btn);
    });
}

function openReceipt(i) {
    const o = user.orders[i];
    const s = SERVICES[o.service];
    $('receipt-body').innerHTML = `<div class="receipt-rows">
        <div class="price-row"><span>Order</span><span>${o.id}</span></div>
        <div class="price-row"><span>Service</span><span>${s.icon} ${s.name}</span></div>
        <div class="price-row"><span>Driver</span><span>${esc(o.driver)} · ${'★'.repeat(o.rating)}</span></div>
        <div class="price-row"><span>Date</span><span>${new Date(o.at).toLocaleString()}</span></div>
        ${o.rows.map((r) => `<div class="price-row"><span>${r.label}</span><span>${money(r.amt)}</span></div>`).join('')}
        ${o.discount > 0 ? `<div class="price-row discount"><span>Discounts</span><span>−${money(o.discount)}</span></div>` : ''}
        ${o.tip > 0 ? `<div class="price-row"><span>Driver tip</span><span>${money(o.tip)}</span></div>` : ''}
        <div class="price-total"><span>Total</span><b>${money(o.total)}</b></div></div>`;
    openModal('modal-receipt');
}

function wireOrdersList() {
    $('receipt-close').addEventListener('click', closeModals);
}

/* ── Account ────────────────────────────────────────────── */

function renderAccount() {
    $('account-avatar').textContent = user.name[0].toUpperCase();
    $('account-name').textContent = user.name;
    $('account-email').textContent = user.email;
    const tier = $('account-tier');
    tier.textContent = user.premium ? '⭐ Premium' : 'Standard';
    tier.classList.toggle('gold', user.premium);
    $('account-switch').querySelector('span').textContent = mode === 'customer' ? '🚗 Switch to driver mode' : '🆘 Switch to customer mode';
    $('account-install').hidden = !deferredInstall;
}

function wireAccount() {
    $('account-premium').addEventListener('click', () => show('premium'));
    $('account-switch').addEventListener('click', () => {
        if (mode === 'customer') {
            if (user.driverApproved) enterDriver();
            else if (user.isDriver) startApplicationReview(true);
            else show('driver-intro');
        } else enterCustomer();
    });
    $('account-payment').addEventListener('click', () => toast(PAYMENT_API
        ? '💳 Cards are handled securely by Stripe at checkout'
        : '💳 Demo wallet: Visa •••• 4242'));
    $('account-assistant').addEventListener('click', openAssistant);
    $('account-install').addEventListener('click', async () => {
        if (!deferredInstall) return;
        deferredInstall.prompt();
        await deferredInstall.userChoice;
        deferredInstall = null;
        renderAccount();
    });
    $('account-logout').addEventListener('click', logout);
}

/* ── Premium ────────────────────────────────────────────── */

function wirePremium() {
    $('premium-subscribe').addEventListener('click', () => {
        if (user.premium) return toast('You\'re already Premium ⭐', 'gold');
        openPayModal('⭐ GasDash Premium', { rows: [{ label: 'Premium membership (monthly)', amt: PREMIUM_FEE }], discount: 0, total: PREMIUM_FEE }, () => {
            user.premium = true;
            save();
            toast('Welcome to Premium — 15% off everything ⭐', 'gold');
            renderPremiumScreen();
            goBack();
        });
    });
    $('premium-cancel-membership').addEventListener('click', () => {
        user.premium = false;
        save();
        toast('Premium cancelled — you\'ll be missed');
        renderPremiumScreen();
    });
}

function renderPremiumScreen() {
    $('premium-subscribe').hidden = user.premium;
    $('premium-cancel-membership').hidden = !user.premium;
}

/* ── Driver onboarding ──────────────────────────────────── */

function wireDriverOnboarding() {
    $('driver-pay-fee').addEventListener('click', () => {
        openPayModal('🚗 Driver registration', { rows: [{ label: 'One-time registration fee', amt: DRIVER_FEE }], discount: 0, total: DRIVER_FEE }, () => {
            show('driver-apply');
            setApplyStep(1);
        });
    });

    $$('[data-applynext]').forEach((b) => b.addEventListener('click', () => {
        const next = +b.dataset.applynext;
        if (next === 2) {
            const dob = $('apply-dob').value;
            if (!dob || !$('apply-address').value.trim() || !$('apply-city').value.trim() || !$('apply-zip').value.trim())
                return toast('Please fill in every field');
            const age = (Date.now() - new Date(dob).getTime()) / 3.15576e10;
            if (age < 18) return toast('You must be 18 or older to drive');
        }
        if (next === 3) {
            if (!$('apply-license').value.trim() || !$('apply-state').value) return toast('Add your license details');
        }
        setApplyStep(next);
    }));

    $('apply-upload').addEventListener('click', () => $('apply-license-file').click());
    $('apply-license-file').addEventListener('change', (e) => {
        if (e.target.files?.length) {
            $('apply-upload').classList.add('done');
            $('apply-upload-label').textContent = '✓ License photo attached';
        }
    });

    $('apply-submit').addEventListener('click', () => {
        if (!$('apply-make').value.trim() || !$('apply-model').value.trim() || !$('apply-year').value || !$('apply-plate').value.trim())
            return toast('Complete your vehicle details');
        user.isDriver = true;
        user.vehicle = { make: $('apply-make').value.trim(), model: $('apply-model').value.trim(), year: $('apply-year').value, color: $('apply-color').value.trim(), plate: $('apply-plate').value.trim() };
        save();
        startApplicationReview(false);
    });

    $('apply-start-driving').addEventListener('click', () => enterDriver());
}

function setApplyStep(step) {
    $$('.apply-step').forEach((el) => el.classList.toggle('active', el.dataset.astep === String(step)));
    const pct = { 1: 25, 2: 55, 3: 85, review: 100, approved: 100 }[step] || 0;
    $('apply-progress').style.width = pct + '%';
}

function startApplicationReview(resumed) {
    show('driver-apply');
    setApplyStep('review');
    if (resumed) toast('Your application is almost done processing…');
    setTimeout(() => {
        user.driverApproved = true;
        save();
        setApplyStep('approved');
        if (navigator.vibrate) navigator.vibrate([60, 40, 60, 40, 120]);
    }, 3000);
}

/* ── Driver mode ────────────────────────────────────────── */

function enterDriver() {
    mode = 'driver';
    show('driver');
    if (!maps.driver) {
        maps.driver = makeMap('map-driver');
        markers.driverMe = addMarker(maps.driver, [myLoc.lat, myLoc.lng], carIcon);
        locate(() => { maps.driver?.setView([myLoc.lat, myLoc.lng], 14); markers.driverMe.setLatLng([myLoc.lat, myLoc.lng]); });
    }
    renderDriverStats();
}

function renderDriverStats() {
    const today = todayEarnings();
    $('driver-today').textContent = money(today);
    $('driver-trips').textContent = user.payouts.filter(isToday).length;
    const hours = driverState.onlineSince ? (Date.now() - driverState.onlineSince) / 3.6e6 : 0;
    $('driver-hours').textContent = `${hours.toFixed(1)}h`;
    const r = user.stats.ratingCount ? user.stats.ratingSum / user.stats.ratingCount : 5;
    $('driver-rating').textContent = `${r.toFixed(1)}★`;

    // payout setup + live/practice indicator
    $('driver-payout-banner').hidden = !PAYMENT_API || liveDriver();
    const chip = $('driver-mode-chip');
    chip.hidden = !PAYMENT_API;
    chip.textContent = liveDriver() ? '🟢 LIVE' : 'PRACTICE';
    chip.classList.toggle('green', liveDriver());
}

const isToday = (p) => new Date(p.at).toDateString() === new Date().toDateString();
const todayEarnings = () => user.payouts.filter(isToday).reduce((s, p) => s + p.amount, 0);

function wireDriver() {
    $('driver-online').addEventListener('change', (e) => {
        driverState.online = e.target.checked;
        $('driver-online-label').textContent = driverState.online ? 'Online' : 'Offline';
        $('driver-pulse').hidden = !driverState.online;
        $('driver-idle-msg').textContent = driverState.online
            ? 'Scanning for stranded drivers near you…'
            : "You're offline. Go online to receive rescue requests.";
        if (driverState.online) {
            driverState.onlineSince = driverState.onlineSince || Date.now();
            if (liveDriver()) {
                toast('You\'re LIVE — watching for real requests 📡', 'ok');
                startLivePolling();
            } else {
                toast(PAYMENT_API ? 'Practice mode — set up payouts to take live jobs' : 'You\'re online — watching for requests 📡', 'ok');
                queueRequest(rand(4000, 8000));
            }
        } else {
            clearTimeout(driverState.requestTimer);
            clearInterval(driverState.pollTimer);
        }
    });
    $('driver-assistant').addEventListener('click', openAssistant);
    $('driver-payout-setup').addEventListener('click', startDriverOnboarding);

    // request modal
    $('req-accept').addEventListener('click', acceptRequest);
    $('req-decline').addEventListener('click', () => {
        closeModals();
        stopReqCountdown();
        toast('Request declined');
        if (pendingReq?.real) passedOrders.set(pendingReq.sessionId, Date.now());
        else queueRequest(rand(6000, 12000));
        pendingReq = null;
    });

    $('job-action').addEventListener('click', advanceJob);

    // PIN verification modal
    $('pin-confirm').addEventListener('click', verifyJobPin);
    $('pin-cancel').addEventListener('click', closeModals);
    $('pin-input').addEventListener('keydown', (e) => { if (e.key === 'Enter') verifyJobPin(); });
}

function stopDriverSim() {
    clearTimeout(driverState.requestTimer);
    clearInterval(driverState.pollTimer);
    stopReqCountdown();
    driverState = { online: false, onlineSince: null, requestTimer: null };
    const t = $('driver-online');
    if (t) { t.checked = false; $('driver-online-label').textContent = 'Offline'; $('driver-pulse').hidden = true; }
    job = null;
    $('driver-job').hidden = true;
    $('driver-idle').hidden = false;
}

function queueRequest(delay) {
    clearTimeout(driverState.requestTimer);
    driverState.requestTimer = setTimeout(() => {
        if (!driverState.online || job) return;
        showIncomingRequest();
    }, delay);
}

let pendingReq = null, reqInterval = null;
const passedOrders = new Map(); // sessionId → time declined/expired (re-offer after 90s)

/* Live dispatch: poll the server for real paid orders */
function startLivePolling() {
    clearInterval(driverState.pollTimer);
    const poll = async () => {
        if (!driverState.online || job || pendingReq) return;
        try {
            const r = await fetch(`${PAYMENT_API}/api/orders/open`, { headers: { 'X-Driver-Token': user.driverToken } });
            const d = await r.json();
            if (!r.ok) throw new Error(d.error || 'poll failed');
            const next = (d.orders || []).find((o) => (Date.now() - (passedOrders.get(o.sessionId) || 0)) > 90000);
            if (next) showIncomingRequest(next);
        } catch (err) {
            // stay online; surface persistent auth problems once
            if (String(err.message).includes('authorized')) {
                toast('Payout setup expired — tap "Set up" to reconnect');
                $('driver-online').checked = false;
                $('driver-online').dispatchEvent(new Event('change'));
            }
        }
    };
    driverState.pollTimer = setInterval(poll, 7000);
    poll();
}

function showIncomingRequest(realOrder = null) {
    if (realOrder) {
        const s = SERVICES[realOrder.service];
        pendingReq = {
            real: true,
            sessionId: realOrder.sessionId,
            service: realOrder.service,
            customer: 'Verified customer',
            address: realOrder.notes || 'See map after accepting',
            distance: Number(realOrder.distanceMiles) || 0,
            fuel: realOrder.gallons ? Math.round((GAS_TYPES.find((g) => g.id === realOrder.gasType)?.price || 3.29) * realOrder.gallons * 100) / 100 : 0,
            fee: null,
            payout: realOrder.driverAmount,
            notes: realOrder.notes || '',
            gallons: realOrder.gallons, gasType: realOrder.gasType,
        };
        $('req-service').textContent = `${s.icon} ${s.name} — LIVE request`;
        $('req-customer').textContent = pendingReq.customer;
        $('req-distance').textContent = `${pendingReq.distance.toFixed(1)} mi away`;
        $('req-payout').textContent = money(pendingReq.payout) + (pendingReq.fuel ? ' (incl. fuel reimbursed + pickup fee)' : '');
        openModal('modal-request');
        if (navigator.vibrate) navigator.vibrate([100, 60, 100]);
        startReqCountdown(() => {
            passedOrders.set(pendingReq?.sessionId, Date.now());
            closeModals();
            pendingReq = null;
            toast('Request expired');
        });
        return;
    }
    demoIncomingRequest();
}

function demoIncomingRequest() {
    const svcKey = pick(Object.keys(SERVICES));
    const s = SERVICES[svcKey];
    const distance = rand(1, 11);
    const { fee } = serviceFee(svcKey, distance);
    let fuel = 0, fuelPickupFee = 0, fuelLabel = '';
    if (svcKey === 'gas') {
        const g = pick(GAS_TYPES);
        const gallons = Math.floor(rand(2, 13));
        fuel = Math.round(g.price * gallons * 100) / 100;
        fuelPickupFee = FUEL_PICKUP_FEE;
        fuelLabel = ` (+${money(fuel)} fuel reimbursed +${money(fuelPickupFee)} pickup)`;
    }
    pendingReq = {
        service: svcKey,
        customer: pick(CUSTOMER_NAMES),
        address: `${Math.floor(rand(100, 9900))} ${pick(STREETS)}`,
        distance,
        fee, fuel, fuelPickupFee,
        payout: driverCut(fee) + fuel + fuelPickupFee,
        notes: Math.random() < 0.5 ? pick(['Silver sedan on the shoulder', 'In the Walmart parking lot', 'Hazards are on', 'Near the gas station entrance']) : '',
    };
    $('req-service').textContent = `${s.icon} ${s.name} request`;
    $('req-customer').textContent = pendingReq.customer;
    $('req-distance').textContent = `${pendingReq.distance.toFixed(1)} mi away`;
    $('req-payout').textContent = `${money(driverCut(fee))}${fuelLabel}`;
    openModal('modal-request');
    if (navigator.vibrate) navigator.vibrate([100, 60, 100]);
    startReqCountdown(() => {
        closeModals();
        pendingReq = null;
        toast('Request expired');
        queueRequest(rand(6000, 12000));
    });
}

function startReqCountdown(onExpire) {
    let left = 15;
    $('req-count').textContent = left;
    $('req-ring').style.strokeDashoffset = 0;
    reqInterval = setInterval(() => {
        left--;
        $('req-count').textContent = left;
        $('req-ring').style.strokeDashoffset = 126 * (1 - left / 15);
        if (left <= 0) {
            stopReqCountdown();
            onExpire();
        }
    }, 1000);
}

function stopReqCountdown() { clearInterval(reqInterval); reqInterval = null; }

async function acceptRequest() {
    stopReqCountdown();
    closeModals();
    if (pendingReq?.real) {
        try {
            const r = await fetch(`${PAYMENT_API}/api/orders/accept`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Driver-Token': user.driverToken },
                body: JSON.stringify({ session_id: pendingReq.sessionId }),
            });
            const d = await r.json();
            if (!r.ok) {
                passedOrders.set(pendingReq.sessionId, Date.now());
                pendingReq = null;
                return toast(d.error === 'order already taken' ? 'Another driver got there first' : `Could not accept: ${d.error}`);
            }
        } catch {
            pendingReq = null;
            return toast('Network hiccup — could not accept, will keep watching');
        }
    }
    job = { ...pendingReq, stage: 0, pin: pendingReq.real ? null : newPin() };
    pendingReq = null;
    $('driver-idle').hidden = true;
    $('driver-job').hidden = false;
    const s = SERVICES[job.service];
    $('job-service').textContent = `${s.icon} ${s.name}`;
    $('job-payout').textContent = money(job.payout);
    $('job-customer').textContent = job.customer;
    $('job-address').textContent = `${job.address} · ${job.distance.toFixed(1)} mi`;
    $('job-notes').textContent = job.notes ? `“${job.notes}”` : '';
    $('job-action').textContent = job.service === 'gas' ? 'Pick up fuel & navigate' : 'Navigate to customer';
    toast(`Job accepted — head to ${job.address} 🚗`, 'ok');

    // drop a customer pin on the driver map
    const ang = Math.random() * Math.PI * 2;
    const d = 0.012 * job.distance / 2;
    job.mapPin = addMarker(maps.driver, [myLoc.lat + Math.sin(ang) * d, myLoc.lng + Math.cos(ang) * d], meIcon);
    if (maps.driver && hasMaps()) maps.driver.fitBounds(L.latLngBounds([myLoc.lat, myLoc.lng], job.mapPin.getLatLng()), { padding: [40, 40] });
}

function advanceJob() {
    if (!job) return;
    if (job.stage === 0) {
        job.stage = 1;
        $('job-action').textContent = 'I\'ve arrived';
        toast('Navigation started (demo) 🧭');
    } else if (job.stage === 1) {
        job.stage = 2;
        $('job-action').textContent = job.real ? '🔐 Enter code & finish job' : '🔐 Enter customer\'s code';
        toast('Customer notified you\'ve arrived 📍', 'ok');
        if (job.real) {
            // tell the server — the customer's tracking flips to "arrived" and shows their code
            fetch(`${PAYMENT_API}/api/orders/arrived`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Driver-Token': user.driverToken },
                body: JSON.stringify({ session_id: job.sessionId }),
            }).catch(() => {});
        } else {
            // demo: the pretend customer reads their code out loud
            const j = job;
            setTimeout(() => { if (job === j) toast(`${j.customer}: "My code is ${j.pin}"`, 'ok'); }, 1500);
        }
    } else if (job.stage === 2) {
        $('pin-input').value = '';
        $('pin-error').textContent = '';
        openModal('modal-pin');
        setTimeout(() => $('pin-input').focus(), 150);
    } else {
        finishJob();
    }
}

async function verifyJobPin() {
    const code = $('pin-input').value.trim();

    if (job.real) {
        // The spoken code IS the payout authorization — the server verifies it,
        // then transfers 60% of the fee + 100% of fuel straight to the driver's bank.
        const btn = $('pin-confirm');
        btn.disabled = true;
        try {
            const r = await fetch(`${PAYMENT_API}/api/orders/complete`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'X-Driver-Token': user.driverToken },
                body: JSON.stringify({ session_id: job.sessionId, pin: code }),
            });
            const d = await r.json();
            btn.disabled = false;
            if (r.status === 403) {
                $('pin-error').textContent = 'Wrong code — ask the customer again';
                if (navigator.vibrate) navigator.vibrate(120);
                return;
            }
            if (!r.ok && !d.payout_pending) {
                $('pin-error').textContent = d.error || 'Something went wrong — try again';
                return;
            }
            closeModals();
            finishRealJob(job.payout, !!d.payout_pending);
        } catch {
            btn.disabled = false;
            $('pin-error').textContent = 'Network hiccup — try again';
        }
        return;
    }

    if (code !== job.pin) {
        $('pin-error').textContent = 'Wrong code — ask the customer again';
        if (navigator.vibrate) navigator.vibrate(120);
        return;
    }
    closeModals();
    job.stage = 3;
    $('job-action').textContent = `Complete job · collect ${money(job.payout)}`;
    toast('Customer verified ✓ — do your thing', 'ok');
}

// A live job just completed — the money already moved server-side.
function finishRealJob(amount, payoutPending) {
    user.payouts.unshift({ service: job.service, amount, tip: 0, at: Date.now(), customer: job.customer });
    user.stats.earned += amount;
    user.stats.trips++;
    user.week[new Date().getDay()] += amount;
    save();
    if (job.mapPin) job.mapPin.remove();
    job = null;
    $('driver-job').hidden = true;
    $('driver-idle').hidden = false;
    renderDriverStats();
    toast(payoutPending
        ? `Job complete ✅ ${money(amount)} payout is queued — it retries automatically`
        : `💰 Paid to your bank instantly: +${money(amount)}`, payoutPending ? '' : 'ok');
    if (navigator.vibrate) navigator.vibrate([60, 30, 60]);
}

function finishJob() {
    const tip = Math.random() < 0.65 ? pick([2, 3, 5, 5, 10]) : 0;
    const serviceCut = driverCut(job.fee);
    const fuel = job.fuel;
    const fuelPickupFee = job.fuelPickupFee || 0;
    const total = job.payout + tip;
    const rating = pick([5, 5, 5, 5, 4]);
    user.payouts.unshift({ service: job.service, amount: total, tip, at: Date.now(), customer: job.customer });
    user.stats.earned += total;
    user.stats.trips++;
    user.stats.tips += tip;
    user.stats.ratingSum += rating;
    user.stats.ratingCount++;
    user.week[new Date().getDay()] += total;
    save();
    if (job.mapPin) job.mapPin.remove();
    job = null;
    $('driver-job').hidden = true;
    $('driver-idle').hidden = false;
    renderDriverStats();
    toast(`💰 Paid instantly: +${money(total)}`, 'ok');
    const breakdown = `${money(serviceCut)} fare` +
        (fuel > 0 ? ` + ${money(fuel)} fuel reimbursed + ${money(fuelPickupFee)} pickup fee` : '') +
        (tip > 0 ? ` + ${money(tip)} tip` : '');
    setTimeout(() => toast(`Breakdown: ${breakdown}`, 'ok'), 1200);
    if (navigator.vibrate) navigator.vibrate([60, 30, 60]);
    if (driverState.online) queueRequest(rand(7000, 14000));
}

/* ── Earnings screen ────────────────────────────────────── */

function renderEarnings() {
    const week = user.week;
    const total = week.reduce((a, b) => a + b, 0);
    $('earn-week').textContent = money(total);
    $('earn-total-trips').textContent = user.stats.trips;
    $('earn-tips').textContent = `$${Math.round(user.stats.tips)}`;
    $('earn-best').textContent = `$${Math.round(Math.max(...week))}`;

    const labels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const max = Math.max(...week, 1);
    const today = new Date().getDay();
    $('earn-bars').innerHTML = week.map((v, i) =>
        `<div class="bar${i === today ? ' today' : ''}"><i style="height:${Math.max(3, (v / max) * 100)}%"></i><span>${labels[i]}</span></div>`).join('');

    const host = $('earn-history');
    host.innerHTML = user.payouts.length
        ? user.payouts.slice(0, 12).map((p) => {
            const s = SERVICES[p.service];
            return `<div class="earn-row"><div>${s.icon} ${s.name}<span class="sub">${esc(p.customer)} · ${new Date(p.at).toLocaleString([], { month: 'short', day: 'numeric', hour: 'numeric', minute: '2-digit' })}</span></div><b class="accent-green">+${money(p.amount)}</b></div>`;
        }).join('')
        : '<p class="muted">Complete your first rescue to see payouts here.</p>';
}

/* ── Tabs & modal shell ─────────────────────────────────── */

function wireTabs() {
    $$('.tab').forEach((t) => t.addEventListener('click', () => {
        const target = t.dataset.tab;
        if (target === 'orders') renderOrders();
        if (target === 'account') renderAccount();
        if (target === 'earnings') renderEarnings();
        if (target === 'driver') renderDriverStats();
        if (target === 'home') refreshActiveBanner();
        show(target);
    }));

    $('modal-backdrop').addEventListener('click', () => {
        // request + rating modals must be answered, not dismissed
        if (!$('modal-request').hidden || !$('modal-rate').hidden) return;
        closeModals();
    });
    $('pay-cancel').addEventListener('click', closeModals);
    $('pay-confirm').addEventListener('click', () => {
        closeModals();
        const cb = payCb; payCb = null;
        cb && cb();
    });

    $$('#rate-stars button').forEach((b) => b.addEventListener('click', () => { rateVal = +b.dataset.star; paintStars(); }));
    $$('#rate-tips button').forEach((b) => b.addEventListener('click', () => {
        tipVal = +b.dataset.tip;
        $$('#rate-tips button').forEach((x) => x.classList.toggle('active', x === b));
    }));
    $('rate-submit').addEventListener('click', finishRating);

    // premium screen render hook
    const prem = $('screen-premium');
    new MutationObserver(() => { if (prem.classList.contains('active')) renderPremiumScreen(); })
        .observe(prem, { attributes: true, attributeFilter: ['class'] });
}

/* ── Dash Assistant ─────────────────────────────────────── */

const ASSISTANT_CHIPS = ['Where\'s my driver?', 'How does pricing work?', 'What\'s the code for?', 'How do drivers get paid?', 'Is Premium worth it?'];

const ASSISTANT_BRAIN = [
    { match: /where.*(driver|order)|track|eta|how long/i, reply: () => active
        ? `Your ${SERVICES[active.service].name.toLowerCase()} order is ${active.statusLabel.toLowerCase()} ${active.driver ? `— ${active.driver.name} is driving a ${active.driver.car}.` : ''} Tap the Track banner on Home to watch them come to you live on the map.`
        : 'You don\'t have an active order right now. Tap Gas Delivery or Jump Start on the Home screen and help will be on the way in minutes!' },
    { match: /price|pricing|cost|how much|fee|mile|distance/i, reply: () =>
        'Simple, Uber-style pricing:\n\n⛽ Gas delivery — $35 service fee (first 5 miles included) + $2/mile after, plus your fuel at pump price + a $5 fuel pickup fee (100% goes to your driver for the pump stop). You pick the gallons, we bring the gas.\n🔋 Jump start — starts at just $30 (first 3 miles included) + $1/mile after, so it stays under $41 unless you\'re 14+ miles out.\n\nThe further away you are, the fare adjusts automatically — you see the exact total before you pay. ⭐ Premium members get 15% off the service fee.' },
    { match: /code|pin|verify|prove/i, reply: () =>
        'Safety first 🔐 — every order gets a 4-digit code. When your driver arrives, it appears on your tracking screen. Say it to the driver; they can\'t start (or get paid for) the job without it. That way you know it\'s your driver, and they know it\'s you.' },
    { match: /paid|payout|payment.*(driver)|driver.*(paid|pay|earn|money|cut)|how do drivers/i, reply: () =>
        'Drivers keep 60% of every service fee, get fuel costs reimbursed 100% on gas runs, plus a $5 fuel pickup fee (100% theirs) for the pump stop, and keep 100% of tips. The money hits their balance the instant the customer confirms the job is complete — no waiting for a weekly deposit. 💸' },
    { match: /driver|earn|drive|job|money|sign.?up/i, reply: () =>
        user.driverApproved ? 'You\'re already an approved driver! Switch to driver mode from your Account tab, flip yourself Online, and requests will start rolling in. 60% of every fare + 100% of tips, paid instantly. 💰'
        : 'Drivers keep 60% of every fare ($18–$21+ per rescue, more on longer trips), 100% of tips, and on gas runs get fuel reimbursed 100% plus a $5 pickup fee for the pump stop — all paid instantly when the job completes. One-time $8.99 registration covers your background check. Tap "Drive & Earn" on the role screen to apply.' },
    { match: /premium|member|subscri|worth/i, reply: () =>
        user.premium ? 'You\'re Premium already ⭐ — 15% comes off every service fee automatically. It\'s working right now.'
        : 'Premium is $9.99/mo for 15% off every service fee + priority matching and free cancellations. Order twice a month and it pays for itself. Try it from the Account tab.' },
    { match: /cancel/i, reply: () => 'You can cancel free any time before your driver arrives — the Cancel button is at the bottom of the tracking screen. After arrival, cancellation isn\'t available.' },
    { match: /hour|open|close|24/i, reply: () => 'We\'re 24/7 — gas delivery and jump starts, day or night. 🌙' },
    { match: /hi|hello|hey|yo\b/i, reply: () => `Hey ${user?.name.split(' ')[0] || 'there'}! 👋 I can help with orders, pricing, the verification code, driving, or Premium. What do you need?` },
    { match: /thank|thanks|ty\b/i, reply: () => 'Anytime! Stay safe out there. 🧡' },
    { match: /real|demo|charge/i, reply: () => 'This is a demo — no real payments are processed and all data lives only on your device. Explore freely!' },
];

function wireAssistant() {
    $('assistant-close').addEventListener('click', () => $('assistant').hidden = true);
    $('assistant-send').addEventListener('click', sendAssistant);
    $('assistant-text').addEventListener('keydown', (e) => { if (e.key === 'Enter') sendAssistant(); });
    const chips = $('assistant-chips');
    ASSISTANT_CHIPS.forEach((c) => {
        const b = document.createElement('button');
        b.textContent = c;
        b.addEventListener('click', () => { $('assistant-text').value = c; sendAssistant(); });
        chips.appendChild(b);
    });
}

function openAssistant() {
    $('assistant').hidden = false;
    if (!$('assistant-msgs').children.length) {
        assistantSay(`Hi ${user?.name.split(' ')[0] || 'there'}! I'm Dash, your roadside assistant. Ask me about your order, pricing, driving, or anything GasDash. 🚗💨`);
    }
}

function assistantSay(text) {
    const typing = document.createElement('div');
    typing.className = 'a-msg bot typing';
    typing.textContent = 'Dash is typing…';
    $('assistant-msgs').appendChild(typing);
    scrollAssistant();
    setTimeout(() => {
        typing.classList.remove('typing');
        typing.textContent = text;
        scrollAssistant();
    }, rand(500, 1100));
}

function sendAssistant() {
    const input = $('assistant-text');
    const text = input.value.trim();
    if (!text) return;
    input.value = '';
    const m = document.createElement('div');
    m.className = 'a-msg user';
    m.textContent = text;
    $('assistant-msgs').appendChild(m);
    scrollAssistant();
    const hit = ASSISTANT_BRAIN.find((b) => b.match.test(text));
    assistantSay(hit ? hit.reply() : 'Good question! I\'m best with orders, pricing, the verification code, driving and Premium. For anything else, our human team is at support@gasdash.app (demo). 😄');
}

function scrollAssistant() {
    const el = $('assistant-msgs');
    el.scrollTop = el.scrollHeight;
}

/* ── PWA ────────────────────────────────────────────────── */

function wirePWA() {
    // We deliberately do NOT cache via a service worker anymore — an earlier
    // cache-first worker could pin returning visitors to a stale/broken build.
    // Register the self-retiring sw.js, which clears old caches and unregisters
    // itself, and proactively clear any leftover caches from older versions.
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('sw.js').catch(() => {});
    }
    if (window.caches) {
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k))).catch(() => {});
    }
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstall = e;
    });
}
