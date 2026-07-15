/**
 * GasDash payment server — Cloudflare Worker + Stripe Checkout
 *
 * Endpoints:
 *   POST /api/checkout            → creates a Stripe Checkout Session, returns { url }
 *   GET  /api/checkout?session_id → returns { paid, amount_total } for order confirmation
 *
 * The fare is ALWAYS recomputed here from the raw inputs (service, gallons,
 * distance) using the same pay scale as the app — the client never gets to
 * name its own price.
 *
 * Required secret:  STRIPE_SECRET_KEY  (wrangler secret put STRIPE_SECRET_KEY)
 * Required vars:    APP_URL            (e.g. https://dubbsjackson.github.io/dubbb/gasdash/)
 *                   ALLOWED_ORIGIN     (e.g. https://dubbsjackson.github.io)
 */

'use strict';

// ── Pay scale — keep in sync with app.js ──
const PRICING = {
    gas:  { name: 'Gas Delivery', baseFee: 35, includedMiles: 5, perMile: 2 },
    jump: { name: 'Jump Start',   baseFee: 40, includedMiles: 5, perMile: 2 },
};
const GAS_PRICES = { regular: 3.29, midgrade: 3.79, premium: 4.29, diesel: 3.99 };
const GAS_LABELS = { regular: 'Regular 87', midgrade: 'Mid 89', premium: 'Premium 93', diesel: 'Diesel' };
const PREMIUM_RATE = 0.15; // 15% off the service fee for premium members

const cents = (usd) => Math.round(usd * 100);

function corsHeaders(env) {
    return {
        'Access-Control-Allow-Origin': env.ALLOWED_ORIGIN || '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };
}

function json(body, status, env) {
    return new Response(JSON.stringify(body), {
        status,
        headers: { 'Content-Type': 'application/json', ...corsHeaders(env) },
    });
}

// Compute the fare server-side from raw order inputs.
function computeFare(order) {
    const svc = PRICING[order.service];
    if (!svc) throw new Error('unknown service');

    const distance = Number(order.distanceMiles);
    if (!Number.isFinite(distance) || distance < 0 || distance > 60) throw new Error('bad distance');
    const extraMiles = Math.max(0, Math.ceil(distance - svc.includedMiles));
    let fee = svc.baseFee + extraMiles * svc.perMile;

    let fuel = 0, fuelLabel = null;
    if (order.service === 'gas') {
        const gallons = Number(order.gallons);
        const price = GAS_PRICES[order.gasType];
        if (!price) throw new Error('bad fuel type');
        if (!Number.isInteger(gallons) || gallons < 1 || gallons > 20) throw new Error('bad gallons');
        fuel = Math.round(price * gallons * 100) / 100;
        fuelLabel = `${GAS_LABELS[order.gasType]} × ${gallons} gal (pump price)`;
    }

    let discount = 0;
    if (order.premium === true) discount = Math.round(fee * PREMIUM_RATE * 100) / 100;

    return { svc, fee, extraMiles, fuel, fuelLabel, discount, total: fee + fuel - discount };
}

async function stripe(env, path, params) {
    const res = await fetch(`https://api.stripe.com/v1/${path}`, {
        method: params ? 'POST' : 'GET',
        headers: {
            Authorization: `Bearer ${env.STRIPE_SECRET_KEY}`,
            ...(params ? { 'Content-Type': 'application/x-www-form-urlencoded' } : {}),
        },
        body: params ? new URLSearchParams(params).toString() : undefined,
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || `Stripe error ${res.status}`);
    return data;
}

export default {
    async fetch(request, env) {
        const url = new URL(request.url);

        if (request.method === 'OPTIONS') {
            return new Response(null, { status: 204, headers: corsHeaders(env) });
        }

        if (url.pathname !== '/api/checkout') {
            return json({ error: 'not found' }, 404, env);
        }

        try {
            // ── Confirm a session after the customer returns from Stripe ──
            if (request.method === 'GET') {
                const id = url.searchParams.get('session_id');
                if (!id || !/^cs_/.test(id)) return json({ error: 'bad session id' }, 400, env);
                const session = await stripe(env, `checkout/sessions/${encodeURIComponent(id)}`);
                return json({
                    paid: session.payment_status === 'paid',
                    amount_total: session.amount_total,
                    metadata: session.metadata || {},
                }, 200, env);
            }

            // ── Create a Checkout Session ──
            if (request.method === 'POST') {
                const order = await request.json();
                const fare = computeFare(order);

                const appUrl = (env.APP_URL || '').replace(/\/?$/, '/');
                const params = {
                    mode: 'payment',
                    'payment_method_types[0]': 'card',
                    success_url: `${appUrl}?checkout=success&session_id={CHECKOUT_SESSION_ID}`,
                    cancel_url: `${appUrl}?checkout=cancel`,
                    'metadata[service]': order.service,
                    'metadata[distanceMiles]': String(order.distanceMiles),
                    'metadata[notes]': String(order.notes || '').slice(0, 120),
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
                }
                if (order.service === 'gas') {
                    params['metadata[gasType]'] = order.gasType;
                    params['metadata[gallons]'] = String(order.gallons);
                }

                const session = await stripe(env, 'checkout/sessions', params);
                return json({ url: session.url, total: cents(fare.total) }, 200, env);
            }

            return json({ error: 'method not allowed' }, 405, env);
        } catch (err) {
            return json({ error: err.message }, 400, env);
        }
    },
};
