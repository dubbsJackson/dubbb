/* ═══════════════════════════════════════════════════════════
   GasDash 2.0 — full client-side app
   Customer mode: order → live tracking → rate & tip → history
   Driver mode: go online → accept jobs → complete → earnings
   All data persists locally (demo — no server, no real charges)
   ═══════════════════════════════════════════════════════════ */

'use strict';

/* ── Config ─────────────────────────────────────────────── */

const BASE_LOCATION = { lat: 35.3859, lng: -94.3985 }; // Fort Smith, AR (72904)
const TIRE_CLOSE = { h: 22, m: 30 };
const PREMIUM_FEE = 9.99;
const PREMIUM_RATE = 0.15;
const DRIVER_FEE = 8.99;

const GAS_TYPES = [
    { id: 'regular',  name: 'Regular 87',  price: 3.29 },
    { id: 'midgrade', name: 'Mid 89',      price: 3.79 },
    { id: 'premium',  name: 'Premium 93',  price: 4.29 },
    { id: 'diesel',   name: 'Diesel',      price: 3.99 },
];

const TIRE_SIZES = [
    { id: '195-65-15', price: 89.99 },  { id: '205-55-16', price: 109.99 },
    { id: '225-60-17', price: 129.99 }, { id: '235-55-18', price: 149.99 },
    { id: '245-45-19', price: 179.99 }, { id: '255-50-20', price: 199.99 },
];

const SERVICES = {
    gas:     { icon: '⛽', name: 'Gas Delivery',  from: 25, badge: '24/7' },
    jump:    { icon: '🔋', name: 'Jump Start',    from: 30, badge: '24/7' },
    tire:    { icon: '🛞', name: 'Tire Service',  from: 25, badge: 'tire-hours' },
    lockout: { icon: '🔑', name: 'Lockout Help',  from: 35, badge: '24/7' },
    tow:     { icon: '🪝', name: 'Towing',        from: 75, badge: '24/7' },
    ev:      { icon: '⚡', name: 'EV Boost',      from: 45, badge: 'NEW' },
};

const PROMOS = {
    WELCOME10: { type: 'pct',  value: 0.10, label: '10% off' },
    SAVE5:     { type: 'flat', value: 5,    label: '$5 off' },
    DASH20:    { type: 'pct',  value: 0.20, label: '20% off' },
};

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
    setTimeout(async () => {
        $('splash-screen').classList.add('hide');
        $('app').hidden = false;
        const email = Store.session();
        if (email && Store.get(email)) {
            user = Store.get(email);
            enterRoleHub();
        } else {
            show('auth');
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

function tireOpen() {
    const now = new Date();
    return now.getHours() * 60 + now.getMinutes() < TIRE_CLOSE.h * 60 + TIRE_CLOSE.m;
}

function renderServiceGrid() {
    const grid = $('service-grid');
    grid.innerHTML = '';
    Object.entries(SERVICES).forEach(([key, s]) => {
        const closed = key === 'tire' && !tireOpen();
        const badge = key === 'tire' ? (closed ? 'Closed' : 'Til 10:30p') : s.badge;
        const btn = document.createElement('button');
        btn.className = `service-card${closed ? ' disabled' : ''}`;
        btn.innerHTML = `<span class="s-badge${closed ? ' closed' : ''}">${badge}</span>
            <span class="s-icon">${s.icon}</span><span class="s-name">${s.name}</span>
            <span class="s-price">From $${s.from}</span>`;
        btn.addEventListener('click', () => openOrderBuilder(key));
        grid.appendChild(btn);
    });
}

function wireCustomer() {
    $('home-menu').addEventListener('click', () => show('account'));
    $('home-assistant').addEventListener('click', openAssistant);
    $('banner-upgrade').addEventListener('click', () => show('premium'));
    $('banner-track').addEventListener('click', () => active && show('track'));
    setInterval(() => { if ($('screen-home').classList.contains('active')) renderServiceGrid(); }, 60000);
}

/* ── Order builder ──────────────────────────────────────── */

function openOrderBuilder(service) {
    if (active) { toast('Finish your current order first'); return show('track'); }
    draft = {
        service,
        gasType: 'regular', gallons: 5,
        tireSize: TIRE_SIZES[1].id, tireCount: 1,
        towMiles: 5,
        notes: '', promo: null,
    };
    const s = SERVICES[service];
    $('order-title').textContent = `${s.icon} ${s.name}`;
    $('order-notes').value = '';
    $('promo-input').value = '';
    $('promo-msg').textContent = '';
    $('promo-msg').className = 'promo-msg';
    renderOrderOptions();
    recalc();
    show('order');
}

function renderOrderOptions() {
    const host = $('order-options');
    const d = draft;
    let html = '';
    if (d.service === 'gas') {
        html = `<div class="card"><div class="opt-group"><span class="opt-label">Fuel type</span>
            <div class="opt-pills">${GAS_TYPES.map((g) => `<button class="opt-pill${d.gasType === g.id ? ' active' : ''}" data-gas="${g.id}">${g.name} · $${g.price}</button>`).join('')}</div></div>
            <div class="opt-group"><span class="opt-label">Gallons</span>
            <div class="stepper"><button data-step="-1">−</button><b id="gal-count">${d.gallons} gal</b><button data-step="1">+</button></div></div></div>`;
    } else if (d.service === 'tire') {
        html = `<div class="card"><div class="opt-group"><span class="opt-label">Tire size</span>
            <div class="opt-pills">${TIRE_SIZES.map((t) => `<button class="opt-pill${d.tireSize === t.id ? ' active' : ''}" data-tire="${t.id}">${t.id.replaceAll('-', '/')} · $${t.price}</button>`).join('')}</div></div>
            <div class="opt-group"><span class="opt-label">How many</span>
            <div class="stepper"><button data-step="-1">−</button><b id="gal-count">${d.tireCount} tire${d.tireCount > 1 ? 's' : ''}</b><button data-step="1">+</button></div></div></div>`;
    } else if (d.service === 'tow') {
        html = `<div class="card"><div class="opt-group"><span class="opt-label">Tow distance</span>
            <div class="stepper"><button data-step="-1">−</button><b id="gal-count">${d.towMiles} mi</b><button data-step="1">+</button></div>
            <p class="fineprint">$75 hookup + $3/mile</p></div></div>`;
    } else {
        const blurb = {
            jump: 'A driver with a professional jump kit will get your battery going — usually under 5 minutes on site.',
            lockout: 'Certified driver unlocks your car with damage-free tools. Have your ID ready.',
            ev: 'Mobile DC boost adds ~20 miles of range so you can reach a charger.',
        }[d.service];
        html = `<div class="card"><p class="muted">${blurb}</p></div>`;
    }
    host.innerHTML = html;

    host.querySelectorAll('[data-gas]').forEach((b) => b.addEventListener('click', () => { draft.gasType = b.dataset.gas; renderOrderOptions(); recalc(); }));
    host.querySelectorAll('[data-tire]').forEach((b) => b.addEventListener('click', () => { draft.tireSize = b.dataset.tire; renderOrderOptions(); recalc(); }));
    host.querySelectorAll('[data-step]').forEach((b) => b.addEventListener('click', () => {
        const dir = +b.dataset.step;
        if (draft.service === 'gas') draft.gallons = Math.min(20, Math.max(1, draft.gallons + dir));
        if (draft.service === 'tire') draft.tireCount = Math.min(4, Math.max(1, draft.tireCount + dir));
        if (draft.service === 'tow') draft.towMiles = Math.min(50, Math.max(1, draft.towMiles + dir * 5));
        renderOrderOptions(); recalc();
    }));
}

function priceDraft() {
    const d = draft;
    const rows = [];
    let subtotal = 0;
    const add = (label, amt) => { rows.push({ label, amt }); subtotal += amt; };

    if (d.service === 'gas') {
        const g = GAS_TYPES.find((x) => x.id === d.gasType);
        add('Delivery fee', 25);
        add(`${g.name} × ${d.gallons} gal`, g.price * d.gallons);
    } else if (d.service === 'jump') {
        add('Jump start service', 30);
    } else if (d.service === 'tire') {
        const t = TIRE_SIZES.find((x) => x.id === d.tireSize);
        add('Delivery & install', 25);
        add(`Tire ${t.id.replaceAll('-', '/')} × ${d.tireCount}`, t.price * d.tireCount);
    } else if (d.service === 'lockout') {
        add('Lockout service', 35);
    } else if (d.service === 'tow') {
        add('Hookup fee', 75);
        add(`Distance × ${d.towMiles} mi`, 3 * d.towMiles);
    } else if (d.service === 'ev') {
        add('Mobile EV boost', 45);
    }

    let discount = 0;
    const notes = [];
    if (user.premium) { discount += subtotal * PREMIUM_RATE; notes.push('⭐ Premium −15%'); }
    if (d.promo) {
        const p = PROMOS[d.promo];
        discount += p.type === 'pct' ? subtotal * p.value : p.value;
        notes.push(`🏷️ ${d.promo} (${p.label})`);
    }
    discount = Math.min(discount, subtotal);
    return { rows, subtotal, discount, notes, total: Math.max(0, subtotal - discount) };
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
    if (!user.premium) $('premium-nudge-amt').textContent = money(p.subtotal * PREMIUM_RATE);
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

    $('promo-apply').addEventListener('click', () => {
        const code = $('promo-input').value.trim().toUpperCase();
        const msg = $('promo-msg');
        if (PROMOS[code]) {
            draft.promo = code;
            msg.textContent = `✓ ${code} applied — ${PROMOS[code].label}`;
            msg.className = 'promo-msg ok';
            toast(`Promo ${code} applied 🎉`, 'ok');
        } else {
            draft.promo = null;
            msg.textContent = 'That code isn\'t valid';
            msg.className = 'promo-msg bad';
        }
        recalc();
    });

    $('order-submit').addEventListener('click', () => {
        draft.notes = $('order-notes').value.trim();
        const p = priceDraft();
        openPayModal(`${SERVICES[draft.service].icon} ${SERVICES[draft.service].name}`, p, () => placeOrder(p));
    });
}

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

function placeOrder(pricing) {
    const d = draft;
    active = {
        id: 'GD' + Date.now().toString(36).toUpperCase(),
        service: d.service,
        pricing,
        notes: d.notes,
        placedAt: Date.now(),
        step: 0,
        statusLabel: STATUS_LABELS[0],
        driver: null,
    };
    toast('Order placed! Finding your driver…', 'ok');
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

    if (!maps.track) {
        maps.track = makeMap('map-track');
    }
    maps.track?.setView([myLoc.lat, myLoc.lng], 14);
    if (markers.trackMe) markers.trackMe.remove();
    markers.trackMe = addMarker(maps.track, [myLoc.lat, myLoc.lng], meIcon);
    if (markers.trackCar) { markers.trackCar.remove(); markers.trackCar = null; }
    if (markers.trackLine) { markers.trackLine.remove(); markers.trackLine = null; }

    // 1) find driver
    later(() => {
        active.driver = {
            name: pick(DRIVER_NAMES),
            car: pick(DRIVER_CARS),
            rating: (4.7 + Math.random() * 0.3).toFixed(2),
        };
        setStep(1);
        const dc = $('track-driver-card');
        dc.hidden = false;
        $('track-driver-avatar').textContent = active.driver.name[0];
        $('track-driver-name').textContent = active.driver.name;
        $('track-driver-vehicle').textContent = active.driver.car;
        $('track-driver-rating').textContent = `★ ${active.driver.rating}`;
        toast(`${active.driver.name} accepted your request 🚗`, 'ok');

        // 2) en route — animate car toward user
        later(() => {
            setStep(2);
            animateDriverIn();
        }, 1800);
    }, rand(2500, 4500));
}

function animateDriverIn() {
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
        const f = elapsed / totalSecs;
        const lat = carPos.lat + (myLoc.lat - carPos.lat) * f;
        const lng = carPos.lng + (myLoc.lng - carPos.lng) * f + Math.sin(elapsed * 1.3) * 0.0006 * (1 - f);
        markers.trackCar.setLatLng([lat, lng]);
        markers.trackLine.setLatLngs([[lat, lng], [myLoc.lat, myLoc.lng]]);
        const etaMin = Math.max(0, Math.ceil((1 - f) * 8));
        $('track-eta').textContent = etaMin <= 0 ? 'arriving' : `${etaMin} min`;
        if (elapsed >= totalSecs) {
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
    toast(`${active.driver.name} has arrived 📍`, 'ok');
    if (navigator.vibrate) navigator.vibrate([80, 40, 80]);
    later(() => completeOrder(), rand(6000, 9000));
}

function completeOrder() {
    if (!active) return;
    setStep(4);
    $('track-cancel').hidden = true;
    toast('Service complete! ✅', 'ok');
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
    $('track-help').addEventListener('click', openAssistant);
    $('track-call').addEventListener('click', () => toast('📞 Calling driver… (demo)'));
    $('track-msg').addEventListener('click', () => { openAssistant(); assistantSay(`I've let ${active?.driver?.name || 'your driver'} know you messaged — they'll reply through the app. Anything else I can help with?`); });
}

/* ── Rating & tip ───────────────────────────────────────── */

let rateVal = 5, tipVal = 5;

function openRating() {
    rateVal = 5; tipVal = 5;
    $('rate-avatar').textContent = active.driver.name[0];
    $('rate-name').textContent = active.driver.name.split(' ')[0];
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
    $('account-payment').addEventListener('click', () => toast('💳 Demo wallet: Visa •••• 4242'));
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
            toast('You\'re online — watching for requests 📡', 'ok');
            queueRequest(rand(4000, 8000));
        } else {
            clearTimeout(driverState.requestTimer);
        }
    });
    $('driver-assistant').addEventListener('click', openAssistant);

    // request modal
    $('req-accept').addEventListener('click', acceptRequest);
    $('req-decline').addEventListener('click', () => {
        closeModals();
        stopReqCountdown();
        toast('Request declined');
        queueRequest(rand(6000, 12000));
    });

    $('job-action').addEventListener('click', advanceJob);
}

function stopDriverSim() {
    clearTimeout(driverState.requestTimer);
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

function showIncomingRequest() {
    const svcKey = pick(Object.keys(SERVICES));
    const s = SERVICES[svcKey];
    pendingReq = {
        service: svcKey,
        customer: pick(CUSTOMER_NAMES),
        address: `${Math.floor(rand(100, 9900))} ${pick(STREETS)}`,
        distance: rand(0.8, 6.5),
        payout: rand(22, 52),
        notes: Math.random() < 0.5 ? pick(['Silver sedan on the shoulder', 'In the Walmart parking lot', 'Hazards are on', 'Near the gas station entrance']) : '',
    };
    $('req-service').textContent = `${s.icon} ${s.name} request`;
    $('req-customer').textContent = pendingReq.customer;
    $('req-distance').textContent = `${pendingReq.distance.toFixed(1)} mi away`;
    $('req-payout').textContent = money(pendingReq.payout);
    openModal('modal-request');
    if (navigator.vibrate) navigator.vibrate([100, 60, 100]);

    let left = 15;
    $('req-count').textContent = left;
    $('req-ring').style.strokeDashoffset = 0;
    reqInterval = setInterval(() => {
        left--;
        $('req-count').textContent = left;
        $('req-ring').style.strokeDashoffset = 126 * (1 - left / 15);
        if (left <= 0) {
            stopReqCountdown();
            closeModals();
            toast('Request expired');
            queueRequest(rand(6000, 12000));
        }
    }, 1000);
}

function stopReqCountdown() { clearInterval(reqInterval); reqInterval = null; }

function acceptRequest() {
    stopReqCountdown();
    closeModals();
    job = { ...pendingReq, stage: 0 };
    pendingReq = null;
    $('driver-idle').hidden = true;
    $('driver-job').hidden = false;
    const s = SERVICES[job.service];
    $('job-service').textContent = `${s.icon} ${s.name}`;
    $('job-payout').textContent = money(job.payout);
    $('job-customer').textContent = job.customer;
    $('job-address').textContent = `${job.address} · ${job.distance.toFixed(1)} mi`;
    $('job-notes').textContent = job.notes ? `“${job.notes}”` : '';
    $('job-action').textContent = 'Navigate to customer';
    toast(`Job accepted — head to ${job.address} 🚗`, 'ok');

    // drop a customer pin on the driver map
    const ang = Math.random() * Math.PI * 2;
    const d = 0.012 * job.distance / 2;
    job.pin = addMarker(maps.driver, [myLoc.lat + Math.sin(ang) * d, myLoc.lng + Math.cos(ang) * d], meIcon);
    if (maps.driver && hasMaps()) maps.driver.fitBounds(L.latLngBounds([myLoc.lat, myLoc.lng], job.pin.getLatLng()), { padding: [40, 40] });
}

function advanceJob() {
    if (!job) return;
    job.stage++;
    if (job.stage === 1) {
        $('job-action').textContent = 'I\'ve arrived';
        toast('Navigation started (demo) 🧭');
    } else if (job.stage === 2) {
        $('job-action').textContent = `Complete job · collect ${money(job.payout)}`;
        toast('Customer notified you\'ve arrived 📍', 'ok');
    } else {
        // complete
        const tip = Math.random() < 0.65 ? pick([2, 3, 5, 5, 10]) : 0;
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
        if (job.pin) job.pin.remove();
        job = null;
        $('driver-job').hidden = true;
        $('driver-idle').hidden = false;
        renderDriverStats();
        toast(tip > 0 ? `+${money(total)} earned (incl. ${money(tip)} tip) 💰` : `+${money(total)} earned 💰`, 'ok');
        if (navigator.vibrate) navigator.vibrate([60, 30, 60]);
        if (driverState.online) queueRequest(rand(7000, 14000));
    }
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

const ASSISTANT_CHIPS = ['Where\'s my driver?', 'How does pricing work?', 'Become a driver', 'Is Premium worth it?', 'Promo codes?'];

const ASSISTANT_BRAIN = [
    { match: /where.*(driver|order)|track|eta|how long/i, reply: () => active
        ? `Your ${SERVICES[active.service].name.toLowerCase()} order is ${active.statusLabel.toLowerCase()} ${active.driver ? `— ${active.driver.name} is driving a ${active.driver.car}.` : ''} Tap the Track banner on Home to watch them live.`
        : 'You don\'t have an active order right now. Tap any service on the Home screen and help will be on the way in minutes!' },
    { match: /price|pricing|cost|how much|fee/i, reply: () =>
        'Here\'s our pricing:\n⛽ Gas — $25 delivery + fuel at pump price\n🔋 Jump start — $30 flat\n🛞 Tires — $25 install + tire cost\n🔑 Lockout — $35\n🪝 Tow — $75 + $3/mi\n⚡ EV boost — $45\n\n⭐ Premium members save 15% on everything.' },
    { match: /driver|earn|drive|job|money/i, reply: () =>
        user.driverApproved ? 'You\'re already an approved driver! Switch to driver mode from your Account tab, flip yourself Online, and requests will start rolling in. You keep 100% of tips. 💰'
        : 'Drivers earn $25–$50 per rescue plus 100% of tips, paid instantly. There\'s a one-time $8.99 registration (background check + verification). Tap "Drive & Earn" on the role screen to apply — approval takes about a minute in this demo.' },
    { match: /premium|member|subscri|worth/i, reply: () =>
        user.premium ? 'You\'re Premium already ⭐ — 15% comes off every order automatically. It\'s working right now.'
        : 'Premium is $9.99/mo for 15% off every order + priority matching and free cancellations. If you order more than twice a month, it pays for itself. Try it from the Account tab.' },
    { match: /promo|code|discount|coupon/i, reply: () =>
        'Psst — try these codes at checkout:\n🏷️ WELCOME10 — 10% off\n🏷️ SAVE5 — $5 off\n🏷️ DASH20 — 20% off (limited!)' },
    { match: /cancel/i, reply: () => 'You can cancel free any time before your driver arrives — the Cancel button is at the bottom of the tracking screen. After arrival, cancellation isn\'t available.' },
    { match: /tire|hour|open|close/i, reply: () => `Tire service runs until 10:30 PM (currently ${tireOpen() ? 'OPEN ✅' : 'CLOSED ❌'}). Gas, jump starts, lockouts, tows and EV boosts are 24/7.` },
    { match: /hi|hello|hey|yo\b/i, reply: () => `Hey ${user?.name.split(' ')[0] || 'there'}! 👋 I can help with orders, pricing, driving, Premium, or promo codes. What do you need?` },
    { match: /thank|thanks|ty\b/i, reply: () => 'Anytime! Stay safe out there. 🧡' },
    { match: /real|demo|charge|payment/i, reply: () => 'This is a demo — no real payments are processed and all data lives only on your device. Explore freely!' },
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
    assistantSay(hit ? hit.reply() : 'Good question! I\'m best with orders, pricing, driving, Premium and promo codes. For anything else, our human team is at support@gasdash.app (demo). 😄');
}

function scrollAssistant() {
    const el = $('assistant-msgs');
    el.scrollTop = el.scrollHeight;
}

/* ── PWA ────────────────────────────────────────────────── */

function wirePWA() {
    if ('serviceWorker' in navigator) navigator.serviceWorker.register('sw.js').catch(() => {});
    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredInstall = e;
    });
}
