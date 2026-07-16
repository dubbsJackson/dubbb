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

# 2. Create the order-dispatch storage (once) — paste the printed id
#    into wrangler.toml where it says REPLACE_WITH_YOUR_KV_ID
npx wrangler kv namespace create ORDERS

# 3. Add your Stripe SECRET key (starts with sk_live_... — or sk_test_... to try it first)
npx wrangler secret put STRIPE_SECRET_KEY

# 4. Ship it
npx wrangler deploy
```

**Stripe side (once):** in your Stripe dashboard, enable **Connect** →
Express accounts (Settings → Connect). That's what lets drivers plug in
their bank and receive automatic transfers.

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

## How drivers get paid automatically

1. In the app's driver mode, the driver taps **💸 Set up** — Stripe's hosted
   flow collects their identity + bank details (you never touch them).
2. Once approved, their driver mode flips from PRACTICE to **🟢 LIVE**: going
   online shows real paid customer orders near them.
3. They accept → drive → arrive → **enter the customer's 6-digit code**.
   The code is generated at payment time and only the paying customer has it,
   so it doubles as payout authorization: the moment it's entered correctly,
   the worker transfers **60% of the service fee + 100% of the fuel cost +
   the full $5 fuel pickup fee (gas orders only)** to the driver's Stripe
   balance, which pays out to their bank. The other 40% of the service fee
   stays in your Stripe balance.

**Money-timing note:** card money takes ~2 days to become available in your
Stripe balance, but driver transfers happen instantly at job completion — so
keep a small buffer in your Stripe balance (Stripe lets you top up), or the
payout is queued as "pending" and the app retries it automatically.

**Tips:** cash-only for now (the app tells customers drivers keep 100%).
Card tips through the app are a clean follow-up — ask Claude when you want it.
