/* challenges.js — per-machine mini-games. Each returns a Promise<quality 0..1>.
   Every game reads its difficulty from a tier object ({window, speed, floor})
   so Easy/Medium/Hard gyms are the SAME code with tighter numbers (rule 5).

   The star of every game is the ACTION CAM (poses.js): the player's own avatar
   visibly does the exercise, driven directly by their input — the barbell IS
   the power meter, the body rises on each pull-up tap, legs pump with strides,
   pedals spin with cadence. Touch-first (pointerdown); Space/Enter works too. */

import { pressScene, pullupScene, runScene, bikeScene } from './poses.js';

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Shared shell: dark overlay with title/hint/scene/body/actions. */
function shell(container, { title, hint }) {
  const el = document.createElement('div');
  el.className = 'mini';
  el.innerHTML = `
    <h3 class="mini-title">${title}</h3>
    <p class="mini-hint">${hint}</p>
    <div class="mini-scene"></div>
    <div class="mini-body"></div>
    <div class="mini-actions"></div>`;
  container.appendChild(el);
  return { el, scene: el.querySelector('.mini-scene'), body: el.querySelector('.mini-body'), actions: el.querySelector('.mini-actions') };
}

function bigButton(label) {
  const b = document.createElement('button');
  b.className = 'btn burn mini-btn';
  b.textContent = label;
  return b;
}

/* floor() guarantees the un-loseable easy tier (rule 3) */
const floored = (q, tier) => Math.max(tier.floor, Math.min(1, q));

/* ---------------- WEIGHTS — overhead press ----------------
   Feel: HEAVY. Every tap hoists the barbell; gravity drags it back down.
   You WATCH your avatar press it — lock it out overhead before the clock dies. */
export function weightsGame(container, tier, avatar, stats) {
  return new Promise(resolve => {
    const { el, scene, body, actions } = shell(container, {
      title: '💪 Weights',
      hint: 'TAP fast to press the bar overhead. It slips — beat gravity!',
    });
    body.innerHTML = `<div class="mini-timer"><div class="mini-timer-fill"></div></div>`;
    const timerFill = body.querySelector('.mini-timer-fill');
    const tap = bigButton('LIFT!');
    actions.appendChild(tap);
    tap.focus();

    const duration = 6000;
    const drainPerSec = 22 * tier.speed;   // gravity: faster at harder tiers
    const perTap = 9 * tier.window + 4;    // tighter window = weaker taps
    let power = 0, done = false, topAt = null;
    const start = performance.now();
    let last = start;

    const lift = () => { power = Math.min(100, power + perTap); pulse(tap); };
    tap.addEventListener('pointerdown', e => { e.preventDefault(); lift(); });
    tap.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') lift(); });

    function frame(now) {
      if (done) return;
      const dt = Math.min(0.1, (now - last) / 1000); last = now; // clamp: background tab safe
      power = Math.max(0, power - drainPerSec * dt);
      if (power >= 99 && topAt == null) topAt = now;
      scene.innerHTML = pressScene(avatar, stats.muscle, power / 100);
      const elapsed = now - start;
      timerFill.style.width = Math.max(0, 100 - (elapsed / duration) * 100) + '%';
      if (topAt != null || elapsed >= duration) return finish(now);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    function finish(now) {
      done = true;
      let q;
      if (topAt != null) q = 0.75 + 0.25 * Math.max(0, 1 - (topAt - start) / duration); // locked out: base + speed bonus
      else q = (power / 100) * 0.7;                                                     // partial lift still pays
      endFlash(el, q, () => { el.remove(); resolve(floored(q, tier)); });
    }
  });
}

/* ---------------- PULL-UPS — up/down rhythm ----------------
   Feel: EASY & satisfying. Tap UP to haul your avatar chin-over-bar,
   DOWN to lower — each full rep counts. No timing windows to miss. */
export function pullupGame(container, tier, avatar, stats) {
  return new Promise(resolve => {
    const { el, scene, body, actions } = shell(container, {
      title: '🧗 Pull-ups',
      hint: 'Tap the glowing target — UP, then DOWN. Rack up reps!',
    });
    body.innerHTML = `
      <div class="mini-timer"><div class="mini-timer-fill"></div></div>
      <div class="prep">REPS <b id="prepn">0</b></div>`;
    const upBtn = bigButton('▲ UP');
    const downBtn = bigButton('▼ DOWN');
    upBtn.classList.add('ptar');
    downBtn.classList.add('ptar');
    actions.appendChild(upBtn);
    actions.appendChild(downBtn);

    const repn = body.querySelector('#prepn');
    const timerFill = body.querySelector('.mini-timer-fill');

    const duration = 7000;
    const targetReps = Math.max(4, Math.round(5 * tier.speed)); // easy 5, med ~7, hard ~8
    let reps = 0, expected = 'up', done = false;
    let t = 0, targetT = 0;                                     // body height, eased toward target
    const start = performance.now();

    function setActive() {
      upBtn.classList.toggle('active', expected === 'up');
      downBtn.classList.toggle('active', expected === 'down');
    }
    setActive();
    upBtn.focus();

    function hit(pos) {
      if (done) return;
      if (pos !== expected) { pulse(pos === 'up' ? upBtn : downBtn); return; } // wrong target: no penalty
      if (pos === 'up') { targetT = 1; expected = 'down'; }
      else { targetT = 0; expected = 'up'; reps += 1; repn.textContent = reps; }
      pulse(pos === 'up' ? upBtn : downBtn);
      setActive();
    }
    upBtn.addEventListener('pointerdown', e => { e.preventDefault(); hit('up'); });
    downBtn.addEventListener('pointerdown', e => { e.preventDefault(); hit('down'); });
    upBtn.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowUp') { e.preventDefault(); hit('up'); } });
    downBtn.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown') { e.preventDefault(); hit('down'); } });

    function frame(now) {
      if (done) return;
      t += (targetT - t) * (reduced() ? 1 : 0.22);              // smooth pull up / lower down
      scene.innerHTML = pullupScene(avatar, stats.muscle, t);
      const elapsed = now - start;
      timerFill.style.width = Math.max(0, 100 - (elapsed / duration) * 100) + '%';
      if (elapsed >= duration) {
        done = true;
        const q = Math.min(1, reps / targetReps);
        endFlash(el, q, () => { el.remove(); resolve(floored(q, tier)); });
        return;
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

/* ---------------- TREADMILL — timing bar ----------------
   Feel: PRECISION. Tap STRIDE in the green zone; every clean stride
   kicks your avatar's legs faster and scrolls the belt. 3 strides. */
export function treadmillGame(container, tier, avatar, stats) {
  return new Promise(resolve => {
    const { el, scene, body, actions } = shell(container, {
      title: '🏃 Treadmill',
      hint: 'Tap STRIDE when the marker is in the green zone. 3 strides.',
    });
    const zoneW = 24 * tier.window;
    body.innerHTML = `
      <div class="repbar"><div class="zone"></div><div class="marker"></div></div>
      <div class="stride-dots">${'<span class="sdot"></span>'.repeat(3)}</div>`;
    const zone = body.querySelector('.zone');
    const marker = body.querySelector('.marker');
    const dots = [...body.querySelectorAll('.sdot')];
    const tap = bigButton('STRIDE');
    actions.appendChild(tap);
    tap.focus();

    let zoneL = 38;
    const placeZone = () => { zoneL = 15 + Math.random() * (70 - zoneW); zone.style.left = zoneL + '%'; zone.style.width = zoneW + '%'; };
    placeZone();

    let pos = 0, dir = 1, rep = 0, done = false;
    let phase = 0, belt = 0, boost = 0;                 // run animation state
    const qualities = [];
    const stepPerFrame = (reduced() ? 1.1 : 1.7) * tier.speed;
    let last = performance.now();

    function frame(now) {
      if (done) return;
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      pos += dir * stepPerFrame;
      if (pos >= 100) { pos = 100; dir = -1; }
      if (pos <= 0) { pos = 0; dir = 1; }
      marker.style.left = pos + '%';
      const speed = 1.4 + boost * 2.2;                  // clean strides = faster legs
      phase = (phase + speed * dt) % 1;
      belt += speed * 90 * dt;
      boost = Math.max(0, boost - dt * 0.8);
      scene.innerHTML = runScene(avatar, stats.muscle, phase, belt, boost);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    function stride() {
      if (done) return;
      const center = zoneL + zoneW / 2;
      const dist = Math.abs(pos - center);
      let q;
      if (pos >= zoneL && pos <= zoneL + zoneW) q = 1 - (dist / (zoneW / 2)) * 0.4; // in-zone: 0.6..1
      else q = Math.max(0.1, 0.4 - dist / 130);                                     // miss: partial credit
      qualities.push(q);
      if (q > 0.6) boost = 1;                                                       // visible surge on a clean stride
      dots[rep].classList.add(q > 0.6 ? 'hit' : 'miss');
      rep += 1;
      pulse(tap);
      if (rep >= 3) {
        done = true;
        const avg = qualities.reduce((a, b) => a + b, 0) / qualities.length;
        endFlash(el, avg, () => { el.remove(); resolve(floored(avg, tier)); });
      } else placeZone();
    }
    tap.addEventListener('pointerdown', e => { e.preventDefault(); stride(); });
    tap.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') stride(); });
  });
}

/* ---------------- BIKE — sustained rhythm ----------------
   Feel: FLOW. Tap a steady beat; your avatar's legs and the wheels spin
   exactly as fast as your cadence. Hold the power band for 6s. */
export function bikeGame(container, tier, avatar, stats) {
  return new Promise(resolve => {
    const { el, scene, body, actions } = shell(container, {
      title: '🚴 Bike',
      hint: 'Tap a steady rhythm. Keep the cadence needle in the power band!',
    });
    const bandH = 30 * tier.window;
    const bandBottom = 40;
    body.innerHTML = `
      <div class="cadence-strip"><div class="c-band"></div><div class="c-needle"></div></div>
      <div class="mini-timer"><div class="mini-timer-fill"></div></div>`;
    const band = body.querySelector('.c-band');
    band.style.left = bandBottom + '%';
    band.style.width = bandH + '%';
    const needle = body.querySelector('.c-needle');
    const timerFill = body.querySelector('.mini-timer-fill');
    const tap = bigButton('PEDAL');
    actions.appendChild(tap);
    tap.focus();

    const duration = 6000;
    const decayPerSec = 30 * tier.speed;
    const perTap = 11;
    let cadence = 0, inBand = 0, total = 0, done = false;
    let crank = 0, wheel = 0;
    const start = performance.now();
    let last = start;

    const pedal = () => { cadence = Math.min(100, cadence + perTap); pulse(tap); };
    tap.addEventListener('pointerdown', e => { e.preventDefault(); pedal(); });
    tap.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') pedal(); });

    function frame(now) {
      if (done) return;
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      cadence = Math.max(0, cadence - decayPerSec * dt);
      const inside = cadence >= bandBottom && cadence <= bandBottom + bandH;
      needle.style.left = cadence + '%';
      band.classList.toggle('lit', inside);
      crank += (0.5 + cadence * 0.09) * dt * Math.PI * 2;   // pedals spin with YOUR cadence
      wheel += (0.5 + cadence * 0.16) * dt * Math.PI * 2;
      scene.innerHTML = bikeScene(avatar, stats.muscle, crank, wheel, inside);
      total += dt;
      if (inside) inBand += dt;
      const elapsed = now - start;
      timerFill.style.width = Math.max(0, 100 - (elapsed / duration) * 100) + '%';
      if (elapsed >= duration) {
        done = true;
        const q = Math.min(1, (inBand / total) * 1.25);     // 80% in-band = perfect
        endFlash(el, q, () => { el.remove(); resolve(floored(q, tier)); });
        return;
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

export const GAMES = {
  weights: weightsGame,
  treadmill: treadmillGame,
  bike: bikeGame,
  pullups: pullupGame,
};

/* ---------- shared juice ---------- */
function pulse(btn) {
  btn.classList.remove('pulse');
  void btn.offsetWidth; // restart animation
  btn.classList.add('pulse');
}

function endFlash(el, q, cb) {
  const grade = q >= 0.85 ? 'PERFECT!' : q >= 0.6 ? 'STRONG!' : q >= 0.35 ? 'DECENT' : 'ROUGH…';
  const flash = document.createElement('div');
  flash.className = 'mini-grade ' + (q >= 0.6 ? 'good' : 'meh');
  flash.textContent = grade;
  el.appendChild(flash);
  setTimeout(cb, reduced() ? 350 : 800);
}
