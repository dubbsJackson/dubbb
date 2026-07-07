// Builds the game as ONE self-contained index.html (all JS/CSS/art inlined) so it
// can be served from any path with no base/asset issues — used for the public
// GitHub Pages deploy. The site root then loads the game directly.
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

export default defineConfig({
  root: 'game',
  base: './',
  plugins: [viteSingleFile()],
  build: {
    outDir: '../dist-pages',
    emptyOutDir: true,
    assetsInlineLimit: 100000000,
  },
})
