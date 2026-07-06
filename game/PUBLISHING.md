# Publishing DreamBodX Fitness to Poki / CrazyGames

The game is built to both platforms' technical bars: single small bundle
(~200 KB total incl. art), mobile/touch-first portrait play, saves + mute,
no-console-error quality floor, and an SDK adapter (`platform.js`) with the
lifecycle hooks both platforms review for. This file is the submission
checklist.

## Already done in the code ✅

- [x] **Load speed** — ~14 KB gzipped JS, ~14 KB CSS, 156 KB WebP art, no framework
- [x] **Mobile-first / touch-first** — portrait layout, `pointerdown` controls, no hover-dependent UI
- [x] **Save system** — autosave + Continue, behind `save.js` (survives revisits; degrades gracefully when storage is blocked in incognito iframes)
- [x] **Progression** — 15/30-day runs, streaks, momentum, prestige mode, career wins
- [x] **Settings / mute** — sound toggle persisted; all audio is generated (no audio files)
- [x] **SDK lifecycle hooks** (`platform.js`, auto-detects Poki or CrazyGames):
  - `gameLoadingFinished` / `loadingStop` fired when the splash renders
  - `gameplayStart` on run start/continue · `gameplayStop` on game over
  - `happytime` on a win
  - midgame `commercialBreak` / `requestAd` at the End-Day pause (frequency-capped by the SDK; instant no-op when no SDK is present)
- [x] **Iframe-safe** — no top-navigation, storage failures caught, rAF time-steps clamped so backgrounded tabs don't punish the player
- [x] **Quality floor** — keyboard focus visible, `prefers-reduced-motion` respected, zero console errors

## To do at submission time

### Both platforms
- [ ] Uncomment/add the platform's `<script>` SDK tag in `game/index.html` (slots are marked in the file; ship one platform per build)
- [ ] Build (`npm run build`) and upload the contents of `dist/game/` (self-contained: `index.html` + hashed assets)
- [ ] Replace the Google Fonts `<link>` with self-hosted WOFF2 files if the reviewer flags external requests (system-font fallbacks already exist)
- [ ] Test in their QA harness: Poki → https://developers.poki.com/inspector · CrazyGames → the QA tool in the dev portal
- [ ] Decide on the cross-sell link: both platforms restrict external links — keep the DreamBodX store card for self-hosted/web builds, hide it in portal builds if flagged

### Poki specifics (developers.poki.com)
- [ ] Developer account + game submission with title, description, tags
- [ ] Thumbnail: 314×314 and 628×628 JPG/PNG (no text-heavy art; they crop)
- [ ] Game must be playable in ~5 s on a mid-range phone (already true)
- [ ] No forced login, no external redirects, no cookie banners
- [ ] Rewarded ads are optional but boost revenue — `platform.js` is the place to add `rewardedBreak` (e.g. "watch ad → +1 energy")

### CrazyGames specifics (developer.crazygames.com)
- [ ] Developer account + submission (HTML5 upload or iframe link)
- [ ] Cover images: 16:9 (1920×1080) + 512×512 icon
- [ ] Enable the "Invite/Save" features later via their SDK user module if wanted
- [ ] Their QA checks: loads over HTTPS, no broken audio autoplay (our audio only starts on user tap — compliant), works at desktop sizes too (the card layout centers at any viewport)

## Local smoke test

```bash
npm run build && npx vite preview
# open http://localhost:4173/game/ — play a full day loop, reload, Continue
```
