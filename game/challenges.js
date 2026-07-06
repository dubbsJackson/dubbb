/* challenges.js — per-machine mini-games. Each returns a Promise<quality 0..1>.
   Every game reads its difficulty from a tier object ({window, speed, floor})
   so Easy/Medium/Hard gyms are the SAME code with tighter numbers (rule 5).
   All games: touch-first (pointerdown), but Space/Enter works too. */

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Shared shell: dark overlay inside the stage with title/instructions/body/actions. */
function shell(container, { title, hint }) {
  const el = document.createElement('div');
  el.className = 'mini';
  el.innerHTML = `
    <h3 class="mini-title">${title}</h3>
    <p class="mini-hint">${hint}</p>
    <div class="mini-body"></div>
    <div class="mini-actions"></div>`;
  container.appendChild(el);
  return { el, body: el.querySelector('.mini-body'), actions: el.querySelector('.mini-actions') };
}

function bigButton(label) {
  const b = document.createElement('button');
  b.className = 'btn burn mini-btn';
  b.textContent = label;
  return b;
}

/* floor() guarantees the un-loseable easy tier (rule 3) */
const floored = (q, tier) => Math.max(tier.floor, Math.min(1, q));

/* ---------------- WEIGHTS — tap-to-lift power meter ----------------
   Feel: HEAVY. Every tap hoists the bar a notch; gravity drags it back.
   Get the bar to the top before the clock dies. Quality = height + time left. */
export function weightsGame(container, tier) {
  return new Promise(resolve => {
    const { el, body, actions } = shell(container, {
      title: '💪 Weights',
      hint: 'TAP fast to lift. The bar slips — beat gravity to the top!',
    });
    body.innerHTML = `
      <div class="lift-meter"><div class="lift-fill"></div><div class="lift-target"></div></div>
      <div class="mini-timer"><div class="mini-timer-fill"></div></div>`;
    const fill = body.querySelector('.lift-fill');
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

    tap.addEventListener('pointerdown', e => { e.preventDefault(); power = Math.min(100, power + perTap); pulse(tap); });
    tap.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') { power = Math.min(100, power + perTap); } });

    function frame(now) {
      if (done) return;
      // clamp dt: a backgrounded tab (portal iframe) pauses rAF — don't dump the gap on the player
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      power = Math.max(0, power - drainPerSec * dt);
      if (power >= 99 && topAt == null) topAt = now;
      fill.style.height = power + '%';
      const elapsed = now - start;
      timerFill.style.width = Math.max(0, 100 - (elapsed / duration) * 100) + '%';
      if (topAt != null || elapsed >= duration) return finish(now);
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);

    function finish(now) {
      done = true;
      let q;
      if (topAt != null) {
        // reached the top: 0.75 base + up to 0.25 for speed
        q = 0.75 + 0.25 * Math.max(0, 1 - (topAt - start) / duration);
      } else {
        q = (power / 100) * 0.7; // partial lift still pays something
      }
      endFlash(el, q, () => { el.remove(); resolve(floored(q, tier)); });
    }
  });
}

/* ---------------- TREADMILL — timing bar ----------------
   Feel: PRECISION. A marker sweeps; tap inside the green zone. 3 strides. */
export function treadmillGame(container, tier) {
  return new Promise(resolve => {
    const { el, body, actions } = shell(container, {
      title: '🏃 Treadmill',
      hint: 'Tap STRIDE when the marker is in the green zone. 3 strides.',
    });
    const zoneW = 24 * tier.window; // green zone width in %
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
    const qualities = [];
    const stepPerFrame = (reduced() ? 1.1 : 1.7) * tier.speed;

    function frame() {
      if (done) return;
      pos += dir * stepPerFrame;
      if (pos >= 100) { pos = 100; dir = -1; }
      if (pos <= 0) { pos = 0; dir = 1; }
      marker.style.left = pos + '%';
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
   Feel: FLOW. Tap a steady beat to hold cadence inside the power band for 6s.
   Taps push cadence up, it decays down; quality = time in band. */
export function bikeGame(container, tier) {
  return new Promise(resolve => {
    const { el, body, actions } = shell(container, {
      title: '🚴 Bike',
      hint: 'Tap a steady rhythm. Keep the needle in the power band!',
    });
    const bandH = 30 * tier.window;      // band height in %
    const bandBottom = 40;               // band sits mid-high — you have to work for it
    body.innerHTML = `
      <div class="cadence"><div class="band"></div><div class="needle"></div></div>
      <div class="mini-timer"><div class="mini-timer-fill"></div></div>`;
    const band = body.querySelector('.band');
    band.style.bottom = bandBottom + '%';
    band.style.height = bandH + '%';
    const needle = body.querySelector('.needle');
    const timerFill = body.querySelector('.mini-timer-fill');
    const tap = bigButton('PEDAL');
    actions.appendChild(tap);
    tap.focus();

    const duration = 6000;
    const decayPerSec = 30 * tier.speed;
    const perTap = 11;
    let cadence = 0, inBand = 0, total = 0, done = false;
    const start = performance.now();
    let last = start;

    const pedal = () => { cadence = Math.min(100, cadence + perTap); pulse(tap); };
    tap.addEventListener('pointerdown', e => { e.preventDefault(); pedal(); });
    tap.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter') pedal(); });

    function frame(now) {
      if (done) return;
      // clamp dt: a backgrounded tab (portal iframe) pauses rAF — don't dump the gap on the player
      const dt = Math.min(0.1, (now - last) / 1000); last = now;
      cadence = Math.max(0, cadence - decayPerSec * dt);
      needle.style.bottom = cadence + '%';
      const inside = cadence >= bandBottom && cadence <= bandBottom + bandH;
      band.classList.toggle('lit', inside);
      total += dt;
      if (inside) inBand += dt;
      const elapsed = now - start;
      timerFill.style.width = Math.max(0, 100 - (elapsed / duration) * 100) + '%';
      if (elapsed >= duration) {
        done = true;
        const q = Math.min(1, (inBand / total) * 1.25); // 80% in-band = perfect — full 100% is inhuman
        endFlash(el, q, () => { el.remove(); resolve(floored(q, tier)); });
        return;
      }
      requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

/* ---------------- PULL-UPS — up/down rhythm ----------------
   Feel: EASY & satisfying. Two targets, UP and DOWN. Tap the glowing one to haul
   the climber up, then down — each full up-down is one rep. No timing windows to
   miss; more reps in the window = better. The un-loseable strength builder. */
export function pullupGame(container, tier) {
  return new Promise(resolve => {
    const { el, body, actions } = shell(container, {
      title: '🧗 Pull-ups',
      hint: 'Tap the glowing target — UP, then DOWN. Rack up reps!',
    });
    body.innerHTML = `
      <div class="pullbar">
        <div class="pullbar-rail"></div>
        <div class="climber down" id="climber">🧗</div>
      </div>
      <div class="mini-timer"><div class="mini-timer-fill"></div></div>
      <div class="prep">REPS <b id="prepn">0</b></div>`;
    const upBtn = bigButton('▲ UP');
    const downBtn = bigButton('▼ DOWN');
    upBtn.classList.add('ptar');
    downBtn.classList.add('ptar');
    actions.appendChild(upBtn);
    actions.appendChild(downBtn);

    const climber = body.querySelector('#climber');
    const repn = body.querySelector('#prepn');
    const timerFill = body.querySelector('.mini-timer-fill');

    const duration = 7000;                                   // a relaxed 7s set
    const targetReps = Math.max(4, Math.round(5 * tier.speed)); // easy 5, med ~7, hard ~8 (rule 5 scaling)
    let reps = 0, expected = 'up', done = false;
    const start = performance.now();

    function setActive() {
      upBtn.classList.toggle('active', expected === 'up');
      downBtn.classList.toggle('active', expected === 'down');
    }
    setActive();
    upBtn.focus();

    function hit(pos) {
      if (done) return;
      if (pos !== expected) { pulse(pos === 'up' ? upBtn : downBtn); return; } // wrong target: no penalty, just no rep
      if (pos === 'up') {
        climber.classList.remove('down'); climber.classList.add('up');
        expected = 'down';
      } else {
        climber.classList.remove('up'); climber.classList.add('down');
        expected = 'up';
        reps += 1; repn.textContent = reps;
      }
      pulse(pos === 'up' ? upBtn : downBtn);
      setActive();
    }
    upBtn.addEventListener('pointerdown', e => { e.preventDefault(); hit('up'); });
    downBtn.addEventListener('pointerdown', e => { e.preventDefault(); hit('down'); });
    upBtn.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowUp') { e.preventDefault(); hit('up'); } });
    downBtn.addEventListener('keydown', e => { if (e.key === ' ' || e.key === 'Enter' || e.key === 'ArrowDown') { e.preventDefault(); hit('down'); } });

    function frame(now) {
      if (done) return;
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
