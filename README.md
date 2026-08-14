<p align="center">
  <img src="public/logo.png" width="64" height="64" alt="Quit Initiative logo" />
</p>
<h1 align="center">Quit Initiative</h1>
<p align="center">
  <em>Quit the habit. Own the person.</em><br />
  Science-backed quit plans, built for students, by students.
</p>

<p align="center">
  <img src="media/badge.svg" alt="Quit Initiative" />
</p>

<p align="center">
  <strong>v0.15 — mobile-first preview.</strong> This copy lives on GitHub so you can explore
  and try everything before it ships for real. A <strong>full membership is coming soon</strong>.
  Until then: use <strong>Anonymous mode</strong> and your progress stays on your device.
</p>

---

## The Mission

Addiction — smoking, vaping, doom-scrolling, cannabis, gambling, gaming, junk
food, porn, procrastination — costs students their time, money and health.
Most "quit" apps sell willpower myths. Quit does the opposite:

- **Peer-reviewed** — every protocol links to its published source on
  ResearchGate, Nature, PubMed, NIH and more. No shame, just science,
  translated into tools a student can actually use this semester.
- **Streaks that stock** — "days clean", money saved, milestones: your progress
  becomes hard to argue with.
- **The Academy** — videos, articles and materials that build resistance to each
  type of addiction before the urge lands.
- **A community** — student circles, creator streams, live accountability (Phase 3).
- **Seek help** — a support hub with 1-tap crisis lines for Tunisia (ATPS, Razi,
  UNICEF) and the US & Canada (988), WHO-sourced mental-health content, and
  members who got help. Member stories are **mockup details** for now — real
  stories arrive with the **real-accounts feature**, which is coming soon.
  The story data lives in `src/data/member-stories.ts`, the single source ready
  for backup/live integration.
- **100% free for students.** Product donations never change that.
- **Dark mode** — built on theme tokens, so the app is as comfortable at 2am as
  it is in daylight.

> “A failure to quit is not a failure of the person. Relapse is a data point,
> not a verdict.” — the Quit mindset

## Try it — Anonymous mode first.

This version is a *preview* for people checking out the initiative on GitHub
before the real release. So that no one has to leak a real-social email to test:

1. Go to the **Anonymous mode** tab on the Log in page.
2. Enter any **nickname** and a **temporary password** (4+ characters).
3. You're in — no email, no personal data, nothing to regret.

Come back later with the same nickname and password and your anonymous
progress is picked up right where you left it. A **full membership is coming
soon** — it will follow you across devices. Until then, your progress simply
stays on this device.

## What & who builds this

An open stack, an honest team:

| Area | What it does |
| --- | --- |
| **Home** | Streak hero, daily check-in, quit-march progress, wins you regained |
| **My plan** | Pick the one habit to quit, set a start date, get savings estimate |
| **Science** | Peer-reviewed sources made readable for a student |
| **Community** | Student circles, creator streams, live accountability (Phase 3) |
| **Help** | Seek-help hub — crisis lines, WHO stats and member stories (mockup details until real accounts ship) |
| **Profile** | Identity, settings, Academy, Clothing and sign-out in one place |
| **Academy** | Video + article lessons that build resistance, type by type |
| **Clothing** | Student-only merch that makes quitting visible |
| **Our Code** | The constitution — how we support and care about each other |
| **Settings** | Profile, privacy, notifications — tucked under Profile |
| **Sources** | Public-facing science log — ResearchGate, Nature, PubMed, NIH and more |

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 + shadcn/ui (theme-token light/dark mode)
- React Router v7
- Lucide icons
- Local-first auth (concept-safe hashing), backend pipeline at launch.

## Getting started

```bash
npm install
npm run dev
```

Production check:

```bash
npm run lint
npm run build
npm run preview
```

## Project structure

```
src/
  components/     # shadcn/ui components + layout pieces (navbar, footer, sponsor, sources)
  pages/          # one file per route
  lib/            # auth, zod schemas, addiction helpers
  data/           # data sources ready for backup/live integration (e.g. member-stories)
  assets/         # static brand assets
```

## Support the project

Quit is free for students and will always be. If it speaks to you at all,
coffee keeps the Academy producing and the lights on:

👉 **[Sponsor the Quit Initiative on Ko-fi](https://ko-fi.com/quitnow)**

For anything else — feedback, bugs, ideas, partnerships — reach us at
**[Support@Quit.tn](mailto:Support@Quit.tn)**.

---

<p align="center">Built by students, for students. Start your comeback.</p>