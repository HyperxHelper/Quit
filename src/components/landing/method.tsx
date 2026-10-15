import { Crosshair, FileText, TrendingUp } from "lucide-react"

import Reveal from "@/hooks/reveal"

const STEPS = [
  {
    icon: Crosshair,
    index: "01",
    title: "Pick one thing to quit",
    body: "Choose the habit that costs you the most right now. One clear target beats five vague ones — focus is the first intervention.",
  },
  {
    icon: FileText,
    index: "02",
    title: "Get your science-backed plan",
    body: "Your plan sets a start date, a savings estimate and daily science prompts engineered for relapse resistance.",
  },
  {
    icon: TrendingUp,
    index: "03",
    title: "Stack days, not excuses",
    body: "Track your streak, log how you feel, and watch the money you never spent pile up into reward you actually earned.",
  },
]

export default function Method() {
  return (
    <section id="method" className="relative">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
              §04 — Method
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[1.02] font-semibold tracking-[-0.02em] md:text-6xl">
              Three steps.{" "}
              <span className="font-serif-d text-lime-strong font-normal italic">
                Zero guesswork.
              </span>
            </h2>
          </div>
          <p className="font-mono-d max-w-xs text-xs leading-relaxed text-muted-foreground">
            The whole system is designed to be started in under five minutes —
            and kept for a semester.
          </p>
        </Reveal>

        <div className="grid gap-px border border-border bg-border md:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 110} className="group relative bg-card p-8">
              <div className="flex items-start justify-between">
                <step.icon className="h-6 w-6 text-lime-strong" strokeWidth={1.5} />
                <span className="font-mono-d text-6xl leading-none font-semibold text-border transition-colors duration-300 group-hover:text-lime-strong">
                  {step.index}
                </span>
              </div>
              <h3 className="mt-12 text-xl leading-snug font-semibold md:text-2xl">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
              <div className="mt-8 h-px w-full bg-border">
                <div className="h-px w-0 bg-primary transition-all duration-700 group-hover:w-full" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
