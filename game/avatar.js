/* avatar.js — avatar creation defaults + the signature transforming SVG figure.
   muscle & lean (0..1) drive the silhouette; skin/hair/outfit are cosmetic. */

import { SKIN_TONES, HAIRS, FRAMES, OUTFITS } from './data.js';

export function defaultAvatar() {
  return {
    skinTone: SKIN_TONES[1].id,
    hair: HAIRS[0].id,
    bodyFrame: FRAMES[2].id,
    outfit: OUTFITS[0].id,
    startWeight: 200,
    goalWeight: 175,
  };
}

const byId = (arr, id) => arr.find(x => x.id === id) || arr[0];

/* The one place we spend visual boldness (art direction note in CLAUDE.md).
   Shoulder width tracks muscle, waist tracks leanness, arms thicken with muscle,
   ab/pec definition lines appear once both are high enough. */
export function avatarSVG(avatar, muscle, lean, { width = 150, height = 200 } = {}) {
  muscle = Math.max(0, Math.min(1, muscle));
  lean = Math.max(0, Math.min(1, lean));

  const tone = byId(SKIN_TONES, avatar.skinTone);
  const hair = byId(HAIRS, avatar.hair);
  const outfit = byId(OUTFITS, avatar.outfit);

  const cx = 110;
  const shoulder = 34 + muscle * 34;                   // half-width at the delts
  const belly = 30 - lean * 15 + (1 - muscle) * 4;     // waist half-width
  const arm = 6 + muscle * 9;
  const abs = lean > 0.6 && muscle > 0.4;              // definition only shows when earned
  const pecs = muscle > 0.5;
  const uid = `sk${Math.round(muscle * 100)}${Math.round(lean * 100)}${tone.id}`;

  return `
  <svg viewBox="0 0 220 250" width="${width}" height="${height}" role="img" aria-label="Your avatar">
    <defs>
      <linearGradient id="${uid}" x1="0" x2="1">
        <stop offset="0" stop-color="${tone.c}"/><stop offset="1" stop-color="${tone.shade}"/>
      </linearGradient>
    </defs>
    <!-- glow floor -->
    <ellipse cx="${cx}" cy="236" rx="${40 + muscle * 22}" ry="8" fill="rgba(139,123,255,.25)"/>
    <!-- legs (skin) -->
    <path d="M${cx - 20},150 L${cx - 22},228 L${cx - 9},228 L${cx - 6},150 Z" fill="url(#${uid})"/>
    <path d="M${cx + 20},150 L${cx + 22},228 L${cx + 9},228 L${cx + 6},150 Z" fill="url(#${uid})"/>
    <!-- shorts (cover hips + upper thighs) -->
    <path d="M${cx - belly - 1},144 L${cx - 22},188 L${cx - 6},188 L${cx - 3},150
             L${cx + 3},150 L${cx + 6},188 L${cx + 22},188 L${cx + belly + 1},144
             C${cx + belly + 1},152 ${cx - belly - 1},152 ${cx - belly - 1},144 Z" fill="${outfit.short}"/>
    <line x1="${cx}" y1="150" x2="${cx}" y2="186" stroke="#0c0a1f" stroke-width="1.5" opacity=".3"/>
    <!-- shoes -->
    <rect x="${cx - 25}" y="224" width="19" height="9" rx="4" fill="${outfit.top}"/>
    <rect x="${cx + 6}" y="224" width="19" height="9" rx="4" fill="${outfit.top}"/>
    <!-- arms (skin) -->
    <rect x="${cx - shoulder - arm}" y="80" width="${arm}" height="62" rx="${arm / 2}" fill="url(#${uid})"/>
    <rect x="${cx + shoulder}" y="80" width="${arm}" height="62" rx="${arm / 2}" fill="url(#${uid})"/>
    ${muscle > 0.65 ? `<circle cx="${cx - shoulder - arm / 2}" cy="112" r="${arm * .7}" fill="url(#${uid})"/>
      <circle cx="${cx + shoulder + arm / 2}" cy="112" r="${arm * .7}" fill="url(#${uid})"/>` : ''}
    <!-- torso (skin base for neck + edges) -->
    <path d="M${cx - shoulder},78
             C${cx - shoulder},78 ${cx - belly},120 ${cx - belly},135
             C${cx - belly},152 ${cx - 18},158 ${cx},158
             C${cx + 18},158 ${cx + belly},152 ${cx + belly},135
             C${cx + belly},120 ${cx + shoulder},78 ${cx + shoulder},78
             C${cx + shoulder},78 ${cx + 20},64 ${cx},64
             C${cx - 20},64 ${cx - shoulder},78 ${cx - shoulder},78 Z" fill="url(#${uid})"/>
    <!-- fitted shirt: covers the whole torso; muscle reads through as seams -->
    <path d="M${cx - shoulder + 2},80
             C${cx - shoulder + 2},80 ${cx - belly},120 ${cx - belly},136
             C${cx - belly},150 ${cx - 17},156 ${cx},156
             C${cx + 17},156 ${cx + belly},150 ${cx + belly},136
             C${cx + belly},120 ${cx + shoulder - 2},80 ${cx + shoulder - 2},80
             C${cx + shoulder - 2},80 ${cx + 17},70 ${cx},70
             C${cx - 17},70 ${cx - shoulder + 2},80 ${cx - shoulder + 2},80 Z" fill="${outfit.top}"/>
    <!-- collar -->
    <path d="M${cx - 10},71 Q${cx},80 ${cx + 10},71" fill="none" stroke="#0c0a1f" stroke-width="2" opacity=".28"/>
    <!-- sleeves over the upper arms -->
    <rect x="${cx - shoulder - arm - 1}" y="79" width="${arm + 3}" height="26" rx="${arm / 2}" fill="${outfit.top}"/>
    <rect x="${cx + shoulder - 2}" y="79" width="${arm + 3}" height="26" rx="${arm / 2}" fill="${outfit.top}"/>
    ${abs ? `<g opacity="0.3" stroke="#0c0a1f" stroke-width="2" fill="none">
      <line x1="${cx}" y1="98" x2="${cx}" y2="150"/>
      <line x1="${cx - 12}" y1="112" x2="${cx + 12}" y2="112"/>
      <line x1="${cx - 11}" y1="128" x2="${cx + 11}" y2="128"/>
    </g>` : ''}
    ${pecs ? `<g opacity="0.3" stroke="#0c0a1f" stroke-width="2.5" fill="none">
      <path d="M${cx - shoulder * .6},88 q10,-12 20,-2"/>
      <path d="M${cx + shoulder * .6},88 q-10,-12 -20,-2"/>
    </g>` : ''}
    <!-- head -->
    <circle cx="${cx}" cy="46" r="20" fill="url(#${uid})"/>
    ${hairSVG(hair, cx)}
    <!-- face -->
    <circle cx="${cx - 7}" cy="45" r="1.8" fill="#0c0a1f"/>
    <circle cx="${cx + 7}" cy="45" r="1.8" fill="#0c0a1f"/>
    <path d="M${cx - 5},54 q5,${muscle + lean > 1 ? 4 : 1.5} 10,0" stroke="#0c0a1f" stroke-width="1.8" fill="none" stroke-linecap="round"/>
  </svg>`;
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
