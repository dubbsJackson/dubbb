# DreamBodX Fitness — Cinematic Storefront

Scroll-driven landing page for [DreamBodX Fitness](https://dreambodxfitness.com), built with Vite, React, GSAP ScrollTrigger, and Lenis smooth scrolling. Products, images, and prices come from the live Shopify catalog.

Checkout runs through **Shopify's native checkout**: single-variant products (the eBooks) use cart permalinks that jump straight into checkout, and multi-variant products open their product page on dreambodxfitness.com so shoppers can pick size/color. All orders land in the Shopify admin as normal.

The site is fully static — no backend, no API keys.

## Run locally

```bash
npm install
npm run dev       # dev server on :5173
```

## Deploy

```bash
npm run build     # outputs static site to dist/
```

Host `dist/` anywhere static (Netlify, Vercel, Cloudflare Pages, GitHub Pages, Replit).

## Structure

- `src/data/products.js` — real product/collection data from the Shopify store (names, prices, CDN images, handles, checkout variant IDs)
- `src/App.jsx` — hero, scroll-animated category sections, marquee, collection index, footer
