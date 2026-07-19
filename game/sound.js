/* sound.js — all game audio, synthesized in the browser (WebAudio) so there are
   zero audio files to ship. Shared by app.js (UI) and challenges.js (workouts):
   the weights clank, treadmill footsteps, pull-up whooshes and bike ticks all
   come from here. Honors a mute flag and fails silently where audio is blocked. */

let ctx = null;
let muted = false;
let noiseBuf = null;

export function setMuted(v) { muted = !!v; }

function ac() {
  if (!ctx) {
    try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch { return null; }
  }
  if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
  return ctx;
}

/* white-noise buffer, built once, reused for percussive hits */
function noise(c) {
  if (!noiseBuf) {
    noiseBuf = c.createBuffer(1, c.sampleRate * 0.4, c.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  }
  return noiseBuf;
}

/* a single tone with an envelope */
function tone(freq, dur, { type = 'triangle', vol = 0.12, glideTo = null, delay = 0 } = {}) {
  const c = ac(); if (!c || muted) return;
  const t = c.currentTime + delay;
  const o = c.createOscillator(), g = c.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t);
  if (glideTo) o.frequency.exponentialRampToValueAtTime(glideTo, t + dur);
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
  o.connect(g); g.connect(c.destination);
  o.start(t); o.stop(t + dur + 0.02);
}

/* a filtered burst of noise — the body of clanks, thuds and footsteps */
function burst(dur, { freq = 1200, q = 1, filter = 'bandpass', vol = 0.2, delay = 0 } = {}) {
  const c = ac(); if (!c || muted) return;
  const t = c.currentTime + delay;
  const src = c.createBufferSource(); src.buffer = noise(c);
  const f = c.createBiquadFilter(); f.type = filter; f.frequency.value = freq; f.Q.value = q;
  const g = c.createGain();
  g.gain.setValueAtTime(vol, t);
  g.gain.exponentialRampToValueAtTime(0.0008, t + dur);
  src.connect(f); f.connect(g); g.connect(c.destination);
  src.start(t); src.stop(t + dur + 0.02);
}

export const sound = {
  /* ---- UI ---- */
  tap: () => tone(520, 0.05, { vol: 0.09 }),
  good: () => { tone(660, 0.08, { vol: 0.1 }); tone(880, 0.1, { vol: 0.1, delay: 0.09 }); },
  bad: () => tone(180, 0.16, { type: 'sawtooth', vol: 0.08 }),
  win: () => [523, 659, 784, 1047].forEach((f, i) => tone(f, 0.16, { vol: 0.11, delay: i * 0.12 })),

  /* ---- workouts ---- */
  // metal barbell clank: bright noise tick + a short metallic ring
  clank() {
    burst(0.05, { freq: 2600, q: 0.7, vol: 0.16 });
    tone(320, 0.08, { type: 'square', vol: 0.05 });
    tone(197, 0.09, { type: 'square', vol: 0.04, delay: 0.005 });
  },
  // heavy lockout / rack: deeper thud + clank
  thud() {
    burst(0.12, { freq: 260, q: 0.6, filter: 'lowpass', vol: 0.28 });
    tone(90, 0.16, { type: 'sine', vol: 0.22, glideTo: 55 });
    burst(0.06, { freq: 2200, q: 0.8, vol: 0.12, delay: 0.01 });
  },
  // footstep on the treadmill
  step() {
    burst(0.07, { freq: 420, q: 0.5, filter: 'lowpass', vol: 0.16 });
    tone(120, 0.07, { type: 'sine', vol: 0.12, glideTo: 80 });
  },
  // pull-up effort: a rising whoosh + soft grunt
  whoosh() {
    burst(0.16, { freq: 700, q: 0.4, filter: 'bandpass', vol: 0.12 });
    tone(150, 0.14, { type: 'sawtooth', vol: 0.05, glideTo: 260 });
  },
  // bike pedal ratchet tick
  tick: () => tone(1500, 0.03, { type: 'square', vol: 0.05 }),
  // eating good food
  chomp() {
    burst(0.06, { freq: 500, q: 0.6, filter: 'lowpass', vol: 0.14 });
    tone(200, 0.07, { type: 'triangle', vol: 0.08, glideTo: 320 });
  },
};
