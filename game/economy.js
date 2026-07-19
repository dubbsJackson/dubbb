/* economy.js — XP, rewards, cosmetics, premium passes.
   MVP ships HOOKS ONLY (per CLAUDE.md): the catalog renders, premium items
   show a lock + explainer, nothing charges money. Wire a real store later. */

import { REWARD_ITEMS, CONFIG } from './data.js';

export function catalog() {
  return REWARD_ITEMS.map(item => ({ ...item, owned: false, locked: item.premium }));
}

/* Called when the player taps a locked item — the future purchase entry point. */
export function premiumTeaser(item) {
  return `👑 ${item.lbl} is a premium unlock coming in the full game.`;
}

export function crossSellUrl() {
  return CONFIG.crossSellUrl;
}
