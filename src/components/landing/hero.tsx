import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { ArrowDown, ArrowUpRight, Flame, Minus, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import Reveal from "@/hooks/reveal"
import { useAuth } from "@/lib/auth"

const VIDEO_ID = "OmzrJDHXIHk"
const VIDEO_TITLE = "Introducing Quit Lab : empower research and start your comeback!"
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`
const EMBED_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`

function useCountUp(target: number, duration = 1600, start = true) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    let raf = 0
    const t0 = performance.now()
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1)
      setValue(Math.round(target * (1 - Math.pow(1 - p, 3))))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [target, duration, start])
  return value
}

function StreakCard() {
  const [streak, setStreak] = useState(34)
  const money = useCountUp(streak * 1.35, 1200)
  return (
    <div className="animate-float-soft relative border border-ink-line bg-ink-2/80 p-6 backdrop-blur-sm">
      <div className="flex items-center justify-between">
        <span className="font-mono-d text-[10px] tracking-[0.2em] text-ink-muted uppercase">
          Live streak · Participant №0417
        </span>
        <span className="font-mono-d flex items-center gap-1.5 text-[10px] tracking-[0.2em] text-primary uppercase">
          <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
          tracking
        </span>
      </div>
      <div className="mt-6 flex items-end justify-between gap-6">
        <div>
          <div className="flex items-baseline gap-2">
            <Flame className="mb-1 h-5 w-5 text-primary" />
            <span className="font-mono-d text-6xl leading-none font-semibold text-ink-fg tabular-nums">
              {String(streak).padStart(2, "0")}
            </span>
            <span className="font-mono-d text-xs tracking-[0.18em] text-ink-muted uppercase">
              days
            </span>
          </div>
          <p className="font-mono-d mt-3 text-xs text-ink-muted">
            <span className="text-primary">${money.toFixed(2)}</span> never spent
            · craving resisted today
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={() => setStreak((s) => s + 1)}
            className="flex h-10 w-10 cursor-pointer items-center justify-center border border-ink-line text-ink-fg transition-colors hover:border-primary hover:text-primary"
            aria-label="Add a day"
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={() => setStreak((s) => Math.max(1, s - 1))}
            className="flex h-10 w-10 cursor-pointer items-center justify-center border border-ink-line text-ink-muted transition-colors hover:border-primary hover:text-primary"
            aria-label="Remove a day"
          >
            <Minus className="h-4 w-4" />
          </button>
        </div>
      </div>
      <div className="mt-6 flex h-14 items-end gap-1">
        {[8, 10, 7, 12, 9, 13, 11, 14, 10, 12, 13, 12, 14, 14].map((h, i) => (
          <div
            key={i}
            className={`flex-1 ${i === 13 ? "bg-primary" : "bg-ink-line"}`}
            style={{ height: `${(h / 14) * 100}%` }}
          />
        ))}
      </div>
      <div className="mt-2 flex justify-between font-mono-d text-[9px] tracking-[0.16em] text-ink-muted uppercase">
        <span>D−14</span>
        <span>resistance index</span>
        <span>today</span>
      </div>
    </div>
  )
}

function VideoSlot() {
  return (
    <div className="group relative aspect-video w-full overflow-hidden border border-ink-line bg-ink-2">
      <iframe
        className="absolute inset-0 h-full w-full"
        src={EMBED_SRC}
        title={VIDEO_TITLE}
        loading="lazy"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
      <span className="pointer-events-none absolute top-4 left-4 z-10 flex items-center gap-2 border border-primary/40 bg-ink/85 px-3 py-1.5 font-mono-d text-[10px] tracking-[0.22em] text-primary uppercase backdrop-blur">
        <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
        Now playing · Quit Lab intro
      </span>
      <a
        href={VIDEO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-4 right-4 z-10 border border-ink-line bg-ink/85 px-3 py-1.5 font-mono-d text-[10px] tracking-[0.16em] text-ink-muted uppercase backdrop-blur transition-colors hover:border-primary hover:text-primary"
      >
        Watch on YouTube ↗
      </a>
    </div>
  )
}

const STATS = [
  { value: "21", unit: "days", label: "to rewire a habit loop" },
  { value: "66", unit: "days", label: "to full automaticity" },
  { value: "100", unit: "%", label: "free for every student" },
  { value: "06", unit: "countries", label: "with active volunteer cells" },
]

export default function Hero() {
  const { user } = useAuth()

  return (
    <section id="top" className="bg-ink relative overflow-hidden text-ink-fg">
      <div className="bg-grid absolute inset-0 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,230,53,0.07),transparent_55%)]" />
      <div className="relative mx-auto max-w-[1400px] px-5 pt-28 pb-0 md:px-10 md:pt-36">
        <Reveal className="flex flex-wrap items-center justify-between gap-3 border-b border-ink-line pb-5">
          <p className="font-mono-d text-[10px] tracking-[0.22em] text-ink-muted uppercase">
            Initiative №01 · Student-led research collective · Pre-NGO
          </p>
          <p className="font-mono-d flex items-center gap-2 text-[10px] tracking-[0.22em] text-ink-muted uppercase">
            <span className="h-1.5 w-1.5 animate-blink rounded-full bg-primary" />
            200+ students building better habits
          </p>
        </Reveal>

        <div className="grid gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-8">
            <Reveal delay={80}>
              <h1 className="max-w-4xl text-[13.5vw] leading-[0.94] font-semibold tracking-[-0.03em] sm:text-7xl md:text-8xl">
                Quit the{" "}
                <span className="font-serif-d text-primary font-normal italic">
                  habit.
                </span>
                <br />
                Keep the{" "}
                <span className="font-serif-d font-normal italic">person.</span>
              </h1>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-ink-muted md:text-lg">
                Quit is a science-backed initiative — and an open R&amp;D lab —
                by students, for students. Quit smoking, quit doom-scrolling,
                quit anything that holds you back: with research-proven plans
                and a streak that keeps you accountable.
              </p>
            </Reveal>
            <Reveal delay={260} className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-none bg-primary font-mono-d text-xs tracking-[0.18em] uppercase hover:bg-primary/90"
                asChild
              >
                <Link to={user ? "/app" : "/signup"}>
                  {user ? "Open your dashboard" : "Start your comeback"}{" "}
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-none border-ink-line bg-transparent font-mono-d text-xs tracking-[0.18em] text-ink-fg uppercase hover:border-primary hover:bg-transparent hover:text-primary"
                asChild
              >
                <Link to="/research">Read the research</Link>
              </Button>
            </Reveal>
            <Reveal
              delay={320}
              className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink-line pt-5"
            >
              <span className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                <span className="text-primary">127</span> students smoke-free
                30+ days
              </span>
              <span className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                NHS · PHS evidence base
              </span>
              <span className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                Peer-reviewed only
              </span>
            </Reveal>
          </div>
          <Reveal delay={320} className="lg:col-span-4">
            <StreakCard />
          </Reveal>
        </div>

        <div className="grid gap-6 pb-14 lg:grid-cols-12">
          <Reveal delay={120} className="lg:col-span-7">
            <VideoSlot />
          </Reveal>
          <Reveal
            delay={200}
            className="flex flex-col justify-between border border-ink-line bg-ink-2/60 p-6 lg:col-span-5"
          >
            <div>
              <span className="font-mono-d text-[10px] tracking-[0.22em] text-primary uppercase">
                Field report · №0417
              </span>
              <blockquote className="mt-5 text-xl leading-snug font-medium text-ink-fg md:text-2xl">
                “I quit doom-scrolling and got my{" "}
                <span className="font-serif-d text-primary font-normal italic">
                  GPA
                </span>{" "}
                back.”
              </blockquote>
            </div>
            <div className="mt-8 flex items-center justify-between border-t border-ink-line pt-5">
              <p className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                Ahmed, 3rd year
              </p>
              <p className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                cohort · 04
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal className="grid grid-cols-2 border-t border-ink-line md:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className={`py-8 pr-6 ${i > 0 ? "md:border-l md:border-ink-line md:pl-8" : ""} ${i % 2 === 1 ? "border-l border-ink-line pl-6 md:pl-8" : ""}`}
            >
              <p className="font-mono-d text-4xl font-semibold text-ink-fg md:text-5xl">
                {s.value}
                <span className="ml-2 text-sm font-normal text-primary">
                  {s.unit}
                </span>
              </p>
              <p className="font-mono-d mt-2 text-[10px] tracking-[0.16em] text-ink-muted uppercase">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>

        <div className="flex justify-center py-6">
          <span className="font-mono-d flex items-center gap-2 text-[10px] tracking-[0.22em] text-ink-muted uppercase">
            <ArrowDown className="h-3.5 w-3.5 animate-bounce" /> scroll ·
            evidence below
          </span>
        </div>
      </div>
    </section>
  )
}
