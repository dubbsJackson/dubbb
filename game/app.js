/* app.js — game loop, screen router, state orchestration.
   Screens are plain functions that render into #app; state mutations go
   through progress.js pure functions and autosave via save.js. */

import { CONFIG, PLACES, MACHINES, FOODS, FRAMES } from './data.js';
import { defaultAvatar, avatarSVG, SKIN_TONES, HAIRS, OUTFITS, byId } from './avatar.js';
import { goalWeights, physiqueScore, currentWeight, workoutGains, applyWorkout, applyFood, advanceDay, finalScore, momentumMult } from './progress.js';
import { GAMES } from './challenges.js';
import { loadBoard, submitScore, ranked } from './leaderboard.js';
import { catalog, premiumTeaser, crossSellUrl } from './economy.js';
import { saveGame, loadGame, clearGame, loadSettings, saveSettings, store } from './save.js';

const app = document.getElementById('app');
let S = null;                    // live run state
let settings = { muted: false };

/* ---------- tiny sound (WebAudio blips, honors mute + reduced motion) ---------- */
let audioCtx = null;
function blip(freq = 520, dur = 0.07, type = 'triangle', vol = 0.12) {
  if (settings.muted) return;
  try {
    audioCtx = audioCtx || new (window.AudioContext || window.webkitAudioContext)();
    const o = audioCtx.createOscillator(), g = audioCtx.createGain();
    o.type = type; o.frequency.value = freq;
    g.gain.setValueAtTime(vol, audioCtx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + dur);
    o.connect(g); g.connect(audioCtx.destination);
    o.start(); o.stop(audioCtx.currentTime + dur);
  } catch { /* no audio available — fine */ }
}
const sfx = {
  tap: () => blip(520, 0.05),
  good: () => { blip(660, 0.08); setTimeout(() => blip(880, 0.1), 90); },
  bad: () => blip(180, 0.15, 'sawtooth', 0.08),
  win: () => [523, 659, 784, 1047].forEach((f, i) => setTimeout(() => blip(f, 0.14), i * 120)),
};

/* ---------- toast ---------- */
const toastEl = document.createElement('div');
toastEl.className = 'toast';
toastEl.setAttribute('role', 'status');
document.body.appendChild(toastEl);
let toastT;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => toastEl.classList.remove('show'), 2100);
}

/* ---------- helpers ---------- */
const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
const on = (root, sel, fn) => root.querySelector(sel).addEventListener('click', fn);
const brand = `<div class="brand"><div class="logo">D</div><div class="name">DREAM<span>BOD</span>X</div></div>`;
const goalFor = (st) => st.prestige ? CONFIG.prestige.goalPhysique : CONFIG.goalPhysique;
const autosave = () => { if (S) saveGame(S); };

async function career() { return store.getJSON('career', { wins: 0, bestStreak: 0 }); }
async function saveCareer(c) { await store.setJSON('career', c); }

/* ---------- boot ---------- */
async function boot() {
  settings = await loadSettings();
  screenSplash();
}

/* =================================================================
   1 · SPLASH / TITLE
================================================================= */
async function screenSplash() {
  const saved = await loadGame();
  app.innerHTML = `
    ${brand}
    <div class="tag">${CONFIG.targetDays}-DAY TRANSFORMATION CHALLENGE</div>
    <div class="stage splash-stage bg-hero"><div class="avatar-wrap" id="titleAv"></div></div>
    <h1 class="hero-title">Build the body.<br><em>Beat the streak.</em></h1>
    <p class="sub">Train, eat, and grind day by day. Watch your body transform. Skip days and momentum stalls — come back and get a bonus. Hit your goal body before day ${CONFIG.targetDays}.</p>
    ${saved ? `<button class="btn mint" id="continue">Continue — Day ${saved.day}</button>` : ''}
    <button class="btn burn" id="start">${saved ? 'New Transformation' : 'Start My Transformation'}</button>
    <div class="row">
      <button class="btn ghost small" id="lbBtn">🏆 Leaderboard</button>
      <button class="btn ghost small" id="howBtn">How to play</button>
      <button class="btn ghost small" id="mute">${settings.muted ? '🔇' : '🔊'}</button>
    </div>
    <div class="note">A DreamBodX Fitness game · progress saves on this device</div>`;

  // idle animation: the title avatar slowly cycles through the transformation
  const av = app.querySelector('#titleAv');
  const demo = defaultAvatar();
  let m = 0.2, up = true;
  const draw = () => { av.innerHTML = avatarSVG(demo, m, 0.3 + m * 0.5, { width: 130, height: 175 }); };
  draw();
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const loop = setInterval(() => {
      if (!document.body.contains(av)) return clearInterval(loop);
      m += up ? 0.05 : -0.05;
      if (m > 0.85) up = false;
      if (m < 0.2) up = true;
      draw();
    }, 420);
  }

  if (saved) on(app, '#continue', () => { S = saved; sfx.good(); screenHub(); });
  on(app, '#start', async () => {
    sfx.tap();
    if (saved && !confirm('Start over? Your current run will be replaced.')) return;
    screenSetup();
  });
  on(app, '#lbBtn', () => screenLeaderboard(() => screenSplash()));
  on(app, '#howBtn', () => screenIntro(() => screenSplash(), 'Back'));
  on(app, '#mute', async (e) => {
    settings.muted = !settings.muted;
    await saveSettings(settings);
    e.currentTarget.textContent = settings.muted ? '🔇' : '🔊';
  });
}

/* =================================================================
   2 · PROFILE SETUP
================================================================= */
function screenSetup() {
  app.innerHTML = `
    ${brand}
    <div class="tag">PROFILE SETUP</div>
    <label class="field-lbl" for="pname">Your name</label>
    <input class="name-input" id="pname" maxlength="14" placeholder="e.g. FlexMachine" autocomplete="off"/>
    <label class="field-lbl">Challenge length</label>
    <div class="grid2" id="days">
      <button class="choice" data-d="15" type="button"><div class="lbl">15-Day Sprint</div><div class="desc">Fast + intense.</div></button>
      <button class="choice sel" data-d="30" type="button"><div class="lbl">30-Day Classic</div><div class="desc">The real transformation arc.</div></button>
    </div>
    <label class="check-row"><input type="checkbox" id="age"/> I'm 13 or older</label>
    <label class="check-row dim"><input type="checkbox" id="notif"/> Remind me to keep my streak (coming soon)</label>
    <button class="btn mint" id="go">Create My Athlete →</button>
    <button class="btn ghost small" id="back">Back</button>`;

  let days = 30;
  app.querySelectorAll('#days .choice').forEach(c => c.addEventListener('click', () => {
    app.querySelectorAll('#days .choice').forEach(x => x.classList.remove('sel'));
    c.classList.add('sel');
    days = +c.dataset.d;
    sfx.tap();
  }));
  on(app, '#go', () => {
    if (!app.querySelector('#age').checked) return toast('Please confirm you are 13 or older.');
    const name = (app.querySelector('#pname').value || 'You').trim().slice(0, 14) || 'You';
    sfx.good();
    screenAvatarCreator({ name, targetDays: days });
  });
  on(app, '#back', screenSplash);
}

/* =================================================================
   3 · AVATAR CREATOR
================================================================= */
function screenAvatarCreator(profile, existingAvatar = null, prestige = false) {
  const av = existingAvatar || defaultAvatar();
  const frame = () => byId(FRAMES, av.bodyFrame);

  app.innerHTML = `
    ${brand}
    <div class="tag">CREATE YOUR ATHLETE</div>
    <div class="stage creator-stage"><div class="avatar-wrap" id="preview"></div></div>
    <div class="creator-rows">
      <div class="c-row"><div class="c-lbl">Skin</div><div class="swatches" id="skins"></div></div>
      <div class="c-row"><div class="c-lbl">Hair</div><div class="chip-row" id="hairs"></div></div>
      <div class="c-row"><div class="c-lbl">Outfit</div><div class="swatches" id="outfits"></div></div>
    </div>
    <label class="field-lbl">Body frame</label>
    <div class="grid2" id="frames"></div>
    <div class="weights-row">
      <div class="w-field">
        <label class="field-lbl" for="sw">Start weight</label>
        <div class="stepper"><button type="button" data-t="sw" data-v="-5">−</button><span id="swv"></span><button type="button" data-t="sw" data-v="5">+</button></div>
      </div>
      <div class="w-field">
        <label class="field-lbl" for="gw">Goal weight</label>
        <div class="stepper"><button type="button" data-t="gw" data-v="-5">−</button><span id="gwv"></span><button type="button" data-t="gw" data-v="5">+</button></div>
      </div>
    </div>
    <p class="note" id="goalNote"></p>
    <button class="btn mint" id="go">Lock It In →</button>
    <button class="btn ghost small" id="back">Back</button>`;

  const preview = app.querySelector('#preview');
  const draw = () => {
    const f = frame();
    preview.innerHTML = avatarSVG(av, f.muscle, f.lean, { width: 140, height: 185 });
    app.querySelector('#swv').textContent = av.startWeight + ' lb';
    app.querySelector('#gwv').textContent = av.goalWeight + ' lb';
    const d = av.goalWeight - av.startWeight;
    app.querySelector('#goalNote').textContent =
      d < -8 ? 'Cutting plan: leanness counts extra toward your goal body.' :
      d > 8 ? 'Bulking plan: muscle counts extra toward your goal body.' :
      'Recomp plan: muscle and leanness count equally.';
  };

  const skins = app.querySelector('#skins');
  SKIN_TONES.forEach(t => {
    const b = el(`<button class="swatch${t.id === av.skinTone ? ' sel' : ''}" type="button" aria-label="Skin tone ${t.id}" style="background:${t.c}"></button>`);
    b.addEventListener('click', () => { av.skinTone = t.id; sel(skins, b); sfx.tap(); draw(); });
    skins.appendChild(b);
  });
  const hairs = app.querySelector('#hairs');
  HAIRS.forEach(h => {
    const b = el(`<button class="chip${h.id === av.hair ? ' sel' : ''}" type="button">${h.lbl}</button>`);
    b.addEventListener('click', () => { av.hair = h.id; sel(hairs, b); sfx.tap(); draw(); });
    hairs.appendChild(b);
  });
  const outfits = app.querySelector('#outfits');
  OUTFITS.forEach(o => {
    const b = el(`<button class="swatch${o.id === av.outfit ? ' sel' : ''}" type="button" aria-label="Outfit ${o.lbl}" style="background:linear-gradient(135deg,${o.top},${o.short})"></button>`);
    b.addEventListener('click', () => { av.outfit = o.id; sel(outfits, b); sfx.tap(); draw(); });
    outfits.appendChild(b);
  });
  const frames = app.querySelector('#frames');
  FRAMES.forEach(f => {
    const b = el(`<button class="choice${f.id === av.bodyFrame ? ' sel' : ''}" type="button"><div class="lbl">${f.lbl}</div><div class="desc">${f.desc}</div></button>`);
    b.addEventListener('click', () => { av.bodyFrame = f.id; sel(frames, b); sfx.tap(); draw(); });
    frames.appendChild(b);
  });
  app.querySelectorAll('.stepper button').forEach(b => b.addEventListener('click', () => {
    const v = +b.dataset.v;
    if (b.dataset.t === 'sw') av.startWeight = Math.max(90, Math.min(400, av.startWeight + v));
    else av.goalWeight = Math.max(90, Math.min(400, av.goalWeight + v));
    sfx.tap(); draw();
  }));
  function sel(wrap, b) { [...wrap.children].forEach(c => c.classList.remove('sel')); b.classList.add('sel'); }

  draw();
  on(app, '#go', () => { sfx.good(); startRun(profile, av, prestige); });
  on(app, '#back', () => prestige ? screenSplash() : screenSetup());
}

/* =================================================================
   START A RUN
================================================================= */
async function startRun(profile, avatar, prestige = false) {
  const f = byId(FRAMES, avatar.bodyFrame);
  const weights = goalWeights(avatar);
  const c = await career();
  avatar.startPhysique = physiqueScore({ muscle: f.muscle, lean: f.lean }, weights);
  S = {
    profile,
    avatar,
    weights,
    targetDays: profile.targetDays || CONFIG.targetDays,
    day: 1,
    energy: CONFIG.energyPerDay,
    stats: { muscle: f.muscle, lean: f.lean, strength: Math.round(f.muscle * 30), stamina: Math.round(f.lean * 30) },
    momentum: CONFIG.momentum.start,
    score: 0,
    streak: 0,
    bestStreak: 0,
    wins: c.wins,
    trainedToday: false,
    restedToday: false,
    comebackPending: false,
    prestige,
    lastMilestone: null,
  };
  S.lastMilestone = snapshot();
  autosave();
  screenIntro(() => screenHub(), `Begin Day 1 →`);
}

const snapshot = () => ({
  muscle: S.stats.muscle, lean: S.stats.lean,
  strength: S.stats.strength, stamina: S.stats.stamina,
  physique: physiqueScore(S.stats, S.weights), day: S.day,
});

/* =================================================================
   4 · CHALLENGE INTRO (rules, comeback framing — never punishment)
================================================================= */
function screenIntro(next, btnLabel) {
  app.innerHTML = `
    ${brand}
    <div class="tag">THE CHALLENGE</div>
    <div class="rules">
      <div class="rule"><span class="r-ico">⚡</span><div><b>Every day is a quick session.</b> Spend energy on workouts and food, then end the day. Play days back-to-back — no waiting.</div></div>
      <div class="rule"><span class="r-ico">💪</span><div><b>Each machine is its own mini-game.</b> Better play = bigger gains. Harder gyms pay more.</div></div>
      <div class="rule"><span class="r-ico">🔥</span><div><b>Momentum multiplies everything.</b> Train and eat clean to build it. Junk food and skipped days stall it.</div></div>
      <div class="rule"><span class="r-ico">🛡️</span><div><b>You never lose your gains.</b> Missing a day breaks your streak — but come back and you'll get a <b class="mint-t">comeback bonus</b>.</div></div>
      <div class="rule"><span class="r-ico">🏆</span><div><b>Hit your goal body</b> (physique ${CONFIG.goalPhysique}+) before the challenge ends to win and unlock Prestige Mode.</div></div>
    </div>
    <button class="btn burn" id="go">${btnLabel}</button>`;
  on(app, '#go', () => { sfx.tap(); next(); });
}

/* =================================================================
   5 · HOME HUB
================================================================= */
function hudHTML() {
  const ps = physiqueScore(S.stats, S.weights);
  const goal = goalFor(S);
  const wt = currentWeight(S.avatar, S.stats, S.weights, goal);
  return `
    <div class="hud">
      <div class="day">DAY <b>${S.day}</b><span class="dim-t">/${S.targetDays}</span></div>
      ${S.prestige ? '<div class="prestige-pip">★ PRESTIGE</div>' : ''}
      <div class="streak">🔥 ${S.streak}</div>
    </div>
    <div class="stage bg-hero">
      <div class="avatar-wrap" id="hubAv">${avatarSVG(S.avatar, S.stats.muscle, S.stats.lean, { width: 128, height: 170 })}</div>
      <div class="physique">
        <div class="bar"><div class="fill" style="width:${Math.min(100, ps / goal * 100)}%"></div></div>
        <div class="goal">${ps} / ${goal}</div>
      </div>
    </div>
    <div class="stats">
      <div class="stat s"><div class="v">${S.stats.strength}</div><div class="k">Strength</div></div>
      <div class="stat t"><div class="v">${S.stats.stamina}</div><div class="k">Stamina</div></div>
      <div class="stat w"><div class="v">${wt}</div><div class="k">Weight lb</div></div>
      <div class="stat m"><div class="v">${S.score}</div><div class="k">Points</div></div>
    </div>
    <div class="momentum">
      <div class="top"><span>Momentum ×${momentumMult(S.momentum).toFixed(2)}</span><span>${Math.round(S.momentum)}%</span></div>
      <div class="track"><div class="m-fill" style="width:${S.momentum}%"></div></div>
    </div>
    <div class="energy-row">
      <div class="e-lbl">TODAY'S ENERGY</div>
      <div class="energy">${Array.from({ length: CONFIG.energyPerDay }, (_, i) => `<div class="pip${i < S.energy ? ' on' : ''}"></div>`).join('')}</div>
    </div>`;
}

function screenHub() {
  app.innerHTML = `
    ${hudHTML()}
    ${S.comebackPending ? `<div class="comeback-banner">💫 Comeback bonus armed — your next workout pays <b>double</b>!</div>` : ''}
    <div class="actions">
      <button class="act" id="gym"><div class="an">🏋️ Gym</div><div class="ad">Train — earn muscle, stats & points.</div></button>
      <button class="act" id="food"><div class="an">🥗 Food</div><div class="ad">Fuel momentum. Or don't.</div></button>
      <button class="act" id="map"><div class="an">🗺️ Map</div><div class="ad">Travel: harder gyms, rest, arena.</div></button>
      <button class="act" id="lb"><div class="an">🏆 Ranks</div><div class="ad">Weekly leaderboard.</div></button>
      <button class="act" id="wardrobe"><div class="an">👕 Wardrobe</div><div class="ad">Cosmetics & passes.</div></button>
      <button class="act" id="stats"><div class="an">📊 Stats</div><div class="ad">Your journey so far.</div></button>
    </div>
    <div class="foot">
      <button class="btn mint" id="endDay">End Day ${S.day} →</button>
      <button class="btn ghost small icon-btn" id="settings" aria-label="Settings">⚙️</button>
    </div>`;
  on(app, '#gym', () => screenGym('easy'));
  on(app, '#food', screenFood);
  on(app, '#map', screenMap);
  on(app, '#lb', () => screenLeaderboard(screenHub));
  on(app, '#wardrobe', screenWardrobe);
  on(app, '#stats', screenStats);
  on(app, '#endDay', endDay);
  on(app, '#settings', screenSettings);
}

/* =================================================================
   6 · MAP (tap-to-travel — rule 4)
================================================================= */
function screenMap() {
  app.innerHTML = `
    ${brand}
    <div class="tag">🗺️ THE STRIP · TAP TO TRAVEL</div>
    <div class="map-grid">
      ${PLACES.map(p => `
        <button class="place${p.tier ? ' tier-' + p.tier : ''} type-${p.type}" data-id="${p.id}">
          <span class="p-ico">${p.icon}</span>
          <span class="p-lbl">${p.lbl}</span>
          <span class="p-desc">${p.desc}</span>
        </button>`).join('')}
    </div>
    <button class="btn ghost" id="back">← Home</button>`;
  app.querySelectorAll('.place').forEach(b => b.addEventListener('click', () => {
    const p = PLACES.find(x => x.id === b.dataset.id);
    sfx.tap();
    if (p.type === 'gym') screenGym(p.tier);
    else if (p.type === 'food') screenFood();
    else if (p.type === 'rest') doRest();
    else if (p.type === 'arena') screenLeaderboard(screenMap);
  }));
  on(app, '#back', screenHub);
}

function doRest() {
  if (S.restedToday) { toast('😴 Already rested today. Back at it!'); return screenMap(); }
  if (S.energy >= CONFIG.energyPerDay) { toast('You are fully charged already.'); return screenMap(); }
  S.energy += 1;
  S.restedToday = true;
  autosave();
  sfx.good();
  toast('🛌 Recovered +1 energy.');
  screenHub();
}

/* =================================================================
   7 · GYM + MINI-GAMES
================================================================= */
function screenGym(tierId) {
  const tier = CONFIG.tiers[tierId];
  const place = PLACES.find(p => p.type === 'gym' && p.tier === tierId);
  app.innerHTML = `
    ${brand}
    <div class="tag tier-tag tier-${tierId}">${place.icon} ${place.lbl.toUpperCase()} · ${tierId.toUpperCase()} TIER · ${tier.payout}× PAYOUT</div>
    <div class="energy-row">
      <div class="e-lbl">ENERGY</div>
      <div class="energy">${Array.from({ length: CONFIG.energyPerDay }, (_, i) => `<div class="pip${i < S.energy ? ' on' : ''}"></div>`).join('')}</div>
    </div>
    <div class="stage gym-stage bg-${tierId}"><div class="avatar-wrap" id="gymAv">${avatarSVG(S.avatar, S.stats.muscle, S.stats.lean, { width: 110, height: 150 })}</div></div>
    <div class="actions" id="machines">
      ${MACHINES.map(m => `
        <button class="act m-act${S.energy < 1 ? ' locked' : ''}" data-id="${m.id}">
          <div class="cost">⚡1</div>
          <span class="m-ico ico-${m.id}" aria-hidden="true"></span>
          <div class="m-txt">
            <div class="an">${m.lbl}</div>
            <div class="ad">${m.desc}</div>
          </div>
        </button>`).join('')}
    </div>
    <div class="foot">
      <button class="btn ghost" id="back">← Back</button>
    </div>`;

  app.querySelectorAll('#machines .act').forEach(b => b.addEventListener('click', async () => {
    if (S.energy < 1) { sfx.bad(); return toast('⚡ Out of energy — end the day to recharge.'); }
    const machine = MACHINES.find(m => m.id === b.dataset.id);
    S.energy -= 1;
    sfx.tap();
    const stage = app.querySelector('.gym-stage');
    const quality = await GAMES[machine.game](stage, tier);
    const gains = workoutGains(S, machine, quality, tier);
    applyWorkout(S, gains);
    autosave();
    if (gains.comeback) { sfx.win(); toast(`💫 COMEBACK ×${CONFIG.comeback.gainMult}! +${gains.strength} STR · +${gains.stamina} STA · +${gains.score} pts`); }
    else if (quality >= 0.85) { sfx.good(); toast(`⭐ PERFECT! +${gains.strength} STR · +${gains.stamina} STA · +${gains.score} pts`); }
    else { sfx.good(); toast(`+${gains.strength} STR · +${gains.stamina} STA · +${gains.score} pts`); }
    screenGym(tierId); // re-render: avatar + pips update
  }));
  on(app, '#back', screenHub);
}

/* =================================================================
   8 · FOOD
================================================================= */
function screenFood() {
  app.innerHTML = `
    ${brand}
    <div class="tag">🥗 FOOD COURT</div>
    <div class="food-banner" role="img" aria-label="The neon food court at night"></div>
    <div class="energy-row">
      <div class="e-lbl">ENERGY</div>
      <div class="energy">${Array.from({ length: CONFIG.energyPerDay }, (_, i) => `<div class="pip${i < S.energy ? ' on' : ''}"></div>`).join('')}</div>
    </div>
    <p class="sub food-sub">Good food costs ⚡1 and builds momentum. Junk is free… that's the trap.</p>
    <div class="actions" id="foods">
      ${FOODS.map(f => `
        <button class="act${f.good ? '' : ' junk'}${f.good && S.energy < 1 ? ' locked' : ''}" data-id="${f.id}">
          <div class="cost">${f.good ? '⚡1' : 'free'}</div>
          <div class="an">${f.icon} ${f.lbl}</div>
          <div class="ad">${f.desc}</div>
        </button>`).join('')}
    </div>
    <div class="momentum">
      <div class="top"><span>Momentum</span><span>${Math.round(S.momentum)}%</span></div>
      <div class="track"><div class="m-fill" style="width:${S.momentum}%"></div></div>
    </div>
    <button class="btn ghost" id="back">← Back</button>`;

  app.querySelectorAll('#foods .act').forEach(b => b.addEventListener('click', () => {
    const food = FOODS.find(f => f.id === b.dataset.id);
    if (food.good) {
      if (S.energy < 1) { sfx.bad(); return toast('⚡ Out of energy for a proper meal.'); }
      S.energy -= 1;
    }
    applyFood(S, food);
    autosave();
    if (food.good) { sfx.good(); toast(`${food.icon} ${food.lbl} · momentum +${food.momentum}%`); }
    else { sfx.bad(); toast(`${food.icon} Tasty… momentum ${food.momentum}%`); }
    screenFood();
  }));
  on(app, '#back', screenHub);
}

/* =================================================================
   9 · END DAY → milestone / comeback / win / lose
================================================================= */
async function endDay() {
  const trained = S.trainedToday;
  const events = advanceDay(S);
  const c = await career();
  if (S.bestStreak > c.bestStreak) { c.bestStreak = S.bestStreak; await saveCareer(c); }
  autosave();

  if (events.won) return screenGameOver(true);
  if (events.lost) return screenGameOver(false);

  if (events.streakBroken) {
    sfx.bad();
    return screenComeback();
  }
  if (!trained) toast('💤 A rest day — momentum dipped, comeback bonus armed.');
  if (events.milestone) return screenMilestone();
  sfx.tap();
  screenHub();
}

/* Regression/comeback screen — stall framed WITH the gift (rule 1) */
function screenComeback() {
  app.innerHTML = `
    ${brand}
    <div class="tag">DAY ${S.day}</div>
    <div class="stage"><div class="avatar-wrap">${avatarSVG(S.avatar, S.stats.muscle, S.stats.lean, { width: 120, height: 160 })}</div></div>
    <h2 class="hero-title" style="font-size:30px">Streak broken.<br><em>Gains kept.</em></h2>
    <p class="sub">You skipped training, so momentum stalled and the 🔥 streak reset.<br><b>Nothing you earned was lost.</b></p>
    <div class="comeback-banner big">💫 COMEBACK BONUS: +${CONFIG.comeback.momentumBoost}% momentum now, and your next workout pays <b>×${CONFIG.comeback.gainMult}</b>.</div>
    <button class="btn burn" id="go">I'm Back →</button>`;
  on(app, '#go', () => { sfx.good(); screenHub(); });
}

/* Progress-photo moment every 3 days */
function screenMilestone() {
  const prev = S.lastMilestone;
  const now = snapshot();
  const d = (a, b) => { const v = b - a; return `<span class="${v >= 0 ? 'delta-up' : 'delta-down'}">${v >= 0 ? '+' : ''}${v}</span>`; };
  app.innerHTML = `
    ${brand}
    <div class="tag">📸 PROGRESS PHOTO · DAY ${S.day - 1}</div>
    <div class="photo-compare">
      <div class="photo-cell"><div class="photo-lbl">DAY ${prev.day}</div>${avatarSVG(S.avatar, prev.muscle, prev.lean, { width: 95, height: 128 })}</div>
      <div class="photo-arrow">→</div>
      <div class="photo-cell now"><div class="photo-lbl">NOW</div>${avatarSVG(S.avatar, now.muscle, now.lean, { width: 105, height: 140 })}</div>
    </div>
    <h2 class="hero-title" style="font-size:28px">Looking <em>stronger.</em></h2>
    <div class="delta-grid">
      <div class="stat"><div class="v">${d(prev.physique, now.physique)}</div><div class="k">Physique</div></div>
      <div class="stat"><div class="v">${d(prev.strength, now.strength)}</div><div class="k">Strength</div></div>
      <div class="stat"><div class="v">${d(prev.stamina, now.stamina)}</div><div class="k">Stamina</div></div>
    </div>
    <p class="sub">${now.physique >= goalFor(S) ? 'That IS the goal body — finish the day to claim it!' : `Physique <b class="gold-t">${now.physique}</b> / ${goalFor(S)} · ${S.streak} day streak 🔥`}</p>
    <button class="btn burn" id="go">Continue to Day ${S.day} →</button>`;
  S.lastMilestone = now;
  autosave();
  sfx.win();
  on(app, '#go', () => screenHub());
}

/* =================================================================
   10 · WIN / LOSE + leaderboard submit + cross-sell + prestige
================================================================= */
async function screenGameOver(won) {
  const ps = physiqueScore(S.stats, S.weights);
  const score = finalScore(S);
  if (won) {
    const c = await career();
    c.wins += 1;
    await saveCareer(c);
    S.wins = c.wins;
    sfx.win();
  } else sfx.bad();

  app.innerHTML = `
    <div class="tag">${won ? `DAY ${S.day} · GOAL BODY ACHIEVED` : `DAY ${S.targetDays} · CHALLENGE OVER`}</div>
    <div class="stage ${won ? 'win-stage' : ''}"><div class="avatar-wrap">${avatarSVG(S.avatar, S.stats.muscle, S.stats.lean, { width: 130, height: 172 })}</div></div>
    <div class="big-stat ${won ? 'win' : 'lose'}">${won ? 'GOAL HIT!' : ps >= goalFor(S) - 10 ? 'SO CLOSE' : 'RUN OVER'}</div>
    <p class="sub">Physique <b>${ps}</b>/${goalFor(S)} · Best streak <b class="gold-t">${S.bestStreak}🔥</b> · Wins <b class="gold-t">${S.wins}</b><br>Final score <b class="mint-t">${score}</b></p>
    <input class="name-input" id="lbname" maxlength="14" placeholder="Name for the leaderboard" value="${S.profile.name}"/>
    <button class="btn mint" id="submit">Post My Score →</button>
    ${won ? `<button class="btn gold" id="prestige">★ Prestige Mode — chase physique ${CONFIG.prestige.goalPhysique}</button>` : ''}
    <div class="cross">
      ${won ? 'You built the dream body in-game — now build the <b>real</b> one.' : 'The real transformation doesn\'t have a day limit.'}<br>
      <a href="${crossSellUrl()}" target="_blank" rel="noopener">Shop DreamBodX workout plans & ebooks →</a>
    </div>
    <button class="btn ghost small" id="again">Play Again</button>`;

  await clearGame();
  const doneState = S;
  on(app, '#submit', async () => {
    const name = (app.querySelector('#lbname').value || 'You').trim().slice(0, 14) || 'You';
    await submitScore({ name, score, streak: doneState.bestStreak, wins: doneState.wins });
    sfx.good();
    screenLeaderboard(() => screenSplash(), { name, score });
  });
  if (won) on(app, '#prestige', () => {
    sfx.win();
    screenAvatarCreator({ ...doneState.profile }, { ...doneState.avatar }, true);
  });
  on(app, '#again', () => { S = null; screenSplash(); });
}

/* =================================================================
   11 · LEADERBOARD (arena)
================================================================= */
async function screenLeaderboard(back, me = null) {
  const board = await loadBoard();
  app.innerHTML = `
    ${brand}
    <div class="tag">🏆 WEEKLY ARENA</div>
    <div class="tabs">
      <button class="tab on" data-k="score">Score</button>
      <button class="tab" data-k="streak">Streak</button>
      <button class="tab" data-k="wins">Wins</button>
    </div>
    <div class="lb" id="lbList"></div>
    <button class="btn ghost" id="back">← Back</button>
    <div class="note">Local leaderboard for now — server rankings plug in behind save.js.</div>`;

  const draw = (key) => {
    const list = app.querySelector('#lbList');
    list.innerHTML = ranked(board, key).map((e, i) => {
      const mine = me && e.name === me.name && e.score === me.score;
      const val = key === 'streak' ? `${e.streak} 🔥` : key === 'wins' ? `${e.wins || 0} ★` : e.score;
      return `<div class="lb-row${mine ? ' me' : ''}"><div class="lb-rank">${i + 1}</div><div class="lb-name">${escapeHTML(e.name)}</div><div class="lb-score">${val}</div></div>`;
    }).join('');
  };
  draw('score');
  app.querySelectorAll('.tab').forEach(t => t.addEventListener('click', () => {
    app.querySelectorAll('.tab').forEach(x => x.classList.remove('on'));
    t.classList.add('on');
    sfx.tap();
    draw(t.dataset.k);
  }));
  on(app, '#back', back);
}

function escapeHTML(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

/* =================================================================
   12 · WARDROBE (economy hooks) · STATS · SETTINGS
================================================================= */
function screenWardrobe() {
  const items = catalog();
  app.innerHTML = `
    ${brand}
    <div class="tag">👕 WARDROBE & PASSES</div>
    <div class="stage"><div class="avatar-wrap">${avatarSVG(S.avatar, S.stats.muscle, S.stats.lean, { width: 110, height: 150 })}</div></div>
    <div class="actions">
      ${items.map(i => `
        <button class="act${i.locked ? ' premium' : ''}" data-id="${i.id}">
          <div class="cost">${i.locked ? '🔒' : '✓'}</div>
          <div class="an">${i.type === 'cosmetic' ? '👕' : '🎟️'} ${i.lbl}</div>
          <div class="ad">${i.type === 'cosmetic' ? 'Cosmetic set.' : 'Premium pass.'}</div>
        </button>`).join('')}
    </div>
    <button class="btn ghost" id="back">← Back</button>`;
  app.querySelectorAll('.actions .act').forEach(b => b.addEventListener('click', () => {
    const item = items.find(i => i.id === b.dataset.id);
    toast(premiumTeaser(item));
  }));
  on(app, '#back', screenHub);
}

function screenStats() {
  const ps = physiqueScore(S.stats, S.weights);
  const start = S.avatar.startPhysique;
  app.innerHTML = `
    ${brand}
    <div class="tag">📊 YOUR JOURNEY</div>
    <div class="photo-compare">
      <div class="photo-cell"><div class="photo-lbl">DAY 1</div>${avatarSVG(S.avatar, byId(FRAMES, S.avatar.bodyFrame).muscle, byId(FRAMES, S.avatar.bodyFrame).lean, { width: 95, height: 128 })}</div>
      <div class="photo-arrow">→</div>
      <div class="photo-cell now"><div class="photo-lbl">DAY ${S.day}</div>${avatarSVG(S.avatar, S.stats.muscle, S.stats.lean, { width: 105, height: 140 })}</div>
    </div>
    <div class="stats stats-page">
      <div class="stat"><div class="v">${ps - start >= 0 ? '+' : ''}${ps - start}</div><div class="k">Physique gained</div></div>
      <div class="stat"><div class="v">${S.bestStreak}</div><div class="k">Best streak</div></div>
      <div class="stat"><div class="v">${S.wins}</div><div class="k">Career wins</div></div>
      <div class="stat s"><div class="v">${S.stats.strength}</div><div class="k">Strength</div></div>
      <div class="stat t"><div class="v">${S.stats.stamina}</div><div class="k">Stamina</div></div>
      <div class="stat m"><div class="v">${S.score}</div><div class="k">Points</div></div>
    </div>
    <button class="btn ghost" id="back">← Back</button>`;
  on(app, '#back', screenHub);
}

function screenSettings() {
  app.innerHTML = `
    ${brand}
    <div class="tag">⚙️ SETTINGS</div>
    <button class="btn ghost" id="mute">${settings.muted ? '🔇 Sound: OFF' : '🔊 Sound: ON'}</button>
    <button class="btn ghost" id="how">📖 How to play</button>
    <button class="btn ghost danger" id="reset">🗑️ Delete run & start over</button>
    <button class="btn burn" id="back">← Back to the grind</button>
    <div class="note">DreamBodX Fitness · progress saves on this device</div>`;
  on(app, '#mute', async (e) => {
    settings.muted = !settings.muted;
    await saveSettings(settings);
    e.currentTarget.textContent = settings.muted ? '🔇 Sound: OFF' : '🔊 Sound: ON';
  });
  on(app, '#how', () => screenIntro(() => screenSettings(), 'Back'));
  on(app, '#reset', async () => {
    if (!confirm('Delete this run? Your leaderboard scores stay.')) return;
    await clearGame();
    S = null;
    screenSplash();
  });
  on(app, '#back', screenHub);
}

boot();
