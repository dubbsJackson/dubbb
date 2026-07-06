# CLAUDE.md — DreamBodX Fitness (Web Game)

> Project source of truth. Read this fully before any build step. Follow it exactly; if something here conflicts with a request, ask before deviating.

## What we're building
A mobile-first browser game called **DreamBodX Fitness** — a 30-day body-transformation life-sim. The player creates an avatar, travels a map of gyms/food spots, plays quick per-machine mini-games to earn stats, watches their body visibly transform every 3 days, keeps a daily streak, and competes on a weekly leaderboard. Free to play; monetized with cosmetics, premium gyms, and league passes.

It doubles as a funnel for the real DreamBodX store (fitness gear + digital workout/nutrition ebooks at dreambodx.myshopify.com). The game's win/lose screens cross-sell the ebooks.

**Audience:** casual mobile players + fitness-curious people. **The game's one job:** make the player think "one more day."

## Non-negotiable design rules (learned, keep these)
1. **No harsh punishment.** Missing training breaks the streak and stalls a "momentum" bar — but never erase earned gains. Pair any regression with a visible **comeback bonus** on return. Punishment drives churn.
2. **Fast, not idle.** Each in-game "day" is a short active session the player can do back-to-back. Do NOT gate progress behind real-world clocks in the MVP. Layer daily-return streak rewards on top later.
3. **Retention beats art.** First 3 minutes must be un-loseable. Platforms (Poki/CrazyGames) reject on quality/retention, not visuals. Build the fun loop first, art second.
4. **Tap-to-travel map** (tap a building → jump straight in). No walking-avatar pathfinding.
5. **Each machine has its OWN mini-game.** Harder gyms = tighter/faster versions with bigger payouts.

## Tech stack & constraints
- **Vanilla HTML5 + CSS3 + JavaScript (ES modules).** No framework for MVP (keep bundle tiny — load speed is a ranking factor).
- Mobile-first, responsive, touch-first. Works portrait on phones.
- Quality floor: keyboard focus visible, `prefers-reduced-motion` respected, no console errors.
- Small total file size. Optimize/compress all generated art.
- No localStorage assumptions for shared data — leaderboard needs a real backend later (stub a local/seeded version for MVP, isolate it behind `save.js` so it's swappable).

## File architecture (build to this)
```
index.html          # shell, mounts #app, loads modules
styles.css          # all styles, design tokens as CSS vars
app.js              # game loop, screen router, state orchestration
data.js             # static data: gyms, machines, foods, rewards, config
avatar.js           # avatar creation + transforming SVG render (muscle/lean params)
progress.js         # stat gains, momentum, body transformation, regression + comeback
challenges.js       # per-machine mini-games (treadmill, weights, bike, circuit)
leaderboard.js      # ranking (score / streak / wins); local+seeded now, server later
save.js             # save/load; local first, cloud sync later (swappable interface)
economy.js          # XP, rewards, cosmetics, premium passes (hooks only in MVP)
platform.js         # Poki/CrazyGames SDK adapter (lifecycle + ad hooks; no-op locally)
```

## Data model
- `PlayerProfile` { name, ageGate, targetDays, avatar, day, streak, stats }
- `Avatar` { skinTone, hair, bodyFrame, outfit, startWeight, goalWeight, muscle, lean }
- `DailySession` { day, energy, actionsTaken[], gained{} }
- `GymMachine` { id, name, tier(easy/med/hard), miniGame, statFocus, reward }
- `FoodItem` { id, name, good|bad, stamina, strength, momentum }
- `LeaderboardEntry` { name, score, streak, wins }
- `RewardItem` { id, type(cosmetic/pass), premium }

## Screens / UI flow
1. Splash / Title — logo, tagline, Start, Continue.
2. Profile Setup — name, age gate, target days, notifications opt-in.
3. Avatar Creator — skin tone, hair, body frame, outfit, start weight, goal weight → Confirm.
4. Challenge Intro — 30-day rules, session explanation, rewards, comeback (not punishment) framing.
5. Home Hub — day, energy, stamina, strength, momentum, weight, streak. Buttons: Gym, Food, Map, Leaderboard, Wardrobe, Stats.
6. Map / World (tap-to-travel) — Easy Gym, Medium Gym, Hard Gym, Food Court, Rest Area, Weekly Arena.
7. Gym Screen — pick machine → its own mini-game → earn points/stamina/strength.
8. Food Screen — pick meals/drinks; good boosts stats+momentum, bad lowers efficiency.
9. Body Change Screen — every 3 in-game days: show transformation + stat deltas (progress-photo moment).
10. Weekly Leaderboard — points, hours, streak, challenge wins; weekly rewards + rank movement.
11. Regression / Comeback Screen — on return after inactivity: show stall + a comeback bonus (never a pure penalty).
12. Win Screen — hit target body before day 30 → celebrate, unlock prestige mode, cross-sell DreamBodX ebooks.

## Mini-games (each machine feels different)
- **Treadmill (cardio):** timing bar — tap in the green zone. Boosts leanness + stamina.
- **Weights (strength):** tap-to-lift power meter — rhythm of taps builds a rep; boosts muscle + strength.
- **Bike (endurance):** sustained rhythm taps to hold cadence; boosts stamina.
- **Circuit (mixed):** quick reflex/whack sequence; balanced gains + big momentum.
- Tier scaling: Easy = forgiving windows; Medium = tighter; Hard = tightest + fastest, biggest payout.

## Art direction (design tokens)
Theme: **"neon gym at night."** Energetic, gritty, motivational. NOT flat/generic.
- `--ink:#0c0a1f` (midnight base) · `--ink2:#151233` (panel) · `--ink3:#1e1a45` (raised)
- `--burn:#ff5a3c` (effort/push) · `--gain:#37e0b0` (success/gains) · `--gold:#ffc24b` (streak/reward) · `--violet:#8b7bff` (accent)
- Display type: a bold condensed athletic face (e.g. Anton). Body: Inter/system-ui.
- Signature element: the **transforming avatar** (muscle + leanness parameters drive an SVG figure). Spend boldness here; keep everything else disciplined.

## Higgsfield (MCP) usage
Use the Higgsfield MCP to generate: avatar art / body states, gym backgrounds, machine icons, and later UGC-style video ads. Generate at final display size, remove backgrounds, and optimize before committing. Keep an `/assets` folder. Don't block gameplay logic on art — code first, swap art in.

## Monetization hooks (build as stubs, wire later)
- Cosmetics (outfits, avatar customization) · Premium gyms (extra energy / double gains) · VIP league + weekly tournaments · Streak-freeze token · Cross-sell card → dreambodx.myshopify.com/collections/workout-plans-ebooks on win/lose screens.

## MVP build order (do in this sequence, prove the loop first)
1. Avatar creator
2. Day timer / day cycle + energy
3. ONE gym mini-game (start with Weights or Treadmill)
4. Food boost system
5. Progress + regression/comeback
6. Simple leaderboard (seeded/local)
7. Win/lose state
Then: map + remaining gyms/mini-games → Higgsfield art pass → cosmetics/economy → publish prep (Poki/CrazyGames).

## Coding conventions
- ES modules, one system per file per the architecture above.
- Pure functions for stat math in `progress.js` (easy to test/tune).
- All tunables (gains, windows, thresholds) live in `data.js` config — never hard-coded in logic.
- Comment the "why" on any balance number.
- After each MVP step, verify it runs with no console errors before moving on.
