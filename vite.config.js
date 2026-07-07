import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built site works on any host and any path:
// GitHub Pages project URL (…github.io/dubbb/), a custom domain root, Netlify,
// Vercel, or Cloudflare Pages — no rebuild needed when the domain changes.
export default defineConfig({
  base: './',
  plugins: [react()]
})
