import {
  BookMarked,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PublicNavbar } from "@/components/layout/public-navbar"
import { Footer } from "@/components/layout/footer"
import Reveal from "@/hooks/reveal"

const articles = [
  {
    number: "I",
    icon: Compass,
    title: "We serve the student, first.",
    text: "Every feature, every piece of content and every product decision exists to help a student live free of addiction. If it doesn't serve that mission, it doesn't ship.",
  },
  {
    number: "II",
    icon: ShieldCheck,
    title: "Health over optics.",
    text: "We defend students' physical and mental health before appearance, engagement or reach. No shame, no judgment, no moralising — only evidence and support.",
  },
  {
    number: "III",
    icon: HeartHandshake,
    title: "Care is our default.",
    text: "We empower and care for others' health. Kindness is not a feature toggle; it is the baseline every conversation, comment and design starts from.",
  },
  {
    number: "IV",
    icon: Sparkles,
    title: "Science with humility.",
    text: "We follow peer-reviewed research, and we stay honest about what we do not yet know. We translate evidence into tools a student can actually use this semester.",
  },
  {
    number: "V",
    icon: BookMarked,
    title: "We never quit quitting.",
    text: "Relapse is a data point, not a verdict. Our tools are designed for people who will need them more than once — and who still deserve to succeed.",
  },
]

export function CodePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <PublicNavbar />
      <main className="flex-1">
        <section className="bg-ink relative overflow-hidden border-b border-ink-line text-ink-fg">
          <div className="bg-grid absolute inset-0 opacity-50" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(163,230,53,0.08),transparent_60%)]" />
          <div className="relative mx-auto w-full max-w-[1400px] px-5 py-20 md:px-10 md:py-24">
            <Reveal>
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-primary uppercase">
                § — The Quit constitution
              </p>
              <h1 className="mt-5 max-w-4xl text-5xl leading-[0.95] font-semibold tracking-[-0.03em] md:text-7xl">
                Our{" "}
                <span className="font-serif-d font-normal italic">Code.</span>
              </h1>
              <p className="mt-6 max-w-2xl leading-relaxed text-ink-muted md:text-lg">
                The constitution of Quit — a living guide to how we empower,
                protect and care about the health of others. Built to stay
                simple, and to grow with the initiative.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-ink-line pt-5">
                <span className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                  Five articles
                </span>
                <span className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                  Living document
                </span>
                <span className="font-mono-d text-[10px] tracking-[0.18em] text-ink-muted uppercase">
                  Care first
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-4 pb-24 pt-12 sm:px-6">
          <div className="space-y-6">
            {articles.map((article) => (
              <Card key={article.number} className="gap-0 py-6">
                <CardHeader className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center border border-border bg-primary text-accent-foreground">
                      <article.icon className="size-5" strokeWidth={2} />
                    </div>
                    <div className="font-mono-d text-2xl font-semibold text-lime-strong">
                      {article.number}
                    </div>
                  </div>
                  <CardTitle className="pt-3 text-lg leading-snug">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="px-6">
                  <CardDescription className="leading-relaxed">
                    {article.text}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-10 border border-primary/40 bg-primary/10 p-6 text-center">
            <p className="font-serif-d text-base italic text-muted-foreground">
              This constitution is a living document. As the initiative grows,
              so will the commitments it makes — always in service of one
              principle: care.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}