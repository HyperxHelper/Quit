import { Coffee, Gift, HeartHandshake, Hand } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const platforms = [
  {
    name: "Ko-fi",
    note: "Buy a coffee — funds our content and tools.",
    href: "https://ko-fi.com/quitnow",
    icon: Coffee,
    primary: true,
  },
  {
    name: "PayPal",
    note: "One-time donation, any amount.",
    href: "#",
    icon: Hand,
  },
  {
    name: "Patreon",
    note: "Monthly support with rewards.",
    href: "#",
    icon: HeartHandshake,
  },
]

export function SponsorSection() {
  return (
    <section id="sponsor" className="border-t bg-muted/40">
      <div className="mx-auto w-full max-w-5xl px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="secondary"
            className="items-center gap-1.5"
          >
            <Hand className="size-3" />
            Sponsor Quit
          </Badge>
          <h2 className="font-display mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Help us reach the next student.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Quit is a student initiative, free for every student and always
            will be. A small sponsorship keeps the Academy producing and the
            tools running — at any amount, on any platform.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {platforms.map((platform) => (
            <Card
              key={platform.name}
              className="group gap-4 rounded-2xl border-zinc-200 bg-card py-6 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 dark:border-zinc-800"
            >
              <CardHeader className="items-center gap-4 px-6">
                <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 ease-out group-hover:scale-110">
                  <platform.icon className="size-6" strokeWidth={2} />
                </div>
                <CardTitle className="text-base">{platform.name}</CardTitle>
                <CardDescription>{platform.note}</CardDescription>
              </CardHeader>
              <CardContent className="px-6">
                <Button
                  asChild
                  variant={platform.primary ? "default" : "outline"}
                  className="w-full gap-1.5"
                >
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Gift className="size-4" /> Sponsor on {platform.name}
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Every donation is reinvested in free, evidence-based content for
          students. Thank you for believing in the fight.
        </p>
      </div>
    </section>
  )
}