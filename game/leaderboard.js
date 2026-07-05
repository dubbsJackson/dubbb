/* leaderboard.js — ranking by score / streak / wins.
   Seeded + local for the MVP; all persistence goes through save.js's store,
   so a server-backed board later only swaps the storage backend. */

import { SEED_LB } from './data.js';
import { store } from './save.js';

const LB_KEY = 'leaderboard';
const MAX_ENTRIES = 25;

export async function loadBoard() {
  const saved = await store.getJSON(LB_KEY, null);
  return saved || SEED_LB.map(e => ({ ...e }));
}

export async function submitScore(entry) {
  const board = await loadBoard();
  board.push({ name: entry.name, score: entry.score, streak: entry.streak, wins: entry.wins || 0 });
  board.sort((a, b) => b.score - a.score);
  const trimmed = board.slice(0, MAX_ENTRIES);
  await store.setJSON(LB_KEY, trimmed);
  return trimmed;
}

/* key: 'score' | 'streak' | 'wins' */
export function ranked(board, key = 'score', limit = 10) {
  return [...board].sort((a, b) => (b[key] || 0) - (a[key] || 0)).slice(0, limit);
}
