/* save.js — persistence behind a swappable interface.
   Everything above this file talks to `store`; swapping localStorage for a
   server later means replacing ONLY the backend object below. */

const KEY_PREFIX = 'dreambodx.';

/* Backend contract: get(key) -> string|null, set(key, string), remove(key).
   Keep it synchronous-looking but promise-based so a network backend drops in cleanly. */
const localBackend = {
  async get(key) {
    try { return localStorage.getItem(KEY_PREFIX + key); } catch { return null; }
  },
  async set(key, value) {
    try { localStorage.setItem(KEY_PREFIX + key, value); } catch { /* private mode / quota — game still plays, just doesn't persist */ }
  },
  async remove(key) {
    try { localStorage.removeItem(KEY_PREFIX + key); } catch { }
  },
};

let backend = localBackend;

/* Swap point for a real server later: setBackend({get,set,remove}) */
export function setBackend(b) { backend = b; }

export const store = {
  async getJSON(key, fallback = null) {
    const raw = await backend.get(key);
    if (raw == null) return fallback;
    try { return JSON.parse(raw); } catch { return fallback; }
  },
  async setJSON(key, value) { await backend.set(key, JSON.stringify(value)); },
  async remove(key) { await backend.remove(key); },
};

/* ---------- game save ---------- */
export async function saveGame(state) { await store.setJSON('save', state); }
export async function loadGame() { return store.getJSON('save', null); }
export async function clearGame() { await store.remove('save'); }

/* ---------- settings ---------- */
export async function loadSettings() { return store.getJSON('settings', { muted: false }); }
export async function saveSettings(s) { await store.setJSON('settings', s); }
