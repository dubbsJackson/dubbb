/* avatar.js — avatar creation defaults + the signature transforming SVG figure.
   muscle & lean (0..1) drive the silhouette; gender picks man/woman proportions;
   skin/hair/outfit are cosmetic. The body is meant to visibly change as you train:
   men get more ripped and buff the higher muscle+lean climb; women start rounder
   at low leanness and turn slender + athletic as leanness rises. */

import { SKIN_TONES, HAIRS, FRAMES, OUTFITS } from './data.js';

export function defaultAvatar() {
  return {
    gender: 'man',
    skinTone: SKIN_TONES[1].id,
    hair: HAIRS[0].id,
    bodyFrame: FRAMES[0].id,   // 'big'
    outfit: OUTFITS[0].id,
    startWeight: 200,
    goalWeight: 175,
  };
}

const byId = (arr, id) => arr.find(x => x.id === id) || arr[0];
const DARK = '#0c0a1f';

export function avatarSVG(avatar, muscle, lean, { width = 150, height = 200 } = {}) {
  muscle = Math.max(0, Math.min(1, muscle));
  lean = Math.max(0, Math.min(1, lean));

  const tone = byId(SKIN_TONES, avatar.skinTone);
  const hair = byId(HAIRS, avatar.hair);
  const outfit = byId(OUTFITS, avatar.outfit);
  const cx = 110;
  const bulk = byId(FRAMES, avatar.bodyFrame).bulk || 1;   // Bigger frame → heavier, rounder start
  const uid = `sk${Math.round(muscle * 100)}${Math.round(lean * 100)}${tone.id}${avatar.gender === 'woman' ? 'w' : 'm'}`;

  const body = avatar.gender === 'woman'
    ? womanBody(cx, muscle, lean, outfit, uid, bulk)
    : manBody(cx, muscle, lean, outfit, uid, bulk);

  return `
  <svg viewBox="0 0 220 250" width="${width}" height="${height}" role="img" aria-label="Your avatar">
    <defs>
      <linearGradient id="${uid}" x1="0" x2="1">
        <stop offset="0" stop-color="${tone.c}"/><stop offset="1" stop-color="${tone.shade}"/>
      </linearGradient>
    </defs>
    <ellipse cx="${cx}" cy="236" rx="${40 + muscle * 22}" ry="8" fill="rgba(139,123,255,.25)"/>
    ${body}
    <circle cx="${cx}" cy="46" r="20" fill="url(#${uid})"/>
    ${hairSVG(hair, cx)}
    <circle cx="${cx - 7}" cy="45" r="1.8" fill="${DARK}"/>
    <circle cx="${cx + 7}" cy="45" r="1.8" fill="${DARK}"/>
    <path d="M${cx - 5},54 q5,${muscle + lean > 1 ? 4 : 1.5} 10,0" stroke="${DARK}" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  </svg>`;
}

/* ---------- man: gets bigger + more ripped as muscle & lean rise ---------- */
function manBody(cx, muscle, lean, outfit, uid, bulk = 1) {
  const fat = 1 - lean;
  const shoulder = 34 + muscle * 40;                 // wider delts the more you lift
  const belly = 15 + fat * 15 * bulk + (1 - muscle) * 3; // waist: round & heavy when soft/bulky, tight when lean
  const arm = 6 + muscle * 12 + fat * 3 * (bulk - 1);
  const pecs = muscle > 0.45;
  const abs = lean > 0.5 && muscle > 0.4;
  const ripped = lean > 0.6 && muscle > 0.62;        // full six-pack + obliques + traps
  const absOp = (0.2 + (ripped ? 0.22 : 0.08)).toFixed(2);
  return `
    <path d="M${cx - 20},150 L${cx - 22},228 L${cx - 9},228 L${cx - 6},150 Z" fill="url(#${uid})"/>
    <path d="M${cx + 20},150 L${cx + 22},228 L${cx + 9},228 L${cx + 6},150 Z" fill="url(#${uid})"/>
    <path d="M${cx - belly - 1},144 L${cx - 22},188 L${cx - 6},188 L${cx - 3},150
             L${cx + 3},150 L${cx + 6},188 L${cx + 22},188 L${cx + belly + 1},144
             C${cx + belly + 1},152 ${cx - belly - 1},152 ${cx - belly - 1},144 Z" fill="${outfit.short}"/>
    <line x1="${cx}" y1="150" x2="${cx}" y2="186" stroke="${DARK}" stroke-width="1.5" opacity=".3"/>
    <rect x="${cx - 25}" y="224" width="19" height="9" rx="4" fill="${outfit.top}"/>
    <rect x="${cx + 6}" y="224" width="19" height="9" rx="4" fill="${outfit.top}"/>
    <rect x="${cx - shoulder - arm}" y="80" width="${arm}" height="62" rx="${arm / 2}" fill="url(#${uid})"/>
    <rect x="${cx + shoulder}" y="80" width="${arm}" height="62" rx="${arm / 2}" fill="url(#${uid})"/>
    ${muscle > 0.5 ? `<ellipse cx="${cx - shoulder - arm / 2}" cy="103" rx="${arm * .72}" ry="${9 + muscle * 9}" fill="url(#${uid})"/>
      <ellipse cx="${cx + shoulder + arm / 2}" cy="103" rx="${arm * .72}" ry="${9 + muscle * 9}" fill="url(#${uid})"/>` : ''}
    <path d="M${cx - shoulder},78
             C${cx - shoulder},78 ${cx - belly},120 ${cx - belly},135
             C${cx - belly},152 ${cx - 18},158 ${cx},158
             C${cx + 18},158 ${cx + belly},152 ${cx + belly},135
             C${cx + belly},120 ${cx + shoulder},78 ${cx + shoulder},78
             C${cx + shoulder},78 ${cx + 20},64 ${cx},64
             C${cx - 20},64 ${cx - shoulder},78 ${cx - shoulder},78 Z" fill="url(#${uid})"/>
    <path d="M${cx - shoulder + 2},80
             C${cx - shoulder + 2},80 ${cx - belly},120 ${cx - belly},136
             C${cx - belly},150 ${cx - 17},156 ${cx},156
             C${cx + 17},156 ${cx + belly},150 ${cx + belly},136
             C${cx + belly},120 ${cx + shoulder - 2},80 ${cx + shoulder - 2},80
             C${cx + shoulder - 2},80 ${cx + 17},70 ${cx},70
             C${cx - 17},70 ${cx - shoulder + 2},80 ${cx - shoulder + 2},80 Z" fill="${outfit.top}"/>
    <path d="M${cx - 10},71 Q${cx},80 ${cx + 10},71" fill="none" stroke="${DARK}" stroke-width="2" opacity=".28"/>
    <rect x="${cx - shoulder - arm - 1}" y="79" width="${arm + 3}" height="26" rx="${arm / 2}" fill="${outfit.top}"/>
    <rect x="${cx + shoulder - 2}" y="79" width="${arm + 3}" height="26" rx="${arm / 2}" fill="${outfit.top}"/>
    ${muscle > 0.6 ? `<path d="M${cx - 13},71 L${cx - shoulder * .5},80 M${cx + 13},71 L${cx + shoulder * .5},80" stroke="${DARK}" stroke-width="2" opacity=".2"/>` : ''}
    ${pecs ? `<g opacity="${(0.2 + muscle * 0.2).toFixed(2)}" stroke="${DARK}" stroke-width="2.5" fill="none">
      <path d="M${cx - shoulder * .5},90 q11,-13 20,-2"/><path d="M${cx + shoulder * .5},90 q-11,-13 -20,-2"/>
      <line x1="${cx}" y1="84" x2="${cx}" y2="101"/></g>` : ''}
    ${abs ? `<g opacity="${absOp}" stroke="${DARK}" stroke-width="2" fill="none">
      <line x1="${cx}" y1="101" x2="${cx}" y2="150"/>
      <line x1="${cx - 12}" y1="113" x2="${cx + 12}" y2="113"/>
      <line x1="${cx - 12}" y1="127" x2="${cx + 12}" y2="127"/>
      ${ripped ? `<line x1="${cx - 11}" y1="140" x2="${cx + 11}" y2="140"/>
      <path d="M${cx - belly + 2},122 q5,14 11,26"/><path d="M${cx + belly - 2},122 q-5,14 -11,26"/>` : ''}
    </g>` : ''}
  `;
}

/* ---------- woman: round at low leanness → slender + athletic as leanness rises ---------- */
function womanBody(cx, muscle, lean, outfit, uid, bulk = 1) {
  const round = 1 - lean;                          // softness when leanness is low
  const shoulder = 27 + muscle * 17 + round * 4 * (bulk - 1);
  const waist = 14 + round * 16 * bulk - muscle * 1.5; // big & round when soft/bulky, cinched when lean
  const hip = 21 + round * 11 * bulk;
  const bust = 6 + muscle * 2 + round * 3 * bulk;
  const arm = 5 + muscle * 7 + round * 2 * (bulk - 1);
  const abs = lean > 0.62;                         // subtle athletic definition when lean
  const WY = 130;

  // shared torso outline (shoulders → bust → cinched waist), inset for the tank layer
  const torso = (i) => {
    const s = shoulder - i, w = waist - i * 0.6, b = bust - i * 0.5, top = 80 + i * 0.4;
    return `M${cx - s},${top}
      C${cx - s - 1},92 ${cx - b - 12},99 ${cx - b - 11},106
      C${cx - b - 9},114 ${cx - w},120 ${cx - w},${WY}
      C${cx - w},144 ${cx - 13},156 ${cx},156
      C${cx + 13},156 ${cx + w},144 ${cx + w},${WY}
      C${cx + w},120 ${cx + b + 9},114 ${cx + b + 11},106
      C${cx + b + 12},99 ${cx + s + 1},92 ${cx + s},${top}
      C${cx + s},${top} ${cx + 15},68 ${cx},68
      C${cx - 15},68 ${cx - s},${top} ${cx - s},${top} Z`;
  };

  return `
    <path d="M${cx - hip * .6},150 C${cx - hip * .6},178 ${cx - 12},202 ${cx - 13},228 L${cx - 4},228 C${cx - 3},202 ${cx - 3},176 ${cx - 3},152 Z" fill="url(#${uid})"/>
    <path d="M${cx + hip * .6},150 C${cx + hip * .6},178 ${cx + 12},202 ${cx + 13},228 L${cx + 4},228 C${cx + 3},202 ${cx + 3},176 ${cx + 3},152 Z" fill="url(#${uid})"/>
    <path d="M${cx - hip},138 C${cx - hip},150 ${cx - hip * .5},158 ${cx},158 C${cx + hip * .5},158 ${cx + hip},150 ${cx + hip},138
             L${cx + hip * .78},150 L${cx + 3},151 L${cx - 3},151 L${cx - hip * .78},150 Z" fill="${outfit.short}"/>
    <line x1="${cx}" y1="150" x2="${cx}" y2="156" stroke="${DARK}" stroke-width="1.4" opacity=".25"/>
    <rect x="${cx - 20}" y="224" width="16" height="9" rx="4" fill="${outfit.top}"/>
    <rect x="${cx + 4}" y="224" width="16" height="9" rx="4" fill="${outfit.top}"/>
    <rect x="${cx - shoulder - arm + 2}" y="82" width="${arm}" height="58" rx="${arm / 2}" fill="url(#${uid})"/>
    <rect x="${cx + shoulder - 2}" y="82" width="${arm}" height="58" rx="${arm / 2}" fill="url(#${uid})"/>
    <path d="${torso(0)}" fill="url(#${uid})"/>
    <path d="${torso(2)}" fill="${outfit.top}"/>
    <path d="M${cx - 9},70 Q${cx},78 ${cx + 9},70" fill="none" stroke="${DARK}" stroke-width="1.8" opacity=".25"/>
    <rect x="${cx - shoulder - arm + 1}" y="81" width="${arm + 2}" height="16" rx="${arm / 2}" fill="${outfit.top}"/>
    <rect x="${cx + shoulder - 3}" y="81" width="${arm + 2}" height="16" rx="${arm / 2}" fill="${outfit.top}"/>
    <path d="M${cx - bust - 2},105 q${bust + 2},9 ${(bust + 2) * 2},0" fill="none" stroke="${DARK}" stroke-width="1.6" opacity=".16"/>
    ${abs ? `<g opacity=".2" stroke="${DARK}" stroke-width="1.6" fill="none">
      <line x1="${cx}" y1="118" x2="${cx}" y2="150"/>
      <line x1="${cx - 8}" y1="129" x2="${cx + 8}" y2="129"/>
      <line x1="${cx - 7}" y1="140" x2="${cx + 7}" y2="140"/></g>` : ''}
  `;
}

function hairSVG(hair, cx) {
  if (!hair.c) return '';
  switch (hair.id) {
    case 'buzz':
      return `<path d="M${cx - 20},42 a20,20 0 0,1 40,0 c-6,-11 -34,-11 -40,0 Z" fill="${hair.c}" opacity=".85"/>`;
    case 'curls':
      return `<g fill="${hair.c}"><circle cx="${cx - 14}" cy="32" r="8"/><circle cx="${cx}" cy="27" r="9"/><circle cx="${cx + 14}" cy="32" r="8"/><circle cx="${cx - 7}" cy="29" r="7"/><circle cx="${cx + 7}" cy="29" r="7"/></g>`;
    case 'spikes':
      return `<path d="M${cx - 19},38 l5,-12 4,9 5,-13 4,10 5,-11 4,10 5,-9 3,12 c-8,-8 -28,-8 -35,4 Z" fill="${hair.c}"/>`;
    case 'long':
      return `<path d="M${cx - 21},40 a21,21 0 0,1 42,0 l3,26 c-4,4 -9,2 -10,-2 l-2,-16 c-10,-7 -22,-7 -26,0 l-2,16 c-1,4 -6,6 -10,2 Z" fill="${hair.c}"/>`;
    default:
      return '';
  }
}

export { SKIN_TONES, HAIRS, FRAMES, OUTFITS, byId };
