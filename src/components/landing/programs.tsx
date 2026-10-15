import { useState } from "react"
import {
  ArrowUpRight,
  Candy,
  Cigarette,
  Clock,
  Gamepad2,
  MonitorSmartphone,
  Sprout,
  UtensilsCrossed,
  Wifi,
} from "lucide-react"

import Reveal from "@/hooks/reveal"
import { useScrollToSection } from "@/lib/nav"

const TRACKS = [
  {
    icon: Cigarette,
    name: "Smoking",
    tagline:
      "The flagship track, built on the NHS / PHS cessation evidence base.",
    meta: "clinical-grade",
    difficulty: 3,
  },
  {
    icon: Wifi,
    name: "Vaping",
    tagline:
      "Nicotine reconditioning designed around campus triggers and social cues.",
    meta: "high relapse risk",
    difficulty: 3,
  },
  {
    icon: MonitorSmartphone,
    name: "Doom-scrolling",
    tagline:
      "Reclaim attention with friction design and replacement rituals.",
    meta: "4h/day recovered avg.",
    difficulty: 2,
  },
  {
    icon: Sprout,
    name: "Cannabis",
    tagline: "T-break protocols with sleep and appetite management built in.",
    meta: "structured t-break",
    difficulty: 3,
  },
  {
    icon: UtensilsCrossed,
    name: "Junk food",
    tagline: "Rewire the reward loop around ultra-processed snacking.",
    meta: "habit swap design",
    difficulty: 1,
  },
  {
    icon: Gamepad2,
    name: "Gaming",
    tagline:
      "From compulsion loops to intentional play — with streak-safe rules.",
    meta: "moderation mode",
    difficulty: 2,
  },
  {
    icon: Candy,
    name: "Porn",
    tagline:
      "Shame-free dopamine reconditioning with private, anonymous tracking.",
    meta: "private by default",
    difficulty: 3,
  },
  {
    icon: Clock,
    name: "Procrastination",
    tagline:
      "Implementation intentions and streaks against the deadline spiral.",
    meta: "GPA-friendly",
    difficulty: 1,
  },
]

function Difficulty({ level, active }: { level: number; active: boolean }) {
  return (
    <span className="flex items-center gap-1">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`h-1 w-4 ${n <= level ? (active ? "bg-accent-foreground" : "bg-primary") : active ? "bg-accent-foreground/30" : "bg-ink-line group-hover:bg-border"}`}
        />
      ))}
    </span>
  )
}

export default function Programs() {
  const [active, setActive] = useState(0)
  const scrollToSection = useScrollToSection()
  const selected = TRACKS[active]

  return (
    <section
      id="programs"
      className="bg-grid-paper relative border-y border-border"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
              §03 — Programs
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[1.02] font-semibold tracking-[-0.02em] md:text-6xl">
              Eight tracks.{" "}
              <span className="font-serif-d text-lime-strong font-normal italic">
                One clear target.
              </span>
            </h2>
          </div>
          <p className="font-mono-d max-w-xs text-xs leading-relaxed text-muted-foreground">
            Pick the habit that costs you the most right now. One clear target
            beats five vague ones.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
          {TRACKS.map((track, i) => {
            const isActive = active === i
            return (
              <Reveal
                key={track.name}
                delay={(i % 4) * 70}
                className={`group relative p-6 transition-colors duration-300 ${isActive ? "bg-primary text-accent-foreground" : "cursor-pointer bg-card hover:bg-secondary/60"}`}
              >
                <button
                  type="button"
                  className="absolute inset-0 h-full w-full cursor-pointer"
                  onClick={() => setActive(i)}
                  aria-label={`Select ${track.name} track`}
                />
                <div className="pointer-events-none">
                  <div className="flex items-start justify-between">
                    <track.icon
                      className={`h-6 w-6 transition-colors ${isActive ? "text-accent-foreground" : "text-lime-strong"}`}
                      strokeWidth={1.5}
                    />
                    <span
                      className={`font-mono-d text-[10px] tracking-[0.16em] uppercase ${isActive ? "text-accent-foreground/70" : "text-muted-foreground"}`}
                    >
                      T—{String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-10 text-xl font-semibold tracking-[-0.01em]">
                    {track.name}
                  </h3>
                  <p
                    className={`mt-2 min-h-[3.75rem] text-sm leading-relaxed ${isActive ? "text-accent-foreground/80" : "text-muted-foreground"}`}
                  >
                    {track.tagline}
                  </p>
                  <div
                    className={`mt-6 flex items-center justify-between border-t pt-4 ${isActive ? "border-accent-foreground/25" : "border-border/70"}`}
                  >
                    <span
                      className={`font-mono-d text-[10px] tracking-[0.14em] uppercase ${isActive ? "text-accent-foreground" : "text-muted-foreground"}`}
                    >
                      {track.meta}
                    </span>
                    <Difficulty level={track.difficulty} active={isActive} />
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-primary bg-primary px-6 py-5 text-accent-foreground">
          <div className="flex items-center gap-4">
            <span className="font-mono-d text-[10px] tracking-[0.2em] text-accent-foreground/70 uppercase">
              selected
            </span>
            <p className="text-lg font-semibold md:text-xl">
              {selected.name}{" "}
              <span className="font-serif-d font-normal italic text-accent-foreground/75">
                — your plan starts with a start date, a savings estimate, and
                daily science prompts.
              </span>
            </p>
          </div>
          <button
            type="button"
            onClick={() => scrollToSection("method")}
            className="font-mono-d inline-flex cursor-pointer items-center gap-1.5 text-[11px] tracking-[0.18em] uppercase hover:underline"
          >
            See how it works <ArrowUpRight className="h-3.5 w-3.5" />
          </button>
        </Reveal>
      </div>
    </section>
  )
}
