/**
 * GasDash payment + dispatch server — Cloudflare Worker + Stripe
 *
 * Customer money:
 *   POST /api/checkout             → Stripe Checkout Session for the fare, { url }
 *   GET  /api/checkout?session_id  → confirm payment; registers the paid order
 *                                    for dispatch and returns its verification PIN
 *
 * Drivers (Stripe Connect Express — instant payout after each job):
 *   POST /api/driver/onboard       → creates Connect account + hosted onboarding link
 *   GET  /api/driver/status        → is the driver's bank set up? (?account_id=acct_…)
 *
 * Dispatch (driver requests use header  X-Driver-Token):
 *   GET  /api/orders/open          → paid orders waiting for a driver
 *   POST /api/orders/accept        → claim an order            { session_id }
 *   POST /api/orders/arrived       → mark arrival              { session_id }
 *   POST /api/orders/complete      → finish job                { session_id, pin }
 *                                    PIN correct → Stripe transfer to the driver:
 *                                    60% of service fee + 100% of fuel. The spoken
 *                                    PIN is what authorizes the payout.
 *   GET  /api/orders/status        → customer polls their order (?session_id=cs_…)
 *
 * The fare and the driver's cut are ALWAYS recomputed server-side.
 *
 * Setup: secret STRIPE_SECRET_KEY; vars APP_URL, ALLOWED_ORIGIN;
 *        KV binding ORDERS (npx wrangler kv namespace create ORDERS).
 */

'use strict';

// ── Pay scale — keep in sync with app.js ──
const PRICING = {
    gas:  { name: 'Gas Delivery', baseFee: 35, includedMiles: 5, perMile: 2 },
    jump: { name: 'Jump Start',   baseFee: 30, includedMiles: 3, perMile: 2 },
};
const GAS_PRICES = { regular: 3.29, midgrade: 3.79, premium: 4.29, diesel: 3.99 };
const GAS_LABELS = { regular: 'Regular 87', midgrade: 'Mid 89', premium: 'Premium 93', diesel: 'Diesel' };
const PREMIUM_RATE = 0.15;   // 15% off the service fee for premium members
const DRIVER_SHARE = 0.60;   // driver keeps 60% of the service fee (fuel is 100% theirs)
const FUEL_PICKUP_FEE = 5;   // gas orders only: flat fee for the pump stop, 100% to the driver, not discounted
const ORDER_TTL_S = 60 * 60 * 12; // orders expire from dispatch after 12h

const cents = (usd) => Math.round(usd * 100);
const newPin = () => String(Math.floor(100000 + Math.random() * 900000)); // 6 digits

function corsHeaders(env) {
    return {
        'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, X-Driver-Token',
    };
}

function json(body, status, env) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(env) },
    });
}

function computeFare(order) {
    const svc = PRICING[order.service];
    if (!svc) throw new Error('unknown service');

    const distance = Number(order.distanceMiles);
    if (!Number.isFinite(distance) || distance < 0 || distance > 60) throw new Error('bad distance');
    const extraMiles = Math.max(0, Math.ceil(distance - svc.includedMiles));
    const fee = svc.baseFee + extraMiles * svc.perMile;

    let fuel = 0, fuelLabel = null, fuelPickupFee = 0;
    if (order.service === 'gas') {
        const gallons = Number(order.gallons);
        const price = GAS_PRICES[order.gasType];
        if (!price) throw new Error('bad fuel type');
        if (!Number.isInteger(gallons) || gallons < 1 || gallons > 20) throw new Error('bad gallons');
        fuel = Math.round(price * gallons * 100) / 100;
        fuelLabel = `${GAS_LABELS[order.gasType]} × ${gallons} gal (pump price)`;
        fuelPickupFee = FUEL_PICKUP_FEE;
    }

    let discount = 0;
    if (order.premium === true) discount = Math.round(fee * PREMIUM_RATE * 100) / 100;

    // Discount never touches fuel, the pickup fee, or the driver's cut of the service fee.
    const driverAmount = Math.round(fee * DRIVER_SHARE * 100) / 100 + fuel + fuelPickupFee;
    return {
        svc, fee, extraMiles, fuel, fuelLabel, fuelPickupFee, discount,
        total: fee + fuel + fuelPickupFee - discount, driverAmount,
    };
}

async function stripe(env, path, params, idemKey) {
    const res = await fetch(`https://api.stripe.com/v1/${path}`, {
        method: params ? 'POST' : 'GET',
        headers: {
            Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
            ...(params ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}),
            ...(idemKey ? { 'Idempotency-Key': idemKey } : {}),
        },
        body: params ? new URLSearchParams(params).toString() : undefined,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || `Stripe error ${res.status}`);
    return data;
}

// ── KV helpers ──
const orderKey = (id) => `order:${id}`;
const tokenKey = (t) => `driver:${t}`;

async function getOrder(env, id) {
    const raw = await env.ORDERS.get(orderKey(id));
    return raw ? JSON.parse(raw) : null;
}
async function putOrder(env, order) {
    await env.ORDERS.put(orderKey(order.sessionId), JSON.stringify(order), { expirationTtl: ORDER_TTL_S });
}
async function driverFromToken(env, request) {
    const token = request.headers.get('X-Driver-Token') || '';
    if (!/^[0-9a-f-]{36}$/.test(token)) return null;
    const raw = await env.ORDERS.get(tokenKey(token));
    return raw ? JSON.parse(raw) : null; // { account_id }
}

const publicOrder = (o) => ({
    sessionId: o.sessionId, service: o.service, gasType: o.gasType, gallons: o.gallons,
    distanceMiles: o.distanceMiles, notes: o.notes, driverAmount: o.driverAmount,
    status: o.status, createdAt: o.createdAt,
});

export default {
    async fetch(request, env) {
        const url = new URL(request.url);
        const path = url.pathname;

        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: corsHeaders(env) });
        }

        try {
            /* ═══════════ Checkout ═══════════ */

            if (path === '/api/checkout' && request.method === 'POST') {
                const order = await request.json();
                const fare = computeFare(order);
                const pin = newPin();

                const appUrl = (env.APP_URL || '').replace(/\/?$/, '/');
                const params = {
                    mode: 'payment',
                    'payment_method_types[0]': 'card',
                    success_url: `${appUrl}?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${appUrl}?checkout=cancel`,
                    'metadata[service]': order.service,
                    'metadata[distanceMiles]': String(order.distanceMiles),
                    'metadata[premium]': order.premium === true ? '1' : '0',
                    'metadata[notes]': String(order.notes || '').slice(0, 120),
                    'metadata[pin]': pin,
                    'line_items[0][quantity]': '1',
                    'line_items[0][price_data][currency]': 'usd',
                    'line_items[0][price_data][product_data][name]':
                        `GasDash ${fare.svc.name} — service fee` +
                        (fare.extraMiles ? ` (+${fare.extraMiles} mi distance)` : ''),
                    'line_items[0][price_data][unit_amount]': String(cents(fare.fee - fare.discount)),
                };
                if (fare.fuel > 0) {
                    params['line_items[1][quantity]'] = '1';
                    params['line_items[1][price_data][currency]'] = 'usd';
                    params['line_items[1][price_data][product_data][name]'] = fare.fuelLabel;
                    params['line_items[1][price_data][unit_amount]'] = String(cents(fare.fuel));
                    params['line_items[2][quantity]'] = '1';
                    params['line_items[2][price_data][currency]'] = 'usd';
                    params['line_items[2][price_data][product_data][name]'] = 'Fuel pickup fee (100% to driver)';
                    params['line_items[2][price_data][unit_amount]'] = String(cents(fare.fuelPickupFee));
                }
                if (order.service === 'gas') {
                    params['metadata[gasType]'] = order.gasType;
                    params['metadata[gallons]'] = String(order.gallons);
                }

                const session = await stripe(env, 'checkout/sessions', params);
                return json({ url: session.url, total: cents(fare.total) }, 200, env);
            }

            if (path === '/api/checkout' && request.method === 'GET') {
                const id = url.searchParams.get('session_id');
                if (!id || !/^cs_[A-Za-z0-9_]+$/.test(id)) return json({ error: 'bad session id' }, 400, env);
                const session = await stripe(env, `checkout/sessions/${encodeURIComponent(id)}`);
                const paid = session.payment_status === 'paid';
                const m = session.metadata || {};

                // First confirmation of a paid session → register it for dispatch
                if (paid && env.ORDERS && !(await getOrder(env, id))) {
                    const fare = computeFare({
                        service: m.service, gasType: m.gasType,
                        gallons: m.gallons ? Number(m.gallons) : undefined,
                        distanceMiles: Number(m.distanceMiles),
                        premium: m.premium === '1',
                    });
                    await putOrder(env, {
                        sessionId: id, service: m.service, gasType: m.gasType || null,
                        gallons: m.gallons ? Number(m.gallons) : null,
                        distanceMiles: Number(m.distanceMiles), notes: m.notes || '',
                        pin: m.pin, driverAmount: fare.driverAmount,
                        status: 'open', driver: null, createdAt: Date.now(),
                    });
                }
                return json({ paid, amount_total: session.amount_total, pin: paid ? m.pin : null }, 200, env);
            }

            /* ═══════════ Driver onboarding (Stripe Connect Express) ═══════════ */

            if (path === '/api/driver/onboard' && request.method === 'POST') {
                const body = await request.json().catch(() => ({}));
                let accountId = body.account_id;
                if (accountId && !/^acct_[A-Za-z0-9]+$/.test(accountId)) return json({ error: 'bad account id' }, 400, env);
                if (!accountId) {
                    const acct = await stripe(env, 'accounts', {
                        type: 'express',
                        'capabilities[transfers][requested]': 'true',
                        ...(body.email ? { email: String(body.email).slice(0, 120) } : {}),
                    });
                    accountId = acct.id;
                }
                const appUrl = (env.APP_URL || '').replace(/\/?$/, '/');
                const link = await stripe(env, 'account_links', {
                    account: accountId,
                    type: 'account_onboarding',
                    refresh_url: `${appUrl}?connect=refresh&account_id=${accountId}`,
                    return_url: `${appUrl}?connect=return&account_id=${accountId}`,
                });
                let token = null;
                if (env.ORDERS) {
                    token = crypto.randomUUID();
                    await env.ORDERS.put(tokenKey(token), JSON.stringify({ account_id: accountId }));
                }
                return json({ account_id: accountId, token, url: link.url }, 200, env);
            }

            if (path === '/api/driver/status' && request.method === 'GET') {
                const accountId = url.searchParams.get('account_id');
                if (!accountId || !/^acct_[A-Za-z0-9]+$/.test(accountId)) return json({ error: 'bad account id' }, 400, env);
                const acct = await stripe(env, `accounts/${encodeURIComponent(accountId)}`);
                return json({
                    ready: acct.payouts_enabled === true && acct.details_submitted === true,
                    details_submitted: acct.details_submitted === true,
                    payouts_enabled: acct.payouts_enabled === true,
                }, 200, env);
            }

            /* ═══════════ Dispatch ═══════════ */

            if (path.startsWith('/api/orders/')) {
                if (!env.ORDERS) return json({ error: 'dispatch not configured — add the ORDERS KV binding (see backend/README.md)' }, 501, env);

                // customer polling their own order — no driver token needed
                if (path === '/api/orders/status' && request.method === 'GET') {
                    const id = url.searchParams.get('session_id');
                    const order = id ? await getOrder(env, id) : null;
                    if (!order) return json({ error: 'order not found' }, 404, env);
                    return json({ status: order.status, driverAmount: order.driverAmount }, 200, env);
                }

                const driver = await driverFromToken(env, request);
                if (!driver) return json({ error: 'driver not authorized — set up payouts first' }, 401, env);

                if (path === '/api/orders/open' && request.method === 'GET') {
                    const list = await env.ORDERS.list({ prefix: 'order:' });
                    const open = [];
                    for (const k of list.keys) {
                        const raw = await env.ORDERS.get(k.name);
                        if (!raw) continue;
                        const o = JSON.parse(raw);
                        if (o.status === 'open') open.push(publicOrder(o));
                        if (open.length >= 10) break;
                    }
                    open.sort((a, b) => a.createdAt - b.createdAt);
                    return json({ orders: open }, 200, env);
                }

                const body = await request.json().catch(() => ({}));
                const order = body.session_id ? await getOrder(env, body.session_id) : null;
                if (!order) return json({ error: 'order not found' }, 404, env);

                if (path === '/api/orders/accept' && request.method === 'POST') {
                    if (order.status !== 'open') return json({ error: 'order already taken' }, 409, env);
                    order.status = 'assigned';
                    order.driver = driver.account_id;
                    await putOrder(env, order);
                    return json({ order: publicOrder(order) }, 200, env);
                }

                if (order.driver !== driver.account_id) return json({ error: 'not your order' }, 403, env);

                if (path === '/api/orders/arrived' && request.method === 'POST') {
                    if (order.status !== 'assigned') return json({ error: `order is ${order.status}` }, 409, env);
                    order.status = 'arrived';
                    await putOrder(env, order);
                    return json({ order: publicOrder(order) }, 200, env);
                }

                if (path === '/api/orders/complete' && request.method === 'POST') {
                    if (order.status === 'paid') return json({ error: 'already paid out' }, 409, env);
                    if (!['assigned', 'arrived', 'payout_failed'].includes(order.status)) {
                        return json({ error: `order is ${order.status}` }, 409, env);
                    }
                    if (String(body.pin || '') !== order.pin) return json({ error: 'wrong verification code' }, 403, env);

                    try {
                        // The spoken PIN authorizes the payout: 60% of fee + 100% of fuel.
                        const transfer = await stripe(env, 'transfers', {
                            amount: String(cents(order.driverAmount)),
                            currency: 'usd',
                            destination: driver.account_id,
                            transfer_group: order.sessionId,
                            'metadata[service]': order.service,
                        }, `payout_${order.sessionId}`);
                        order.status = 'paid';
                        order.transferId = transfer.id;
                        await putOrder(env, order);
                        return json({ paid_out: order.driverAmount, transfer: transfer.id }, 200, env);
                    } catch (err) {
                        // e.g. platform balance not yet available — job is done, payout retries later
                        order.status = 'payout_failed';
                        order.payoutError = err.message;
                        await putOrder(env, order);
                        return json({ error: `job recorded, payout pending: ${err.message}`, payout_pending: true }, 502, env);
                    }
                }
            }

            return json({ error: 'not found' }, 404, env);
        } catch (err) {
            return json({ error: err.message }, 400, env);
        }
    },
};
