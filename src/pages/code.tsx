import {
  BookMarked,
  Compass,
  HeartHandshake,
  ShieldCheck,
  Sparkles,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { PublicNavbar } from "@/components/layout/public-navbar"
import { Footer } from "@/components/layout/footer"

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
        <section className="border-b">
          <div className="mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6">
            <Badge variant="secondary" className="items-center gap-1.5">
              <BookMarked className="size-3" />
              The Quit constitution
            </Badge>
            <h1 className="font-display mt-6 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Our Code
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              The constitution of Quit — a living guide to how we empower,
              protect and care about the health of others. Built to stay simple,
              and to grow with the initiative.
            </p>
          </div>
        </section>

        <section className="mx-auto w-full max-w-4xl px-4 pb-24 pt-12 sm:px-6">
          <div className="space-y-6">
            {articles.map((article) => (
              <Card key={article.number} className="gap-0 py-6">
                <CardHeader className="px-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <article.icon className="size-5" strokeWidth={2} />
                    </div>
                    <div className="font-display text-2xl font-extrabold text-primary">
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

          <div className="mt-10 rounded-2xl border-t-2 border-primary/30 bg-primary/5 p-6 text-center">
            <p className="text-sm italic text-muted-foreground">
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