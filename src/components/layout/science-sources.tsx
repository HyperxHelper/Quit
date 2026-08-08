import {
  BookOpenCheck,
  Brain,
  Database,
  Globe,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"

const sources = [
  {
    name: "ResearchGate",
    href: "https://www.researchgate.net",
    icon: Database,
  },
  {
    name: "Nature",
    href: "https://www.nature.com",
    icon: Brain,
  },
  {
    name: "PubMed",
    href: "https://pubmed.ncbi.nlm.nih.gov",
    icon: BookOpenCheck,
  },
  {
    name: "NIH",
    href: "https://www.nih.gov",
    icon: ShieldCheck,
  },
  {
    name: "Science",
    href: "https://www.science.org",
    icon: Globe,
  },
  {
    name: "The Lancet",
    href: "https://www.thelancet.com",
    icon: HeartPulse,
  },
  {
    name: "Cochrane",
    href: "https://www.cochrane.org",
    icon: Stethoscope,
  },
  {
    name: "Google Scholar",
    href: "https://scholar.google.com",
    icon: Database,
  },
]

export function ScienceSources() {
  return (
    <section id="source-journal" className="scroll-mt-24 border-t bg-muted/40">
      <div className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary">Our source library</Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            We empower science at Quit Initiative
          </h2>
          <p className="mt-4 text-muted-foreground">
            Every protocol we ship links back to rigorous, peer-reviewed
            research. No vague wellness claims — just the journals and indexes
            that carry the evidence.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {sources.map((source) => (
            <a
              key={source.name}
              href={source.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 rounded-2xl border border-zinc-200 bg-card px-5 py-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 dark:border-zinc-800"
            >
              <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110">
                <source.icon className="size-5" strokeWidth={2} />
              </div>
              <span className="text-sm font-semibold">{source.name}</span>
            </a>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Cite us: our protocols cite the original studies — you can, too.
        </p>
      </div>
    </section>
  )
}