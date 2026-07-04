# DreamBodX Fitness — Cinematic Storefront

Scroll-driven landing page for [DreamBodX Fitness](https://dreambodxfitness.com), built with Vite, React, GSAP ScrollTrigger, and Lenis smooth scrolling. Products and images come from the live Shopify catalog; "Buy Now" buttons create Stripe Checkout sessions.

## Run locally

```bash
npm install
npm run build
STRIPE_SECRET_KEY=sk_live_... npm start   # serves site + checkout API on :3001
```

For development with hot reload:

```bash
npm run dev            # Vite dev server on :5173, proxies /api to :3001
node server.js         # in a second terminal (needs STRIPE_SECRET_KEY)
```

## Configuration

| Env var | Purpose |
| --- | --- |
| `STRIPE_SECRET_KEY` | Stripe secret key used to create Checkout Sessions. Without it, Buy buttons show "Checkout opening soon" instead of failing. |
| `PORT` | Server port (default 3001). |

## Structure

- `src/data/products.js` — real product/collection data from the Shopify store (names, prices, CDN images, handles)
- `src/App.jsx` — hero, scroll-animated category sections, marquee, collection index, footer
- `server.js` — Express server: static hosting + `POST /api/create-checkout-session` (Stripe Checkout, inline `price_data`)

Product images link back to the product page on dreambodxfitness.com; checkout runs through Stripe's hosted page and returns to `/?checkout=success` or `/?checkout=cancelled`.
