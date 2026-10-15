import { Brain, CalendarClock, LineChart, RefreshCcw, ShieldCheck } from "lucide-react"

import Reveal from "@/hooks/reveal"

const PILLARS = [
  {
    icon: Brain,
    index: "01",
    title: "Neuroplasticity",
    body: "The brain rewires every time you resist a craving. Each “no” strengthens the prefrontal cortex that makes the next “no” easier.",
    cite: "Prefrontal self-regulation literature",
  },
  {
    icon: CalendarClock,
    index: "02",
    title: "The 21–66 day window",
    body: "Research on habit formation shows automaticity typically lands between 18 and 254 days — we build your baseline around the median and celebrate every milestone.",
    cite: "Lally et al., 2010",
  },
  {
    icon: RefreshCcw,
    index: "03",
    title: "Dopamine redirection",
    body: "Addiction hijacks the dopamine reward loop. Quit plans replace the spike with earned, sustainable reward signals that keep you consistent.",
    cite: "Dopamine & behavioural addiction research",
  },
  {
    icon: LineChart,
    index: "04",
    title: "Measured progress",
    body: "What gets measured gets managed. Streaks, savings and health metrics keep your wins visible — and your identity as someone who quits.",
    cite: "Self-monitoring behaviour change studies",
  },
]

const INDEX = [
  { k: "Sources cited", v: "12 peer-reviewed" },
  { k: "Protocols live", v: "8 tracks" },
  { k: "Data policy", v: "Anonymous by default" },
  { k: "Review cycle", v: "Semesterly" },
]

export default function Pillars() {
  return (
    <section id="science" className="relative">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
              §01 — The science
            </p>
            <h2 className="mt-4 max-w-md text-4xl leading-[1.02] font-semibold tracking-[-0.02em] md:text-5xl">
              Willpower is a muscle.{" "}
              <span className="font-serif-d text-lime-strong font-normal italic">
                Train it with evidence.
              </span>
            </h2>
            <p className="mt-6 max-w-md leading-relaxed text-muted-foreground">
              Every plan on Quit maps to research published in peer-reviewed
              journals — then translated into tools a student can actually use
              this semester. No vague wellness claims. Just the journals and
              indexes that carry the evidence.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-px border border-border bg-border">
              {INDEX.map((row) => (
                <div key={row.k} className="bg-card p-4">
                  <p className="font-mono-d text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    {row.k}
                  </p>
                  <p className="mt-1.5 text-sm font-semibold">{row.v}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-start gap-3 border border-border bg-card p-4">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-lime-strong"
                strokeWidth={1.5}
              />
              <p className="font-mono-d text-[10px] leading-relaxed tracking-[0.14em] text-muted-foreground uppercase">
                Citations on every protocol · replicated, not recycled
              </p>
            </div>
          </Reveal>

          <div className="grid gap-px border border-border bg-border sm:grid-cols-2 lg:col-span-7">
            {PILLARS.map((pillar, i) => (
              <Reveal
                as="div"
                key={pillar.index}
                delay={i * 90}
                className="group relative bg-card p-7 transition-colors duration-300 hover:bg-primary"
              >
                <div className="flex items-start justify-between">
                  <pillar.icon
                    className="h-5 w-5 text-lime-strong transition-colors group-hover:text-accent-foreground"
                    strokeWidth={1.5}
                  />
                  <span className="font-mono-d text-xs text-muted-foreground transition-colors group-hover:text-accent-foreground/70">
                    {pillar.index}
                  </span>
                </div>
                <h3 className="mt-8 text-lg leading-snug font-semibold transition-colors group-hover:text-accent-foreground">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-accent-foreground/80">
                  {pillar.body}
                </p>
                <p className="font-mono-d mt-5 text-[10px] tracking-[0.14em] text-muted-foreground/80 uppercase transition-colors group-hover:text-accent-foreground/70">
                  [ {pillar.cite} ]
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
