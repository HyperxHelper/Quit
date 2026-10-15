import { RotateCcw, Ruler, ShieldCheck } from "lucide-react"

import Reveal from "@/hooks/reveal"

const PRINCIPLES = [
  { icon: RotateCcw, label: "Never quit quitting" },
  { icon: Ruler, label: "Track, don't judge" },
  { icon: ShieldCheck, label: "Science over shame" },
]

export default function Philosophy() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-primary text-accent-foreground">
      <div className="bg-grid absolute inset-0 opacity-20" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-center justify-between gap-4 border-b border-accent-foreground/25 pb-6">
          <p className="font-mono-d text-[10px] tracking-[0.22em] uppercase">
            §06 — Lab doctrine
          </p>
          <p className="font-mono-d text-[10px] tracking-[0.22em] text-accent-foreground/70 uppercase">
            Pre-NGO collective · filing 2027
          </p>
        </Reveal>
        <Reveal delay={100}>
          <blockquote className="mt-10 max-w-4xl text-3xl leading-[1.12] font-semibold tracking-[-0.02em] md:text-5xl">
            “A failure to quit is not a failure of the{" "}
            <span className="font-serif-d font-normal italic">person.</span>”
          </blockquote>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-8 max-w-2xl leading-relaxed text-accent-foreground/80">
            Relapse is a data point, not a verdict. Every study shows most
            quitters succeed after multiple attempts — our tools assume you will
            need them, and are designed for it.
          </p>
        </Reveal>
        <Reveal
          delay={300}
          className="mt-12 grid gap-px border border-ink/20 bg-ink/20 sm:grid-cols-3"
        >
          {PRINCIPLES.map((principle) => (
            <div
              key={principle.label}
              className="flex items-center gap-4 bg-primary p-6"
            >
              <principle.icon
                className="h-5 w-5 shrink-0 text-ink"
                strokeWidth={1.5}
              />
              <span className="font-mono-d text-xs font-semibold tracking-[0.18em] uppercase">
                {principle.label}
              </span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
