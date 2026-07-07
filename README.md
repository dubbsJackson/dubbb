# DreamBodX Fitness — Cinematic eBook Storefront

Scroll-driven landing page for [DreamBodX Fitness](https://dreambodxfitness.com), built with Vite, React, GSAP ScrollTrigger, and Lenis smooth scrolling. Products, images, and prices come from the live Shopify catalog.

The page leads with a dedicated **eBook & digital-program showcase** — the full library of instant-download PDF guides (weight loss, GLP-1 / Ozempic, muscle building, cookbooks) — followed by the gear categories and the full collection index.

Checkout runs through **Shopify's native checkout**: single-variant products (the eBooks) use cart permalinks that jump straight into checkout, and multi-variant products open their product page on dreambodxfitness.com so shoppers can pick size/color. All orders land in the Shopify admin as normal.

The site is fully static — no backend, no API keys.

## SEO

- Rich `<title>`, meta description, keywords, canonical, Open Graph, and Twitter Card tags in `index.html`
- **JSON-LD structured data** (`Store` + `ItemList` of every eBook `Product`/`Offer`) embedded statically so search engines index the catalog without running JS
- `public/robots.txt` and `public/sitemap.xml` covering the home page and all eBook product URLs

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

- `src/data/ebooks.js` — the full eBook catalog (titles, prices, CDN covers, handles, checkout variant IDs)
- `src/data/products.js` — real gear product/collection data from the Shopify store
- `src/App.jsx` — hero, eBook showcase, scroll-animated gear categories, marquee, collection index, footer
