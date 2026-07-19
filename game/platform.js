/* platform.js — publish-platform adapter (Poki / CrazyGames).
   The game calls these lifecycle hooks at the right moments; when no SDK is
   present (local play, self-hosting) every hook is a safe no-op. At submission
   time, add the platform's <script> tag to index.html — nothing else changes,
   because every SDK call lives behind this file. */

function detect() {
  if (window.PokiSDK) return 'poki';
  if (window.CrazyGames && window.CrazyGames.SDK) return 'crazygames';
  return null;
}

export const platform = {
  name: null,

  /* Call once at boot, before the first screen renders. */
  async init() {
    this.name = detect();
    try {
      if (this.name === 'poki') await window.PokiSDK.init();
      else if (this.name === 'crazygames' && window.CrazyGames.SDK.init) await window.CrazyGames.SDK.init();
    } catch { this.name = null; }
  },

  /* Call when the first playable screen is visible (both platforms measure load time). */
  loadingFinished() {
    try {
      if (this.name === 'poki') window.PokiSDK.gameLoadingFinished();
      else if (this.name === 'crazygames') window.CrazyGames.SDK.game.loadingStop();
    } catch { }
  },

  /* Gameplay start/stop bracket actual play (not menus) — required by both platforms. */
  gameplayStart() {
    try {
      if (this.name === 'poki') window.PokiSDK.gameplayStart();
      else if (this.name === 'crazygames') window.CrazyGames.SDK.game.gameplayStart();
    } catch { }
  },
  gameplayStop() {
    try {
      if (this.name === 'poki') window.PokiSDK.gameplayStop();
      else if (this.name === 'crazygames') window.CrazyGames.SDK.game.gameplayStop();
    } catch { }
  },

  /* Positive moment signal (win, milestone) — platforms use it for their own juice. */
  happytime() {
    try {
      if (this.name === 'poki') window.PokiSDK.happytime();
      else if (this.name === 'crazygames') window.CrazyGames.SDK.game.happytime();
    } catch { }
  },

  /* Midgame ad at a natural pause (we call it on End Day). The SDKs frequency-cap
     themselves; locally this resolves immediately. Game audio is muted by the
     caller around the await. */
  async commercialBreak() {
    try {
      if (this.name === 'poki') await window.PokiSDK.commercialBreak();
      else if (this.name === 'crazygames') {
        await new Promise(resolve =>
          window.CrazyGames.SDK.ad.requestAd('midgame', { adFinished: resolve, adError: resolve }));
      }
    } catch { }
  },
};
