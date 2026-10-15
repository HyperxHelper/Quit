import { Coffee, Heart, Repeat, ShieldCheck } from "lucide-react"

import { Button } from "@/components/ui/button"
import Reveal from "@/hooks/reveal"

const CHANNELS = [
  {
    icon: Coffee,
    name: "Ko-fi",
    body: "Buy a coffee — funds our content and tools.",
    href: "https://ko-fi.com/quitnow",
    tag: "one-time",
  },
  {
    icon: Heart,
    name: "PayPal",
    body: "One-time donation, any amount.",
    href: "https://paypal.com",
    tag: "one-time",
  },
  {
    icon: Repeat,
    name: "Patreon",
    body: "Monthly support with rewards.",
    href: "https://patreon.com",
    tag: "monthly",
  },
]

export default function Donate() {
  return (
    <section
      id="donate"
      className="relative border-t border-border bg-grid-paper"
    >
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                §08 — Fund the lab
              </p>
              <h2 className="mt-4 max-w-xl text-4xl leading-[1.02] font-semibold tracking-[-0.02em] md:text-6xl">
                Help us reach the{" "}
                <span className="font-serif-d text-lime-strong font-normal italic">
                  next student.
                </span>
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Quit is a student initiative, free for every student and always
                will be. A small sponsorship keeps the Academy producing and the
                tools running — at any amount, on any platform.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-10 flex items-start gap-3 border border-border bg-card p-5">
              <ShieldCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-lime-strong"
                strokeWidth={1.5}
              />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Every donation is reinvested
                </span>{" "}
                in free, evidence-based content for students. Thank you for
                believing in the fight.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="grid gap-px border border-border bg-border sm:grid-cols-3">
              {CHANNELS.map((channel, i) => (
                <Reveal
                  key={channel.name}
                  delay={i * 90}
                  className="group flex flex-col bg-card p-7 transition-colors hover:bg-primary"
                >
                  <div className="flex items-start justify-between">
                    <channel.icon
                      className="h-6 w-6 text-lime-strong transition-colors group-hover:text-accent-foreground"
                      strokeWidth={1.5}
                    />
                    <span className="font-mono-d text-[9px] tracking-[0.18em] text-muted-foreground uppercase transition-colors group-hover:text-accent-foreground/70">
                      {channel.tag}
                    </span>
                  </div>
                  <h3 className="mt-8 text-lg font-semibold transition-colors group-hover:text-accent-foreground">
                    {channel.name}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-accent-foreground/80">
                    {channel.body}
                  </p>
                  <Button
                    asChild
                    variant="outline"
                    className="mt-6 w-full rounded-none border-border font-mono-d text-[10px] tracking-[0.18em] uppercase group-hover:border-accent-foreground group-hover:bg-transparent group-hover:text-accent-foreground"
                  >
                    <a href={channel.href} target="_blank" rel="noreferrer">
                      Support via {channel.name}
                    </a>
                  </Button>
                </Reveal>
              ))}
            </div>
            <Reveal
              delay={280}
              className="mt-6 flex flex-wrap items-center justify-between gap-4 border border-primary bg-primary px-6 py-5 text-accent-foreground"
            >
              <p className="font-mono-d text-[11px] tracking-[0.18em] uppercase">
                <span className="font-semibold">100%</span> free · no paywall ·
                no ads · no data sales
              </p>
              <span className="font-mono-d text-[10px] tracking-[0.18em] text-accent-foreground/70 uppercase">
                Transparency ledger · Q1 2026
              </span>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
