# ⚡ GasDash 2.0 — Roadside Assistance On-Demand

One app, two modes: **get rescued** or **be the rescuer**.

Complete rebuild of the original GasDash demo — every flow is now fully functional
end-to-end, no backend required (all data persists locally on the device).

## What's inside

**Customer mode**
- 6 services: ⛽ Gas delivery · 🔋 Jump start · 🛞 Tire service · 🔑 Lockout · 🪝 Towing · ⚡ EV boost
- Full order builder — fuel type/gallons, tire size/count, tow distance, driver notes
- Real price breakdown with Premium (15%) and promo-code discounts (`WELCOME10`, `SAVE5`, `DASH20`)
- Live tracking: animated driver on a dark-themed map, status timeline, ETA countdown
- Rate your driver + tip (drivers keep 100%)
- Order history with tap-to-open receipts
- ⭐ Premium membership ($9.99/mo, 15% off everything) with subscribe/cancel

**Driver mode**
- $8.99 registration + 3-step application (auto-approved in demo)
- Go online → incoming request cards with 15-second accept countdown
- Full job flow: accept → navigate → arrive → complete → instant payout
- Earnings dashboard: today's total, weekly bar chart, tips, payout history, rating

**Platform**
- 🤖 Dash Assistant — built-in help chat that knows your live order state
- 📲 Installable PWA (manifest + offline service worker)
- One-tap demo mode — no signup needed to try everything
- Mobile-first dark UI; on desktop it renders in a phone frame

## Run it

It's fully static — open `index.html`, or serve the folder:

```bash
npx serve gasdash
```

> Demo app: authentication and payments are simulated, data stays in
> `localStorage` on your device. No real charges ever occur.
