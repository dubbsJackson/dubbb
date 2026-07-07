/* poses.js — the "action cam": animated SVG scenes of YOUR avatar doing each
   exercise. Every scene mirrors the main avatar — skin, outfit, hair, face and
   man/woman body shape — and is parametric on a pose value driven directly by
   the mini-game input, so the player literally watches their character lift /
   pull / run / pedal. Pure string renderers; challenges.js calls them per frame. */

import { SKIN_TONES, OUTFITS, HAIRS, byId } from './avatar.js';

const DARK = '#0c0a1f';
const LINE = '#2c2760';
const IRON = '#3a3560';

function look(avatar) {
  const tone = byId(SKIN_TONES, avatar.skinTone);
  const outfit = byId(OUTFITS, avatar.outfit);
  return {
    skin: tone.c, skinShade: tone.shade, top: outfit.top, short: outfit.short,
    hair: byId(HAIRS, avatar.hair), fem: avatar.gender === 'woman',
  };
}

/* limb as a fat round-capped line */
const limb = (x1, y1, x2, y2, w, color, op = 1) =>
  `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="${color}" stroke-width="${w}" stroke-linecap="round" opacity="${op}"/>`;

/* two-bone IK: elbow/knee position between a fixed root and a target */
function joint(rx, ry, tx, ty, l1, l2, dir = 1) {
  let dx = tx - rx, dy = ty - ry;
  let d = Math.hypot(dx, dy);
  const max = l1 + l2 - 0.5;
  if (d > max) { dx *= max / d; dy *= max / d; d = max; tx = rx + dx; ty = ry + dy; }
  const a = (l1 * l1 - l2 * l2 + d * d) / (2 * d);
  const h = Math.sqrt(Math.max(0, l1 * l1 - a * a));
  const mx = rx + (dx * a) / d, my = ry + (dy * a) / d;
  return { kx: mx - (dy * h * dir) / d, ky: my + (dx * h * dir) / d, tx, ty };
}

/* hair scaled to any head (cx,cy,r). `side` !==0 shifts long hair to the back. */
function hairAt(hair, cx, cy, r, side = 0) {
  if (!hair || !hair.c) return '';
  const c = hair.c;
  const R = r * 0.98;
  switch (hair.id) {
    case 'buzz':
      return `<path d="M${cx - R},${cy - r * 0.05} a${R},${R} 0 0,1 ${2 * R},0 q-${R},-${r * 0.5} -${2 * R},0 Z" fill="${c}" opacity=".92"/>`;
    case 'spikes':
      return `<path d="M${cx - R},${cy - r * 0.1}
        l${r * 0.28},-${r * 0.62} ${r * 0.2},${r * 0.45} ${r * 0.26},-${r * 0.66} ${r * 0.2},${r * 0.5}
        ${r * 0.26},-${r * 0.56} ${r * 0.2},${r * 0.5} ${r * 0.28},-${r * 0.46} ${r * 0.16},${r * 0.62}
        q-${R},-${r * 0.42} -${2 * R},0 Z" fill="${c}"/>`;
    case 'curls':
      return `<g fill="${c}"><circle cx="${cx - r * 0.72}" cy="${cy - r * 0.45}" r="${r * 0.44}"/><circle cx="${cx}" cy="${cy - r * 0.78}" r="${r * 0.5}"/><circle cx="${cx + r * 0.72}" cy="${cy - r * 0.45}" r="${r * 0.44}"/><circle cx="${cx - r * 0.36}" cy="${cy - r * 0.66}" r="${r * 0.4}"/><circle cx="${cx + r * 0.36}" cy="${cy - r * 0.66}" r="${r * 0.4}"/></g>`;
    case 'long': {
      const bx = cx - side * r * 0.55;              // strands drift to the back on side views
      return `<path d="M${cx - R},${cy + r * 0.1} a${R},${R} 0 0,1 ${2 * R},0 Z" fill="${c}"/>
        <path d="M${bx - r * 0.9},${cy - r * 0.1} q-${r * 0.35},${r * 1.5} ${r * 0.2},${r * 1.95} l${r * 0.4},-${r * 0.25} q-${r * 0.4},-${r * 0.7} -${r * 0.15},-${r * 1.5} Z" fill="${c}"/>
        <path d="M${bx + r * 0.9},${cy - r * 0.1} q${r * 0.35},${r * 1.5} -${r * 0.2},${r * 1.95} l-${r * 0.4},-${r * 0.25} q${r * 0.4},-${r * 0.7} ${r * 0.15},-${r * 1.5} Z" fill="${c}"/>`;
    }
    default: return '';
  }
}

const faceFront = (cx, cy, r, smile) =>
  `<circle cx="${(cx - r * 0.34).toFixed(1)}" cy="${cy.toFixed(1)}" r="1.6" fill="${DARK}"/><circle cx="${(cx + r * 0.34).toFixed(1)}" cy="${cy.toFixed(1)}" r="1.6" fill="${DARK}"/><path d="M${(cx - r * 0.3).toFixed(1)},${(cy + r * 0.42).toFixed(1)} q${(r * 0.3).toFixed(1)},${(smile ? r * 0.26 : -r * 0.12).toFixed(1)} ${(r * 0.6).toFixed(1)},0" stroke="${DARK}" stroke-width="1.6" fill="none" stroke-linecap="round"/>`;

const faceSide = (cx, cy, r) =>
  `<circle cx="${(cx + r * 0.42).toFixed(1)}" cy="${cy.toFixed(1)}" r="1.7" fill="${DARK}"/><path d="M${(cx + r * 0.2).toFixed(1)},${(cy + r * 0.46).toFixed(1)} q${(r * 0.24).toFixed(1)},${(r * 0.16).toFixed(1)} ${(r * 0.44).toFixed(1)},0" stroke="${DARK}" stroke-width="1.4" fill="none" stroke-linecap="round"/>`;

const headFront = (cx, cy, r, L, smile) =>
  `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="${L.skin}"/>${hairAt(L.hair, cx, cy, r, 0)}${faceFront(cx, cy, r, smile)}`;
const headSide = (cx, cy, r, L, side) =>
  `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r}" fill="${L.skin}"/>${hairAt(L.hair, cx, cy, r, side)}${faceSide(cx, cy, r)}`;

const wrap = (inner, w = 240, h = 205) =>
  `<svg viewBox="0 0 ${w} ${h}" width="100%" height="100%" preserveAspectRatio="xMidYMid meet" aria-hidden="true">${inner}</svg>`;

const effort = (cx, cy) => `<g stroke="#ffc24b" stroke-width="2.5" stroke-linecap="round" opacity=".9">
  <line x1="${cx - 26}" y1="${cy}" x2="${cx - 34}" y2="${cy - 8}"/><line x1="${cx + 26}" y1="${cy}" x2="${cx + 34}" y2="${cy - 8}"/>
  <line x1="${cx - 20}" y1="${cy - 12}" x2="${cx - 26}" y2="${cy - 22}"/><line x1="${cx + 20}" y1="${cy - 12}" x2="${cx + 26}" y2="${cy - 22}"/></g>`;

/* woman gets a subtle bust curve on front-view torsos */
const bust = (cx, cy, sw, L) => L.fem
  ? `<path d="M${cx - sw * 0.62},${cy} q${sw * 0.32},${sw * 0.42} ${sw * 0.62},0" fill="none" stroke="${DARK}" stroke-width="1.5" opacity=".18"/>` : '';

/* ================= WEIGHTS — overhead press (front view) ================= */
export function pressScene(avatar, muscle, t) {
  const L = look(avatar);
  const cx = 120;
  const sw = (L.fem ? 13 : 17) + muscle * (L.fem ? 9 : 13);   // shoulders: broad man / narrow woman
  const hw = L.fem ? sw + 5 : sw - 1;                          // hips: wider on woman
  const limbW = (L.fem ? 6.5 : 8) + muscle * 6;
  const dip = (1 - t) * 5;
  const shY = 112 + dip;
  const barY = 104 + dip - t * 62;
  const handX = sw + 20;
  const el = { l: joint(cx - sw, shY, cx - handX, barY, 26, 26, -1), r: joint(cx + sw, shY, cx + handX, barY, 26, 26, 1) };
  return wrap(`
    <ellipse cx="${cx}" cy="198" rx="58" ry="7" fill="rgba(139,123,255,.22)"/>
    <line x1="${cx - 46}" y1="42" x2="${cx - 46}" y2="46" stroke="${IRON}" stroke-width="5"/>
    <line x1="${cx + 46}" y1="42" x2="${cx + 46}" y2="46" stroke="${IRON}" stroke-width="5"/>
    ${limb(cx - hw * 0.5, 160 + dip, cx - hw * 0.55, 196, limbW + 2, L.skin)}${limb(cx + hw * 0.5, 160 + dip, cx + hw * 0.55, 196, limbW + 2, L.skin)}
    <rect x="${cx - hw * 0.55 - 8}" y="192" width="17" height="8" rx="4" fill="${L.top}"/><rect x="${cx + hw * 0.55 - 9}" y="192" width="17" height="8" rx="4" fill="${L.top}"/>
    <path d="M${cx - sw - 2},${shY - 4} L${cx - hw},${164 + dip} L${cx + hw},${164 + dip} L${cx + sw + 2},${shY - 4}
             Q${cx},${shY - 16} ${cx - sw - 2},${shY - 4} Z" fill="${L.top}"/>
    ${bust(cx, shY + 4, sw, L)}
    <rect x="${cx - hw}" y="${160 + dip}" width="${hw * 2}" height="15" rx="6" fill="${L.short}"/>
    ${limb(cx - sw, shY, el.l.kx, el.l.ky, limbW + 2, L.top)}${limb(cx + sw, shY, el.r.kx, el.r.ky, limbW + 2, L.top)}
    ${limb(el.l.kx, el.l.ky, el.l.tx, el.l.ty, limbW, L.skin)}${limb(el.r.kx, el.r.ky, el.r.tx, el.r.ty, limbW, L.skin)}
    ${headFront(cx, shY - 26, 15, L, t > 0.85)}
    <line x1="${cx - 72}" y1="${barY}" x2="${cx + 72}" y2="${barY}" stroke="#b9b4e6" stroke-width="5" stroke-linecap="round"/>
    <rect x="${cx - 84}" y="${barY - 15}" width="13" height="30" rx="4" fill="${IRON}" stroke="#ff5a3c" stroke-width="2"/>
    <rect x="${cx + 71}" y="${barY - 15}" width="13" height="30" rx="4" fill="${IRON}" stroke="#ff5a3c" stroke-width="2"/>
    <circle cx="${cx - handX}" cy="${barY}" r="${limbW * .55}" fill="${L.skin}"/>
    <circle cx="${cx + handX}" cy="${barY}" r="${limbW * .55}" fill="${L.skin}"/>
    ${t > 0.92 ? effort(cx, 46) : ''}
  `);
}

/* ================= PULL-UPS (front view) ================= */
export function pullupScene(avatar, muscle, t) {
  const L = look(avatar);
  const cx = 120;
  const sw = (L.fem ? 12 : 16) + muscle * (L.fem ? 8 : 11);
  const hw = L.fem ? sw + 4 : sw;
  const limbW = (L.fem ? 6.5 : 8) + muscle * 5;
  const barY = 34, handX = 34;
  const shY = 124 - t * 58;
  const el = { l: joint(cx - sw, shY, cx - handX, barY, 30, 30, 1), r: joint(cx + sw, shY, cx + handX, barY, 30, 30, -1) };
  const hipY = shY + 46;
  return wrap(`
    <line x1="58" y1="6" x2="58" y2="${barY}" stroke="${IRON}" stroke-width="7"/>
    <line x1="182" y1="6" x2="182" y2="${barY}" stroke="${IRON}" stroke-width="7"/>
    <line x1="50" y1="${barY}" x2="190" y2="${barY}" stroke="#b9b4e6" stroke-width="5" stroke-linecap="round"/>
    ${limb(cx - sw, shY, el.l.kx, el.l.ky, limbW + 2, L.top)}${limb(cx + sw, shY, el.r.kx, el.r.ky, limbW + 2, L.top)}
    ${limb(el.l.kx, el.l.ky, cx - handX, barY + 2, limbW, L.skin)}${limb(el.r.kx, el.r.ky, cx + handX, barY + 2, limbW, L.skin)}
    <circle cx="${cx - handX}" cy="${barY}" r="${limbW * .55}" fill="${L.skin}"/>
    <circle cx="${cx + handX}" cy="${barY}" r="${limbW * .55}" fill="${L.skin}"/>
    <path d="M${cx - sw - 1},${shY - 3} L${cx - hw},${hipY} L${cx + hw},${hipY} L${cx + sw + 1},${shY - 3}
             Q${cx},${shY - 14} ${cx - sw - 1},${shY - 3} Z" fill="${L.top}"/>
    ${bust(cx, shY + 6, sw, L)}
    <rect x="${cx - hw}" y="${hipY - 4}" width="${hw * 2}" height="14" rx="6" fill="${L.short}"/>
    ${limb(cx - hw * 0.6, hipY + 9, cx - hw * 0.7, hipY + 32, limbW + 1, L.skin)}${limb(cx + hw * 0.6, hipY + 9, cx + hw * 0.7, hipY + 32, limbW + 1, L.skin)}
    ${limb(cx - hw * 0.7, hipY + 32, cx - hw * 0.9, hipY + 48, limbW, L.skin)}${limb(cx + hw * 0.7, hipY + 32, cx + hw * 0.5, hipY + 48, limbW, L.skin)}
    <circle cx="${cx - hw * 0.9 - 2}" cy="${hipY + 50}" r="5" fill="${L.top}"/><circle cx="${cx + hw * 0.5 + 2}" cy="${hipY + 50}" r="5" fill="${L.top}"/>
    ${headFront(cx, shY - 24, 14, L, t > 0.8)}
    ${t > 0.9 ? effort(cx, shY - 30) : ''}
  `);
}

/* ================= TREADMILL — side view run ================= */
export function runScene(avatar, muscle, phase, beltOffset, speedGlow = 0) {
  const L = look(avatar);
  const bob = 2.5 * Math.sin(phase * Math.PI * 4);
  const hipX = 108, hipY = 138 + bob, groundY = 176;
  const shX = hipX + 10, shY = 96 + bob;
  const limbW = (L.fem ? 6.5 : 8) + muscle * 5;
  const legs = [phase, phase + 0.5].map((ph, i) => {
    const fx = hipX + 30 * Math.cos(ph * Math.PI * 2);
    const fy = groundY - Math.max(0, 16 * Math.sin(ph * Math.PI * 2)) - 4;
    const k = joint(hipX, hipY, fx, fy, 26, 26, 1);
    const op = i === 0 ? 1 : 0.55;
    return limb(hipX, hipY, k.kx, k.ky, limbW + 2, L.short, op) + limb(k.kx, k.ky, k.tx, k.ty, limbW, L.skin, op) +
      `<circle cx="${k.tx.toFixed(1)}" cy="${(k.ty + 2).toFixed(1)}" r="5.5" fill="${L.top}" opacity="${op}"/>`;
  }).join('');
  const arms = [phase + 0.5, phase].map((ph, i) => {
    const ex = shX + 13 * Math.sin(ph * Math.PI * 2), ey = shY + 18;
    const hx = ex + 12, hy = ey - 6 + 4 * Math.sin(ph * Math.PI * 2);
    const op = i === 0 ? 1 : 0.55;
    return limb(shX, shY + 4, ex, ey, limbW + 1, L.top, op) + limb(ex, ey, hx, hy, limbW - 1, L.skin, op);
  }).join('');
  const chest = L.fem ? `<circle cx="${shX + 5}" cy="${shY + 12}" r="4.5" fill="${L.top}"/>` : '';
  return wrap(`
    ${speedGlow > 0 ? `<g stroke="#37e0b0" stroke-width="2" stroke-linecap="round" opacity="${(speedGlow * .8).toFixed(2)}">
      <line x1="40" y1="${100 + bob}" x2="62" y2="${100 + bob}"/><line x1="34" y1="${120 + bob}" x2="60" y2="${120 + bob}"/><line x1="44" y1="${140 + bob}" x2="64" y2="${140 + bob}"/></g>` : ''}
    <path d="M186,${groundY + 6} L178,112 l14,0 0,10 -10,0" fill="none" stroke="${IRON}" stroke-width="7" stroke-linecap="round"/>
    <rect x="176" y="104" width="26" height="16" rx="4" fill="${LINE}" stroke="#8b7bff" stroke-width="1.5"/>
    <rect x="42" y="${groundY + 4}" width="156" height="12" rx="6" fill="${IRON}"/>
    <line x1="50" y1="${groundY + 4}" x2="192" y2="${groundY + 4}" stroke="#8b7bff" stroke-width="2.5"
      stroke-dasharray="10 8" stroke-dashoffset="${(-beltOffset).toFixed(0)}"/>
    ${legs}
    ${limb(hipX, hipY, shX, shY, (L.fem ? 14 : 17) + muscle * 8, L.top)}
    ${chest}
    ${arms}
    ${headSide(shX + 9, shY - 15, 13, L, -1)}
  `);
}

/* ================= BIKE — side view pedal ================= */
export function bikeScene(avatar, muscle, crankAngle, wheelAngle, inBand = false) {
  const L = look(avatar);
  const limbW = (L.fem ? 6.5 : 8) + muscle * 5;
  const crank = { x: 122, y: 160, r: 15 };
  const seat = { x: 100, y: 122 }, bars = { x: 158, y: 116 };
  const hip = { x: seat.x + 3, y: seat.y - 4 };
  const sh = { x: 136, y: 92 };
  const wheel = (cx, cy) => {
    let s = '';
    for (let i = 0; i < 3; i++) {
      const a = wheelAngle + (i * Math.PI) / 1.5;
      s += `<line x1="${(cx - 20 * Math.cos(a)).toFixed(1)}" y1="${(cy - 20 * Math.sin(a)).toFixed(1)}" x2="${(cx + 20 * Math.cos(a)).toFixed(1)}" y2="${(cy + 20 * Math.sin(a)).toFixed(1)}" stroke="${LINE}" stroke-width="2"/>`;
    }
    return `<circle cx="${cx}" cy="${cy}" r="23" fill="none" stroke="${inBand ? '#37e0b0' : '#8b7bff'}" stroke-width="4"/>${s}<circle cx="${cx}" cy="${cy}" r="4" fill="${IRON}"/>`;
  };
  const pedals = [crankAngle, crankAngle + Math.PI].map((a, i) => {
    const fx = crank.x + crank.r * Math.cos(a), fy = crank.y + crank.r * Math.sin(a);
    const k = joint(hip.x, hip.y, fx, fy - 3, 30, 28, 1);
    const op = i === 0 ? 1 : 0.55;
    return `<line x1="${crank.x}" y1="${crank.y}" x2="${fx.toFixed(1)}" y2="${fy.toFixed(1)}" stroke="${IRON}" stroke-width="4" opacity="${op}"/>
      <rect x="${(fx - 7).toFixed(1)}" y="${(fy - 2).toFixed(1)}" width="14" height="4" rx="2" fill="${IRON}" opacity="${op}"/>` +
      limb(hip.x, hip.y, k.kx, k.ky, limbW + 2, L.short, op) + limb(k.kx, k.ky, k.tx, k.ty, limbW, L.skin, op) +
      `<circle cx="${fx.toFixed(1)}" cy="${(fy - 3).toFixed(1)}" r="5" fill="${L.top}" opacity="${op}"/>`;
  }).join('');
  const elbow = joint(sh.x, sh.y + 4, bars.x + 2, bars.y + 2, 20, 20, 1);
  const chest = L.fem ? `<circle cx="${sh.x + 4}" cy="${sh.y + 10}" r="4.5" fill="${L.top}"/>` : '';
  return wrap(`
    <ellipse cx="120" cy="192" rx="86" ry="6" fill="rgba(139,123,255,.2)"/>
    ${wheel(70, 182)}${wheel(174, 182)}
    <path d="M70,182 L100,128 M100,128 L122,160 M122,160 L70,182 M122,160 L158,120 M158,120 L174,182 M100,128 L96,118"
      fill="none" stroke="#8b7bff" stroke-width="4.5" stroke-linecap="round"/>
    <rect x="90" y="114" width="20" height="6" rx="3" fill="${IRON}"/>
    <path d="M158,120 L158,110 L166,106" fill="none" stroke="${IRON}" stroke-width="4.5" stroke-linecap="round"/>
    ${pedals}
    ${limb(hip.x, hip.y, sh.x, sh.y, (L.fem ? 14 : 16) + muscle * 8, L.top)}
    ${chest}
    ${limb(sh.x, sh.y + 4, elbow.kx, elbow.ky, limbW + 1, L.top)}${limb(elbow.kx, elbow.ky, 164, 108, limbW - 1, L.skin)}
    ${headSide(sh.x + 10, sh.y - 14, 13, L, 1)}
  `);
}
