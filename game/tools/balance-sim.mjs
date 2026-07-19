/* balance-sim.mjs — verifies the 30-day pacing without launching the game.
   Run: node game/tools/balance-sim.mjs
   Confirms steady play finishes near day 30 and a Beast Lab grinder can hit ~day 26. */
import { CONFIG, FRAMES, MACHINES, FOODS } from '../data.js';
import { goalWeights, physiqueScore, workoutGains, applyWorkout, applyFood, advanceDay } from '../progress.js';

const salad = FOODS.find(f => f.id === 'salad');
const machineById = id => MACHINES.find(m => m.id === id);

function newState(gender, frameId) {
  const f = FRAMES.find(x => x.id === frameId);
  let muscle = f.muscle, lean = f.lean;
  if (gender === 'woman') { muscle = Math.min(1, muscle + 0.05); lean = Math.max(0.05, lean - 0.05); } // mirror app.js startingStats
  const avatar = { gender, startWeight: f.startWeight, goalWeight: f.goalWeight };
  const weights = goalWeights(avatar);
  return {
    avatar, weights, targetDays: CONFIG.targetDays, day: 1, energy: CONFIG.energyPerDay,
    stats: { muscle, lean, strength: 0, stamina: 0 }, momentum: 50, score: 0,
    streak: 0, bestStreak: 0, trainedToday: false, restedToday: false,
    comebackPending: false, dayGain: 0, prestige: false,
    startPhysique: physiqueScore({ muscle, lean }, weights),
  };
}

// rotate through muscle + lean focused machines so both stats climb
const ROT = ['weights', 'treadmill', 'pullups', 'bike'];

function simulate(label, { gender, frame, tier, quality, workouts }) {
  const S = newState(gender, frame);
  let wonDay = null;
  for (let day = 1; day <= 30 && !wonDay; day++) {
    for (let i = 0; i < workouts; i++) {
      const m = machineById(ROT[i % ROT.length]);
      const g = workoutGains(S, m, quality, CONFIG.tiers[tier]);
      applyWorkout(S, g);
    }
    applyFood(S, salad); // one clean meal keeps momentum up
    const ev = advanceDay(S);
    if (ev.won) wonDay = day;
  }
  const ps = physiqueScore(S.stats, S.weights);
  console.log(
    `${label.padEnd(28)} ${wonDay ? 'WON day ' + wonDay : 'missed (physique ' + ps + ')'}` +
    `  final physique ${ps}`
  );
  return wonDay;
}

console.log(`goal ${CONFIG.goalPhysique} · cap ${CONFIG.dailyPhysiqueCap}/day · rate ${CONFIG.gains.muscleRate}\n`);
simulate('Casual (2×/day, medium)',   { gender: 'man',   frame: 'big',    tier: 'medium', quality: 0.66, workouts: 2 });
simulate('Steady (3×/day, medium)',   { gender: 'man',   frame: 'big',    tier: 'medium', quality: 0.74, workouts: 3 });
simulate('Beast grinder (3×/day)',    { gender: 'man',   frame: 'big',    tier: 'hard',   quality: 0.85, workouts: 3 });
simulate('Beast + max quality',       { gender: 'man',   frame: 'big',    tier: 'hard',   quality: 0.95, workouts: 3 });
simulate('Woman casual (2×/day)',     { gender: 'woman', frame: 'big',    tier: 'medium', quality: 0.66, workouts: 2 });
simulate('Woman beast (3×/day)',      { gender: 'woman', frame: 'big',    tier: 'hard',   quality: 0.90, workouts: 3 });
simulate('Bigger beast (3×/day)',     { gender: 'man',   frame: 'bigger', tier: 'hard',   quality: 0.90, workouts: 3 });
