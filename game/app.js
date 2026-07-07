/* app.js — game loop, screen router, state orchestration.
   Screens are plain functions that render into #app; state mutations go
   through progress.js pure functions and autosave via save.js. */

import { CONFIG, PLACES, MACHINES, FOODS, FRAMES, GENDERS } from './data.js';
import { defaultAvatar, avatarSVG, SKIN_TONES, HAIRS, OUTFITS, byId } from './avatar.js';
import { goalWeights, physiqueScore, currentWeight, workoutGains, applyWorkout, applyFood, advanceDay, finalScore, momentumMult } from './progress.js';
import { GAMES } from './challenges.js';
import { loadBoard, submitScore, ranked } from './leaderboard.js';
import { catalog, premiumTeaser, crossSellUrl } from './economy.js';
import { saveGame, loadGame, clearGame, loadSettings, saveSettings, store } from './save.js';
import { platform } from './platform.js';

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
  await platform.init();
  settings = await loadSettings();
  await screenSplash();
  platform.loadingFinished();
}

/* =================================================================
   1 · SPLASH / TITLE
================================================================= */
async function screenSplash() {
  const saved = await loadGame();
  app.innerHTML = `
    <div class="splash-logo" role="img" aria-label="DreamBodX"></div>
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

  if (saved) on(app, '#continue', () => { S = saved; sfx.good(); platform.gameplayStart(); screenHub(); });
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
    <div class="challenge-card">
      <div class="cc-days">${CONFIG.targetDays}</div>
      <div class="cc-txt"><b>Day Transformation</b><span>Build your dream body before the month is out.</span></div>
    </div>
    <label class="check-row"><input type="checkbox" id="age"/> I'm 13 or older</label>
    <label class="check-row dim"><input type="checkbox" id="notif"/> Remind me to keep my streak (coming soon)</label>
    <button class="btn mint" id="go">Create My Athlete →</button>
    <button class="btn ghost small" id="back">Back</button>`;

  on(app, '#go', () => {
    if (!app.querySelector('#age').checked) return toast('Please confirm you are 13 or older.');
    const name = (app.querySelector('#pname').value || 'You').trim().slice(0, 14) || 'You';
    sfx.good();
    screenAvatarCreator({ name, targetDays: CONFIG.targetDays });
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
    <div class="gender-row" id="genders"></div>
    <div class="stage creator-stage"><div class="avatar-wrap" id="preview"></div></div>
    <div class="creator-rows">
      <div class="c-row"><div class="c-lbl">Skin</div><div class="swatches" id="skins"></div></div>
      <div class="c-row"><div class="c-lbl">Hair</div><div class="chip-row" id="hairs"></div></div>
      <div class="c-row"><div class="c-lbl">Outfit</div><div class="swatches" id="outfits"></div></div>
    </div>
    <label class="field-lbl">Starting size</label>
    <div class="grid2" id="frames"></div>
    <p class="note" id="goalNote"></p>
    <button class="btn mint" id="go">Lock It In →</button>
    <button class="btn ghost small" id="back">Back</button>`;

  const preview = app.querySelector('#preview');
  const draw = () => {
    const f = frame();
    const st = startingStats(av, f);
    preview.innerHTML = avatarSVG(av, st.muscle, st.lean, { width: 140, height: 185 });
    app.querySelector('#goalNote').textContent =
      `Start ${av.startWeight} lb → goal ${av.goalWeight} lb · ${av.gender === 'woman' ? 'round now, slender & athletic by day 30.' : 'sculpt it ripped by day 30.'}`;
  };

  const genders = app.querySelector('#genders');
  GENDERS.forEach(g => {
    const b = el(`<button class="gsel${g.id === av.gender ? ' sel' : ''}" type="button">${g.id === 'woman' ? '♀' : '♂'} ${g.lbl}</button>`);
    b.addEventListener('click', () => { av.gender = g.id; sel(genders, b); sfx.tap(); draw(); });
    genders.appendChild(b);
  });
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
    b.addEventListener('click', () => {
      av.bodyFrame = f.id;
      av.startWeight = f.startWeight;
      av.goalWeight = f.goalWeight;
      sel(frames, b); sfx.tap(); draw();
    });
    frames.appendChild(b);
  });
  // make sure weights match the (possibly default) selected frame on first paint
  const f0 = frame(); av.startWeight = f0.startWeight; av.goalWeight = f0.goalWeight;
  function sel(wrap, b) { [...wrap.children].forEach(c => c.classList.remove('sel')); b.classList.add('sel'); }

  draw();
  on(app, '#go', () => { sfx.good(); startRun(profile, av, prestige); });
  on(app, '#back', () => prestige ? screenSplash() : screenSetup());
}

/* =================================================================
   START A RUN
================================================================= */
// A woman starts a little rounder (lower leanness) so she visibly slims down
// into a slender, athletic build across the run. Men start per the frame.
function startingStats(avatar, f) {
  let muscle = f.muscle, lean = f.lean;
  // Woman starts rounder (lower leanness) but with a touch more starting tone, so her
  // physique score starts level with the man's — same 30-day pace — while she visibly
  // slims from round to slender/athletic as leanness climbs.
  if (avatar.gender === 'woman') { muscle = Math.min(1, muscle + 0.05); lean = Math.max(0.05, lean - 0.05); }
  return { muscle, lean };
}

async function startRun(profile, avatar, prestige = false) {
  const f = byId(FRAMES, avatar.bodyFrame);
  const st = startingStats(avatar, f);
  const weights = goalWeights(avatar);
  const c = await career();
  avatar.startPhysique = physiqueScore(st, weights);
  S = {
    profile,
    avatar,
    weights,
    targetDays: profile.targetDays || CONFIG.targetDays,
    day: 1,
    energy: CONFIG.energyPerDay,
    stats: { muscle: st.muscle, lean: st.lean, strength: Math.round(st.muscle * 30), stamina: Math.round(st.lean * 30) },
    momentum: CONFIG.momentum.start,
    score: 0,
    streak: 0,
    bestStreak: 0,
    wins: c.wins,
    trainedToday: false,
    restedToday: false,
    comebackPending: false,
    dayGain: 0,
    prestige,
    lastMilestone: null,
  };
  S.lastMilestone = snapshot();
  autosave();
  screenIntro(() => { platform.gameplayStart(); screenHub(); }, `Begin Day 1 →`);
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
      <button class="act" id="map"><div class="an">🗺️ The Strip</div><div class="ad">Walk to gyms, food, rest & arena.</div></button>
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
   6 · THE STRIP — walkable neighborhood
   Your avatar strolls a neon plaza: tap the ground to walk anywhere,
   tap a building to walk over and head inside. Buildings are real
   buttons so keyboard users can enter them directly.
================================================================= */
// building centers as % of the world box; door is a little below the facade
const WORLD_POS = {
  'gym-easy':   { x: 19, y: 22 },
  'gym-medium': { x: 50, y: 16 },
  'gym-hard':   { x: 81, y: 22 },
  'food':       { x: 17, y: 52 },
  'arena':      { x: 83, y: 52 },
  'rest':       { x: 50, y: 68 },
};

function enterPlace(id) {
  const p = PLACES.find(x => x.id === id);
  if (!p) return;
  if (p.type === 'gym') screenGym(p.tier);
  else if (p.type === 'food') screenFood();
  else if (p.type === 'rest') doRest();
  else if (p.type === 'arena') screenLeaderboard(screenMap);
}

function screenMap() {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  app.innerHTML = `
    ${brand}
    <div class="tag">🚶 THE STRIP · WALK AROUND</div>
    <div class="world" id="world">
      ${PLACES.map(p => {
        const pos = WORLD_POS[p.id];
        const kind = p.type === 'gym' ? 'b-' + p.tier : 'b-' + p.type;
        return `<button class="bldg ${kind}" data-id="${p.id}" style="left:${pos.x}%;top:${pos.y}%" aria-label="${p.lbl} — ${p.desc}">
          <span class="b-face"><span class="b-emoji">${p.icon}</span></span>
          <span class="b-tag">${p.lbl}</span>
        </button>`;
      }).join('')}
      <div class="walker" id="walker" style="left:50%;top:90%">
        <div class="walker-shadow"></div>
        ${avatarSVG(S.avatar, S.stats.muscle, S.stats.lean, { width: 52, height: 70 })}
      </div>
      <div class="tap-hint" id="tapHint">tap to walk · tap a building to enter</div>
    </div>
    <button class="btn ghost" id="back">← Home</button>
    <div class="note">Stroll the strip — tap the ground to walk, tap a building to go in.</div>`;

  const world = app.querySelector('#world');
  const walker = app.querySelector('#walker');
  const hint = app.querySelector('#tapHint');
  let busy = false;

  function moveTo(x, y, thenId) {
    const curX = parseFloat(walker.style.left);
    const curY = parseFloat(walker.style.top);
    walker.classList.toggle('flip', x < curX - 0.5);
    const dist = Math.hypot(x - curX, y - curY);
    const dur = reduce ? 0 : Math.min(1500, 200 + dist * 22);
    walker.style.transition = dur ? `left ${dur}ms linear, top ${dur}ms linear` : 'none';
    walker.classList.add('walking');
    busy = true;
    walker.style.left = x + '%';
    walker.style.top = y + '%';
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      walker.classList.remove('walking');
      busy = false;
      walker.removeEventListener('transitionend', done);
      if (thenId) enterPlace(thenId);
    };
    walker.addEventListener('transitionend', done);
    setTimeout(done, dur + 80); // fallback (reduced motion / zero-distance taps)
  }

  world.addEventListener('pointerdown', e => {
    if (e.target.closest('.bldg') || busy) return; // buildings handle their own taps
    const r = world.getBoundingClientRect();
    const x = Math.max(6, Math.min(94, ((e.clientX - r.left) / r.width) * 100));
    const y = Math.max(42, Math.min(93, ((e.clientY - r.top) / r.height) * 100)); // stay on the floor band
    if (hint) hint.classList.add('gone');
    moveTo(x, y);
  });

  app.querySelectorAll('.bldg').forEach(b => b.addEventListener('click', () => {
    if (busy) return;
    const pos = WORLD_POS[b.dataset.id];
    if (hint) hint.classList.add('gone');
    sfx.tap();
    moveTo(pos.x, Math.min(93, pos.y + 17), b.dataset.id); // walk to the doorway, then enter
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
   7 · GYM — a walkable room: walk your avatar UP TO a machine to use it
================================================================= */
const STATION_POS = {
  weights:   { x: 22, y: 30 },
  treadmill: { x: 78, y: 30 },
  pullups:   { x: 22, y: 62 },
  bike:      { x: 78, y: 62 },
};

function screenGym(tierId, walkerPos = { x: 50, y: 88 }) {
  const tier = CONFIG.tiers[tierId];
  const place = PLACES.find(p => p.type === 'gym' && p.tier === tierId);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  app.innerHTML = `
    <div class="tag tier-tag tier-${tierId}" style="margin-top:2px">${place.icon} ${place.lbl.toUpperCase()} · ${tierId.toUpperCase()} TIER</div>
    <div class="energy-row">
      <div class="e-lbl">ENERGY</div>
      <div class="energy">${Array.from({ length: CONFIG.energyPerDay }, (_, i) => `<div class="pip${i < S.energy ? ' on' : ''}"></div>`).join('')}</div>
    </div>
    <div class="world gymroom bg-${tierId}" id="gymroom">
      ${MACHINES.map(m => {
        const pos = STATION_POS[m.id];
        return `<button class="bldg station${S.energy < 1 ? ' drained' : ''}" data-id="${m.id}" style="left:${pos.x}%;top:${pos.y}%" aria-label="${m.lbl} — ${m.desc}">
          <span class="b-face station-face"><span class="m-ico ico-${m.id}" aria-hidden="true"></span></span>
          <span class="b-tag">${m.lbl} <em class="b-cost">⚡1</em></span>
        </button>`;
      }).join('')}
      <div class="walker" id="walker" style="left:${walkerPos.x}%;top:${walkerPos.y}%">
        <div class="walker-shadow"></div>
        ${avatarSVG(S.avatar, S.stats.muscle, S.stats.lean, { width: 52, height: 70 })}
      </div>
      <div class="tap-hint" id="tapHint">walk up to a machine to train</div>
    </div>
    <div class="foot">
      <button class="btn ghost" id="back">← Leave Gym</button>
    </div>`;

  const world = app.querySelector('#gymroom');
  const walker = app.querySelector('#walker');
  const hint = app.querySelector('#tapHint');
  let busy = false;

  function moveTo(x, y, then) {
    const curX = parseFloat(walker.style.left);
    const curY = parseFloat(walker.style.top);
    walker.classList.toggle('flip', x < curX - 0.5);
    const dist = Math.hypot(x - curX, y - curY);
    const dur = reduce ? 0 : Math.min(1400, 180 + dist * 20);
    walker.style.transition = dur ? `left ${dur}ms linear, top ${dur}ms linear` : 'none';
    walker.classList.add('walking');
    busy = true;
    walker.style.left = x + '%';
    walker.style.top = y + '%';
    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      walker.classList.remove('walking');
      busy = false;
      walker.removeEventListener('transitionend', done);
      if (then) then();
    };
    walker.addEventListener('transitionend', done);
    setTimeout(done, dur + 80);
  }

  world.addEventListener('pointerdown', e => {
    if (e.target.closest('.bldg') || busy) return;
    const r = world.getBoundingClientRect();
    const x = Math.max(8, Math.min(92, ((e.clientX - r.left) / r.width) * 100));
    const y = Math.max(24, Math.min(90, ((e.clientY - r.top) / r.height) * 100));
    if (hint) hint.classList.add('gone');
    moveTo(x, y);
  });

  app.querySelectorAll('.station').forEach(b => b.addEventListener('click', () => {
    if (busy) return;
    if (S.energy < 1) { sfx.bad(); return toast('⚡ Out of energy — end the day to recharge.'); }
    const machine = MACHINES.find(m => m.id === b.dataset.id);
    const pos = STATION_POS[machine.id];
    if (hint) hint.classList.add('gone');
    sfx.tap();
    // walk to the machine, then the action cam takes over
    moveTo(pos.x, Math.min(90, pos.y + 16), async () => {
      S.energy -= 1;
      const quality = await GAMES[machine.game](app, tier, S.avatar, S.stats);
      const gains = workoutGains(S, machine, quality, tier);
      applyWorkout(S, gains);
      autosave();
      if (gains.comeback) { sfx.win(); toast(`💫 COMEBACK ×${CONFIG.comeback.gainMult}! +${gains.strength} STR · +${gains.stamina} STA · +${gains.score} pts`); }
      else if (quality >= 0.85) { sfx.good(); toast(`⭐ PERFECT! +${gains.strength} STR · +${gains.stamina} STA · +${gains.score} pts`); }
      else { sfx.good(); toast(`+${gains.strength} STR · +${gains.stamina} STA · +${gains.score} pts`); }
      screenGym(tierId, { x: pos.x, y: Math.min(90, pos.y + 16) }); // stay at the machine, stats/pips refresh
    });
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
  await platform.commercialBreak(); // natural pause point; no-op without a platform SDK
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
  platform.gameplayStop();
  if (won) platform.happytime();
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
