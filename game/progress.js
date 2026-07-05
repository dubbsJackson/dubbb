/* progress.js — pure stat math: gains, momentum, transformation, regression + comeback.
   No DOM, no storage — every function takes state in, returns changes out,
   so balance can be tested/tuned in isolation. */

import { CONFIG } from './data.js';

/* ---------- physique ---------- */

/* Goal weighting comes from which direction the player's weight goal points:
   cutting (goal < start) favors lean, bulking favors muscle, recomp is even. */
export function goalWeights(avatar) {
  const delta = avatar.goalWeight - avatar.startWeight;
  if (delta < -8) return { muscle: 0.7, lean: 1.3 };   // cut
  if (delta > 8) return { muscle: 1.3, lean: 0.7 };    // bulk
  return { muscle: 1, lean: 1 };                        // recomp
}

export function physiqueScore(stats, weights) {
  const m = stats.muscle * 100, l = stats.lean * 100;
  return Math.round((m * weights.muscle + l * weights.lean) / (weights.muscle + weights.lean));
}

/* Displayed weight walks from startWeight toward goalWeight as physique
   approaches the goal — purely cosmetic feedback, never gates anything. */
export function currentWeight(avatar, stats, weights, goal) {
  const start = physiqueFromFrame(avatar, weights);
  const now = physiqueScore(stats, weights);
  const frac = Math.max(0, Math.min(1, (now - start) / Math.max(1, goal - start)));
  return Math.round(avatar.startWeight + (avatar.goalWeight - avatar.startWeight) * frac);
}

function physiqueFromFrame(avatar, weights) {
  // starting physique implied by the chosen frame, cached on state at game start normally;
  // recomputed here defensively for older saves
  return avatar.startPhysique ?? 30;
}

/* ---------- momentum ---------- */

export function momentumMult(momentum) {
  return 1 + (momentum - 50) / CONFIG.momentum.multSpread;
}

const clampM = v => Math.max(0, Math.min(100, v));
const clamp01 = v => Math.max(0, Math.min(1, v));

/* ---------- workout result ---------- */

/* quality: 0..1 from the mini-game. tier: CONFIG.tiers entry. Returns deltas to apply. */
export function workoutGains(state, machine, quality, tier) {
  let mult = momentumMult(state.momentum) * tier.payout;
  let comeback = false;
  if (state.comebackPending) { mult *= CONFIG.comeback.gainMult; comeback = true; }
  if (state.prestige) mult *= CONFIG.prestige.payoutMult;

  const g = CONFIG.gains;
  const base = quality * mult;
  return {
    muscle: machine.gains.muscle * g.muscleRate * base,
    lean: machine.gains.lean * g.leanRate * base,
    strength: Math.round(machine.gains.strength * g.statPoints * base),
    stamina: Math.round(machine.gains.stamina * g.statPoints * base),
    score: Math.round(g.scorePerQuality * base),
    momentum: CONFIG.momentum.trainGain + (machine.momentumBonus || 0),
    comeback,
  };
}

export function applyWorkout(state, gains) {
  state.stats.muscle = clamp01(state.stats.muscle + gains.muscle);
  state.stats.lean = clamp01(state.stats.lean + gains.lean);
  state.stats.strength += gains.strength;
  state.stats.stamina += gains.stamina;
  state.score += gains.score;
  state.momentum = clampM(state.momentum + gains.momentum);
  state.trainedToday = true;
  state.comebackPending = false;
}

/* ---------- food ---------- */

export function applyFood(state, food) {
  state.stats.stamina = Math.max(0, state.stats.stamina + food.stamina);
  state.stats.strength = Math.max(0, state.stats.strength + food.strength);
  state.momentum = clampM(state.momentum + food.momentum);
  // junk slightly softens leanness — small, recoverable, never touches muscle (rule 1)
  if (!food.good) state.stats.lean = clamp01(state.stats.lean - 0.02);
  state.score += food.good ? CONFIG.gains.foodScore : 3;
}

/* ---------- day cycle ---------- */

/* Advance to the next day. Returns events for the UI:
   { milestone, streakBroken, won, lost } — comeback bonus is armed on state. */
export function advanceDay(state) {
  const events = { milestone: false, streakBroken: false, won: false, lost: false };

  if (state.trainedToday) {
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
  } else {
    // Missed training: streak breaks, momentum stalls — but gains are NEVER erased,
    // and the comeback bonus arms so returning feels like a gift, not a scold.
    events.streakBroken = state.streak > 0;
    state.streak = 0;
    state.momentum = clampM(state.momentum - CONFIG.momentum.idleLoss);
    state.comebackPending = true;
  }

  const goal = state.prestige ? CONFIG.prestige.goalPhysique : CONFIG.goalPhysique;
  const score = physiqueScore(state.stats, state.weights);
  if (score >= goal) { events.won = true; return events; }

  events.milestone = state.day % CONFIG.milestoneEvery === 0;

  state.day += 1;
  if (state.day > state.targetDays) { events.lost = true; return events; }

  state.energy = CONFIG.energyPerDay;
  state.trainedToday = false;
  state.restedToday = false;
  if (state.comebackPending) {
    state.momentum = clampM(state.momentum + CONFIG.comeback.momentumBoost);
  }
  return events;
}

/* Final leaderboard score: play points + how far the body got + streak longevity.
   Streak is weighted hard (×20) because retention is the game's one job. */
export function finalScore(state) {
  return Math.round(state.score + physiqueScore(state.stats, state.weights) * 6 + state.bestStreak * 20);
}
