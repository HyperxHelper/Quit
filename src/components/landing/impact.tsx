import { Quote } from "lucide-react"

import Reveal from "@/hooks/reveal"

const METRICS = [
  { value: "127", label: "students smoke-free for 30+ days" },
  { value: "200+", label: "active participants across 6 countries" },
  { value: "4h", label: "a day reclaimed from doom-scrolling (avg)" },
  { value: "5×", label: "attempts before success — we design for all of them" },
]

const TESTIMONIALS = [
  {
    quote:
      "I tried quitting smoking five times. The streak counters and the money-tracking made this the first time it stuck.",
    name: "Sarra",
    age: 21,
    track: "Quit smoking · 6 months",
  },
  {
    quote:
      "I reclaimed around 4 hours a day. My GPA — and my sleep — finally look like the student I wanted to be.",
    name: "Ahmed",
    age: 19,
    track: "Quit doom-scrolling · 40 days",
  },
  {
    quote:
      "Knowing why I relapsed was life-changing. The science section felt like it was written about me.",
    name: "Nour",
    age: 22,
    track: "Quit cannabis · 1 year",
  },
]

export default function Impact() {
  return (
    <section id="impact" className="relative border-t border-border">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
              §05 — Impact
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[1.02] font-semibold tracking-[-0.02em] md:text-6xl">
              Outcomes,{" "}
              <span className="font-serif-d text-lime-strong font-normal italic">
                not vibes.
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-2 border border-border md:grid-cols-4">
          {METRICS.map((metric, i) => (
            <div
              key={metric.label}
              className={`p-6 md:p-8 ${i > 0 ? "border-l border-border" : ""} ${i >= 2 ? "max-md:border-t max-md:border-border" : ""} ${i === 2 ? "max-md:border-l-0" : ""}`}
            >
              <p className="font-mono-d text-4xl font-semibold text-lime-strong md:text-5xl">
                {metric.value}
              </p>
              <p className="font-mono-d mt-3 text-[10px] leading-relaxed tracking-[0.14em] text-muted-foreground uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </Reveal>

        <div className="mt-6 grid gap-px border border-border bg-border md:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal
              key={testimonial.name}
              delay={i * 100}
              className="flex flex-col bg-card p-8"
            >
              <Quote className="h-5 w-5 text-lime-strong" strokeWidth={1.5} />
              <blockquote className="mt-6 flex-1 text-lg leading-relaxed">
                “{testimonial.quote}”
              </blockquote>
              <div className="mt-8 border-t border-border pt-5">
                <p className="font-semibold">
                  {testimonial.name},{" "}
                  <span className="font-serif-d font-normal italic">
                    {testimonial.age}
                  </span>
                </p>
                <p className="font-mono-d mt-1 text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  {testimonial.track}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
