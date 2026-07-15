# GasDash payment server — go-live checklist

This folder is a complete Stripe payment backend for GasDash. It runs as a
free Cloudflare Worker. Until it's deployed, the app runs in demo-checkout
mode — nothing breaks.

## What you need (one time, ~10 minutes)

1. **A Stripe account** — sign up at https://dashboard.stripe.com/register
   (free; they take 2.9% + 30¢ per card charge). Complete the business
   profile so you can accept live payments.
2. **A Cloudflare account** — https://dash.cloudflare.com/sign-up (free).

## Deploy

```bash
cd gasdash/backend

# 1. Log in to Cloudflare
npx wrangler login

# 2. Add your Stripe SECRET key (starts with sk_live_... — or sk_test_... to try it first)
npx wrangler secret put STRIPE_SECRET_KEY

# 3. Ship it
npx wrangler deploy
```

Wrangler prints your worker URL, e.g. `https://gasdash-payments.YOURNAME.workers.dev`.

## Connect the app

Open `gasdash/app.js` and set the constant near the top:

```js
const PAYMENT_API = 'https://gasdash-payments.YOURNAME.workers.dev';
```

Redeploy the site (push to gh-pages). Done — "Request now" now goes through
Stripe's hosted checkout (cards, Apple Pay, Google Pay), and the money lands
in your Stripe balance.

## How it stays safe

- The customer's card is only ever entered on Stripe's page — your site and
  this worker never see card numbers (that keeps you out of PCI scope).
- The worker **recomputes the fare from scratch** ($35/$40 base, 5 miles
  included, $2/mile, pump-price fuel) — a tampered browser can't change
  the price it pays.
- Your Stripe secret key lives only in Cloudflare's encrypted secrets store.

## Test before going live

Use your `sk_test_...` key first. Stripe test mode accepts card number
`4242 4242 4242 4242` (any future expiry, any CVC) without moving real money.
When everything looks right, replace the secret with your `sk_live_...` key:
`npx wrangler secret put STRIPE_SECRET_KEY` again, then `npx wrangler deploy`.

## Phase 2 — paying drivers automatically (Stripe Connect)

Right now customer money lands in **your** Stripe balance and you pay drivers
yourself (Zelle/Cash App/etc. while volume is small). When you're ready for
true Uber-style instant driver payouts, the upgrade is **Stripe Connect
Express**: drivers onboard with their bank details through a Stripe-hosted
flow, and this worker splits each charge automatically — 60% + fuel + tip to
the driver's account, 40% of the fee to yours. Ask Claude to build the
Connect phase when you have your first real drivers.
