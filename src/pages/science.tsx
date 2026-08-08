import { BookOpen, ExternalLink, ShieldCheck } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"

interface Paper {
  title: string
  source: string
  year: string
  kind: string
  tags: string[]
  takeaway: string
  link: string
}

const papers: Paper[] = [
  {
    title: "How are habits formed: Modelling habit formation in the real world",
    source: "European Journal of Social Psychology",
    year: "2010",
    kind: "Longitudinal study",
    tags: ["Habit formation", "66-day window", "Repetition"],
    takeaway:
      "96 volunteers repeated a behaviour daily; automaticity reached its plateau at a median 66 days (range 18–254). Missing one day didn't break the habit — which is why Quit counts wins, not guilt.",
    link: "https://doi.org/10.1002/ejsp.674",
  },
  {
    title: "Neurobiology of addiction: A neurocircuitry analysis",
    source: "The Lancet Psychiatry · Koob & Volkow",
    year: "2016",
    kind: "Review",
    tags: ["Dopamine", "Reward", "Brain science"],
    takeaway:
      "Addiction reflects exaggerated incentive salience, reward deficits and compromised self-control across three brain circuits. Understanding it as a brain state — not a moral failure — is the whole Quit premise.",
    link: "https://pubmed.ncbi.nlm.nih.gov/27475769/",
  },
  {
    title: "Surfing the urge: Brief mindfulness-based intervention for college student smokers",
    source: "Psychology of Addictive Behaviors · Bowen & Marlatt",
    year: "2009",
    kind: "Randomized trial",
    tags: ["Urges", "Mindfulness", "Students"],
    takeaway:
      "123 college smokers taught to 'surf' cravings didn't feel fewer urges — they just stopped obeying them, smoking significantly less over 7 days. Most notably: the intervention was brief and self-contained. This is the prototype for Quit's daily 4-minute prompt.",
    link: "https://pubmed.ncbi.nlm.nih.gov/20025372/",
  },
  {
    title: "Mindfulness training for smoking cessation: Results from a randomized controlled trial",
    source: "Drug and Alcohol Dependence · Brewer et al.",
    year: "2011",
    kind: "Randomized controlled trial",
    tags: ["Smoking", "Mindfulness", "Abstinence"],
    takeaway:
      "88 nicotine-dependent adults: mindfulness training roughly doubled abstinence at week 17 versus standard behavioural treatment (31% vs 6%). Non-pharmacological approaches work when they train the brain rather than the will.",
    link: "https://pubmed.ncbi.nlm.nih.gov/21723049/",
  },
  {
    title: "Treating Tobacco Use and Dependence: 2008 Update",
    source: "U.S. Public Health Service · Clinical Practice Guideline",
    year: "2008",
    kind: "Clinical practice guideline",
    tags: ["Smoking", "Guideline", "Evidence-based"],
    takeaway:
      "The highest-level clinical consensus from 8,700+ cited papers: counselling plus medication beats either alone, brief interventions work, and tobacco treatment is highly cost-effective — the empirical backbone of Quit's policy-led design.",
    link: "https://www.ncbi.nlm.nih.gov/books/NBK63952/",
  },
  {
    title: "Interventions for quitting nicotine vaping (living systematic review)",
    source: "Cochrane Database of Systematic Reviews",
    year: "2025",
    kind: "Living systematic review",
    tags: ["Vaping", "Youth", "19–24"],
    takeaway:
      "The most-validated intervention for young people quitting vapes is light text-/app-delivered support (RR 1.32 in 13–24-year-olds). Exactly the format Quit ships: a gentle, repeatable nudge rather than a clinical programme.",
    link: "https://pubmed.ncbi.nlm.nih.gov/39777614/",
  },
  {
    title: "Cognitive-behavioral therapy for Internet gaming disorder: A systematic review and meta-analysis",
    source: "Clinical Psychology & Psychotherapy · Stevens et al.",
    year: "2019",
    kind: "Systematic review & meta-analysis",
    tags: ["Gaming", "CBT", "First-line therapy"],
    takeaway:
      "CBT is the first-line treatment for gaming disorder: large short-term reductions in gaming symptoms (g = 0.92) and depression (g = 0.80). Structured, practical work on cues and cravings — a close cousin of Quit's plan architecture.",
    link: "https://pubmed.ncbi.nlm.nih.gov/30341981/",
  },
  {
    title: "Psychological treatments for excessive gaming: A systematic review and meta-analysis",
    source: "Scientific Reports · Kim, Lee, Lee et al.",
    year: "2022",
    kind: "Network meta-analysis",
    tags: ["Gaming", "CBT", "Mindfulness"],
    takeaway:
      "Psychological interventions beat inactive controls by a large margin (SMD = 1.70); the most effective package combined CBT + mindfulness. Quit's blend of evidence drills and 4-minute mindfulness cues mirrors this head-on.",
    link: "https://pubmed.ncbi.nlm.nih.gov/36443408/",
  },
  {
    title: "Effectiveness of interventions for internet, smartphone, and gaming addictions: An umbrella review and meta-meta-analysis",
    source: "JMIR · 2026",
    year: "2026",
    kind: "Umbrella review",
    tags: ["Screen time", "Smartphone", "Digital addiction"],
    takeaway:
      "66,530 participants across 29 meta-analyses: the average intervention comparing-screen-time programming significantly reduces digital addiction symptoms (SMD = −1.44). Practical-first tools beat willpower — the core of Quit shows a student can actually win this semester.",
    link: "https://pubmed.ncbi.nlm.nih.gov/41813233/",
  },
]

export function SciencePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <BookOpen className="size-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">
            Science library
          </h1>
          <p className="text-sm text-muted-foreground">
            Every Quit protocol links to its peer-reviewed source.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-4">
        {papers.map((paper) => (
          <Card key={paper.title} className="gap-2 rounded-2xl border bg-card p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-1">
                <h3 className="text-base font-semibold leading-snug">
                  {paper.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {paper.source} · {paper.year}
                </p>
              </div>
              <a
                href={paper.link}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 shrink-0 items-center justify-center rounded-lg border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label={`Open ${paper.title}`}
              >
                <ExternalLink className="size-4" />
              </a>
            </div>
            <p className="pt-1 text-sm leading-relaxed text-muted-foreground">
              {paper.takeaway}
            </p>
            <div className="flex flex-wrap gap-2 pt-1">
              {paper.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
        <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">Why sources matter:</span>{" "}
          the science here is why Quit doesn't rely on willpower myths. You get
          protocols tested in clinical settings, translated for a student's
          semester.
        </p>
      </div>
    </div>
  )
}