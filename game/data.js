/* data.js — static data + every tunable in the game.
   Balance numbers live HERE, never in logic. Comment the "why" on each. */

export const CONFIG = {
  targetDays: 30,          // the challenge length; win screen fires if goal hit before this
  energyPerDay: 4,         // 4 actions/day ≈ 2 workouts + a meal + one experiment — short sessions, "fast not idle"
  milestoneEvery: 3,       // progress-photo cadence; 3 days = players see visible change every ~2 minutes of play
  goalPhysique: 80,        // physique score (0-100) that counts as "goal body"

  // Momentum: the soft carrot/stick. Multiplies all gains.
  momentum: {
    start: 50,
    trainGain: 5,          // every workout nudges momentum up — training always feels rewarded
    goodFoodGain: 12,      // eating well is the cheapest momentum source → teaches the loop
    badFoodLoss: 15,       // junk stings momentum but NEVER stats (rule 1: no harsh punishment)
    idleLoss: 15,          // skipping training stalls momentum…
    multSpread: 125,       // …gain multiplier = 1 + (momentum-50)/multSpread → 0.6x..1.4x, wide enough to feel, never punitive
  },

  // Comeback: returning after a broken streak must feel GOOD (rule 1).
  comeback: {
    momentumBoost: 20,     // instant momentum refund on return
    gainMult: 2,           // first workout back pays double — "welcome back" moment
  },

  // Stat → body mapping. Gains are per-workout at quality 1.0, momentum-neutral.
  gains: {
    muscleRate: 0.030,     // ~0.03/workout → visible bulk change every 2-3 workouts, goal reachable ~day 20 with decent play
    leanRate: 0.030,
    statPoints: 6,         // strength/stamina points per perfect workout
    scorePerQuality: 40,   // leaderboard points per workout, scaled by quality
    foodScore: 10,         // small score for eating (even junk gives 3) — every tap gives *something*
  },

  // Tier scaling: harder gyms = tighter windows + faster, bigger payout (rule 5).
  tiers: {
    easy:   { window: 1.0,  speed: 1.0,  payout: 1.0, floor: 0.5 },  // floor 0.5: first 3 min are un-loseable (rule 3)
    medium: { window: 0.65, speed: 1.3,  payout: 1.5, floor: 0.25 },
    hard:   { window: 0.42, speed: 1.65, payout: 2.2, floor: 0.1  },
  },

  // Win/prestige
  prestige: {
    goalPhysique: 92,      // prestige runs chase a tougher body
    payoutMult: 1.25,      // and earn faster so it still feels forward
  },

  crossSellUrl: 'https://dreambodx.myshopify.com/collections/workout-plans-ebooks',
};

/* ---------- avatar creator options ---------- */
export const SKIN_TONES = [
  { id: 'porcelain', c: '#f2c9a7', shade: '#d9a87f' },
  { id: 'tan',       c: '#e9a06b', shade: '#cf8352' },
  { id: 'bronze',    c: '#c67f4a', shade: '#a5643a' },
  { id: 'brown',     c: '#96613a', shade: '#7a4c2c' },
  { id: 'deep',      c: '#5d3a22', shade: '#472b18' },
];

export const HAIRS = [
  { id: 'buzz',  lbl: 'Buzz',   c: '#2b2018' },
  { id: 'curls', lbl: 'Curls',  c: '#1c130c' },
  { id: 'spikes',lbl: 'Spikes', c: '#3a2b22' },
  { id: 'long',  lbl: 'Long',   c: '#4a2c14' },
  { id: 'none',  lbl: 'Shaved', c: null },
];

export const FRAMES = [
  { id: 'soft',    lbl: 'Soft Start', desc: 'Low muscle, higher fat. Big room to grow.', muscle: 0.18, lean: 0.25 },
  { id: 'skinny',  lbl: 'Skinny',     desc: 'Lean but weak. Build size fast.',           muscle: 0.15, lean: 0.72 },
  { id: 'average', lbl: 'Average',    desc: 'Balanced baseline. Steady gains.',          muscle: 0.35, lean: 0.45 },
  { id: 'dadbod',  lbl: 'Dad Bod',    desc: 'Muscle under the fluff. Reveal it.',        muscle: 0.42, lean: 0.30 },
];

export const OUTFITS = [
  { id: 'burn',   lbl: 'Burn',    top: '#ff5a3c', short: '#151233' },
  { id: 'mint',   lbl: 'Gains',   top: '#37e0b0', short: '#0c2a22' },
  { id: 'gold',   lbl: 'Champ',   top: '#ffc24b', short: '#2c2760' },
  { id: 'violet', lbl: 'Night',   top: '#8b7bff', short: '#151233' },
];

/* ---------- world map ---------- */
export const PLACES = [
  { id: 'gym-easy',   lbl: 'Community Gym', icon: '🏋️', tier: 'easy',   type: 'gym',  desc: 'Forgiving machines. Learn the moves.' },
  { id: 'gym-medium', lbl: 'Iron Temple',   icon: '🔩', tier: 'medium', type: 'gym',  desc: 'Tighter windows, 1.5× payout.' },
  { id: 'gym-hard',   lbl: 'Beast Lab',     icon: '🦾', tier: 'hard',   type: 'gym',  desc: 'Brutal speed, 2.2× payout.' },
  { id: 'food',       lbl: 'Food Court',    icon: '🥗', type: 'food',   desc: 'Fuel up — or fall for the junk.' },
  { id: 'rest',       lbl: 'Rest Area',     icon: '🛌', type: 'rest',   desc: 'Recover +1 energy (once a day).' },
  { id: 'arena',      lbl: 'Weekly Arena',  icon: '🏆', type: 'arena',  desc: 'The leaderboard. Where legends post.' },
];

/* ---------- machines (each mini-game has its OWN feel — rule 5) ---------- */
export const MACHINES = [
  { id: 'weights',   lbl: 'Weights',   icon: '💪', game: 'weights',
    desc: 'Tap to lift — beat the slipping bar.', statFocus: 'strength',
    gains: { muscle: 1.0, lean: 0.15, strength: 1.0, stamina: 0.2 } },
  { id: 'treadmill', lbl: 'Treadmill', icon: '🏃', game: 'treadmill',
    desc: 'Tap in the green zone, 3 strides.', statFocus: 'stamina',
    gains: { muscle: 0.15, lean: 1.0, strength: 0.2, stamina: 1.0 } },
  { id: 'bike',      lbl: 'Bike',      icon: '🚴', game: 'bike',
    desc: 'Hold a steady tap rhythm.', statFocus: 'stamina',
    gains: { muscle: 0.2, lean: 0.7, strength: 0.2, stamina: 1.0 } },
  { id: 'circuit',   lbl: 'Circuit',   icon: '⚡', game: 'circuit',
    desc: 'Whack the lit pads — fast.', statFocus: 'mixed',
    gains: { muscle: 0.55, lean: 0.55, strength: 0.55, stamina: 0.55 }, momentumBonus: 4 },
];

/* ---------- food ---------- */
export const FOODS = [
  { id: 'salad',   lbl: 'Power Salad',   icon: '🥗', good: true,  stamina: 3, strength: 1, momentum: 12, desc: '+Momentum, fuels training.' },
  { id: 'chicken', lbl: 'Grilled Chicken', icon: '🍗', good: true, stamina: 1, strength: 3, momentum: 10, desc: 'Protein. +Strength focus.' },
  { id: 'smoothie',lbl: 'Green Smoothie', icon: '🥤', good: true, stamina: 4, strength: 0, momentum: 8,  desc: 'Quick fuel. +Stamina.' },
  { id: 'burger',  lbl: 'Mega Burger',   icon: '🍔', good: false, stamina: 0, strength: 0, momentum: -15, desc: 'Feels great. Kills momentum.' },
  { id: 'soda',    lbl: 'Giga Soda',     icon: '🧋', good: false, stamina: -1, strength: 0, momentum: -10, desc: 'Sugar crash incoming.' },
  { id: 'donuts',  lbl: 'Donut Box',     icon: '🍩', good: false, stamina: 0, strength: 0, momentum: -18, desc: 'A whole box. Momentum weeps.' },
];

/* ---------- leaderboard seed (replaced entry-by-entry as the player posts scores) ---------- */
export const SEED_LB = [
  { name: 'IronMike',   score: 940, streak: 12, wins: 2 },
  { name: 'FitQueen',   score: 880, streak: 9,  wins: 2 },
  { name: 'GymRat47',   score: 815, streak: 7,  wins: 1 },
  { name: 'LeanLuna',   score: 760, streak: 5,  wins: 1 },
  { name: 'BroskiFit',  score: 690, streak: 4,  wins: 1 },
  { name: 'CardioKing', score: 640, streak: 6,  wins: 0 },
  { name: 'SwoleSam',   score: 600, streak: 3,  wins: 0 },
  { name: 'RepRhonda',  score: 555, streak: 2,  wins: 0 },
];

/* ---------- economy stubs (wired later — see economy.js) ---------- */
export const REWARD_ITEMS = [
  { id: 'outfit-neon',  type: 'cosmetic', lbl: 'Neon Set',       premium: true },
  { id: 'streak-freeze',type: 'pass',     lbl: 'Streak Freeze',  premium: true },
  { id: 'vip-league',   type: 'pass',     lbl: 'VIP League',     premium: true },
];
