import { ArrowUpRight, BookOpen, FlaskConical, GitBranch, Microscope } from "lucide-react"

import Reveal from "@/hooks/reveal"
import { useScrollToSection } from "@/lib/nav"

const PIPELINE = [
  {
    step: "Question",
    body: "A real student relapse pattern becomes a research question.",
    status: "continuous intake",
  },
  {
    step: "Protocol",
    body: "We design a cessation or reconditioning protocol from the literature.",
    status: "8 protocols live",
  },
  {
    step: "Pilot",
    body: "Student cohorts run the plan; streak and relapse data come back.",
    status: "200+ participants",
  },
  {
    step: "Publish",
    body: "Findings ship in the open — protocols cite their sources, you can too.",
    status: "open access",
  },
]

const PAPERS = [
  {
    tag: "Clinical guideline",
    title: "Smoking cessation clinical practice",
    source: "U.S. Public Health Service",
    ref: "PHS · NHS evidence base",
    note: "Backbone of our smoking cessation track.",
  },
  {
    tag: "Habit formation",
    title: "How habits rewire the basal ganglia",
    source: "Duke University habit research",
    ref: "lab replication cited",
    note: "Grounds the “craving is training data” pillar.",
  },
  {
    tag: "Neuroscience",
    title: "Dopamine and behavioural addiction",
    source: "Nature Reviews · Neuroscience",
    ref: "peer-reviewed review",
    note: "Basis of our reward-replacement design.",
  },
  {
    tag: "Habit formation",
    title: "How are habits formed: Modelling habit formation in the real world",
    source: "Lally et al. · EJSP · 2010",
    ref: "DOI 10.1002/ejsp.674",
    note: "Source of the 18–254 day automaticity range.",
  },
]

export default function ResearchLab() {
  const scrollToSection = useScrollToSection()

  return (
    <section
      id="research"
      className="bg-ink relative overflow-hidden text-ink-fg"
    >
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <Reveal className="flex flex-wrap items-end justify-between gap-6 border-b border-ink-line pb-10">
          <div>
            <p className="font-mono-d text-[10px] tracking-[0.22em] text-ink-muted uppercase">
              §02 — The R&amp;D Lab
            </p>
            <h2 className="mt-4 max-w-2xl text-4xl leading-[1.02] font-semibold tracking-[-0.02em] md:text-6xl">
              We empower science at{" "}
              <span className="font-serif-d text-primary font-normal italic">
                Quit Initiative.
              </span>
            </h2>
          </div>
          <p className="font-mono-d max-w-sm text-xs leading-relaxed text-ink-muted">
            The lab is the engine of the initiative: every protocol we ship
            links back to rigorous, peer-reviewed research — and every cohort we
            run feeds the next question.
          </p>
        </Reveal>

        <div className="grid gap-12 pt-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal className="flex items-center gap-3">
              <GitBranch className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <h3 className="font-mono-d text-xs tracking-[0.22em] text-ink-muted uppercase">
                Research pipeline
              </h3>
            </Reveal>
            <div className="mt-8">
              {PIPELINE.map((item, i) => (
                <Reveal
                  key={item.step}
                  delay={i * 90}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {i < PIPELINE.length - 1 && (
                    <span className="absolute top-8 left-[13px] h-[calc(100%-2rem)] w-px bg-ink-line" />
                  )}
                  <span className="font-mono-d relative z-10 flex h-7 w-7 shrink-0 items-center justify-center border border-primary/60 bg-ink text-[10px] text-primary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1 border-b border-ink-line pb-6 last:border-0">
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-lg font-semibold">{item.step}</h4>
                      <span className="font-mono-d text-[10px] tracking-[0.16em] text-primary uppercase">
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                      {item.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal
              delay={200}
              className="mt-10 flex items-start gap-3 border border-ink-line bg-ink-2/60 p-5"
            >
              <Microscope
                className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                strokeWidth={1.5}
              />
              <p className="text-sm leading-relaxed text-ink-muted">
                <span className="text-ink-fg">Cite us, then cite them.</span>{" "}
                Our protocols cite the original studies — and we publish our own
                cohort notes so campuses can replicate what works.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal className="flex items-center gap-3">
              <BookOpen className="h-4 w-4 text-primary" strokeWidth={1.5} />
              <h3 className="font-mono-d text-xs tracking-[0.22em] text-ink-muted uppercase">
                Read the papers behind the plan
              </h3>
            </Reveal>
            <div className="mt-8 divide-y divide-ink-line border-y border-ink-line">
              {PAPERS.map((paper, i) => (
                <Reveal
                  key={paper.title}
                  delay={i * 70}
                  className="group grid gap-3 py-6 transition-colors sm:grid-cols-12 sm:gap-6"
                >
                  <span className="font-mono-d text-[10px] tracking-[0.18em] text-primary uppercase sm:col-span-2">
                    [{paper.tag}]
                  </span>
                  <div className="sm:col-span-8">
                    <h4 className="text-base leading-snug font-semibold transition-colors group-hover:text-primary md:text-lg">
                      {paper.title}
                    </h4>
                    <p className="font-mono-d mt-1.5 text-[11px] text-ink-muted">
                      {paper.source}
                    </p>
                    <p className="mt-2 text-sm text-ink-muted/90">
                      {paper.note}
                    </p>
                  </div>
                  <div className="flex items-start justify-between gap-2 sm:col-span-2 sm:flex-col sm:items-end">
                    <span className="font-mono-d text-[10px] tracking-[0.14em] text-ink-muted uppercase">
                      {paper.ref}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-ink-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal
              delay={250}
              className="mt-8 flex flex-wrap items-center justify-between gap-4 border border-ink-line p-5"
            >
              <div className="flex items-center gap-3">
                <FlaskConical
                  className="h-4 w-4 shrink-0 text-primary"
                  strokeWidth={1.5}
                />
                <p className="font-mono-d text-[11px] tracking-[0.16em] text-ink-muted uppercase">
                  Free for every student. Anonymous if you want. Science-backed
                  always.
                </p>
              </div>
              <button
                type="button"
                onClick={() => scrollToSection("donate")}
                className="font-mono-d cursor-pointer text-[11px] tracking-[0.16em] text-primary uppercase underline-offset-4 hover:underline"
              >
                Run a cohort →
              </button>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
