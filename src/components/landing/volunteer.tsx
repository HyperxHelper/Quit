import { Link } from "react-router-dom"
import { ArrowUpRight, Globe2, HandHeart, Megaphone, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import Reveal from "@/hooks/reveal"

const ROLES = [
  {
    icon: Users,
    title: "Peer support",
    body: "Walk the first weeks with someone who is quitting too — or has already made it.",
  },
  {
    icon: Megaphone,
    title: "Campus outreach",
    body: "Bring Quit to your campus: tabling, workshops, and faculty partnerships.",
  },
  {
    icon: HandHeart,
    title: "Content creation",
    body: "Turn research into zines, reels, and workshops your generation actually reads.",
  },
]

export default function Volunteer() {
  return (
    <section
      id="volunteer"
      className="bg-grid-paper relative border-t border-border"
    >
      <div className="relative mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <Reveal>
              <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
                §07 — Community &amp; NGO route
              </p>
              <h2 className="mt-4 max-w-xl text-4xl leading-[1.02] font-semibold tracking-[-0.02em] md:text-6xl">
                Promote healthy behaviour{" "}
                <span className="font-serif-d text-lime-strong font-normal italic">
                  in your
                </span>{" "}
                community.
              </h2>
              <p className="mt-6 max-w-lg leading-relaxed text-muted-foreground">
                Join the Quit Initiative as a global volunteer. We operate
                across 6 countries — your community could be next. Peer support,
                campus outreach, content creation: pick the role that fits you.
              </p>
            </Reveal>
            <Reveal delay={150} className="mt-10 flex flex-wrap items-center gap-4">
              <Button
                size="lg"
                className="rounded-none bg-primary font-mono-d text-xs tracking-[0.18em] uppercase hover:bg-primary/90"
                asChild
              >
                <Link to="/app/volunteer">
                  Become a volunteer <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="flex items-center gap-3 border border-border bg-card px-4 py-3">
                <Globe2 className="h-4 w-4 text-lime-strong" strokeWidth={1.5} />
                <span className="font-mono-d text-[10px] tracking-[0.16em] text-muted-foreground uppercase">
                  Active cells: 06 countries
                </span>
              </div>
            </Reveal>
            <Reveal delay={250} className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
              {[
                { k: "Status", v: "Pre-NGO collective" },
                { k: "Route", v: "Non-profit filing · 2027" },
                { k: "Model", v: "Open science · zero paywall" },
              ].map((row) => (
                <div key={row.k} className="bg-card p-5">
                  <p className="font-mono-d text-[9px] tracking-[0.2em] text-muted-foreground uppercase">
                    {row.k}
                  </p>
                  <p className="mt-2 text-sm font-semibold">{row.v}</p>
                </div>
              ))}
            </Reveal>
          </div>

          <div className="lg:col-span-6">
            <div className="grid gap-px border border-border bg-border">
              {ROLES.map((role, i) => (
                <Reveal
                  key={role.title}
                  delay={i * 90}
                  className="group flex items-start gap-5 bg-card p-7 transition-colors hover:bg-primary"
                >
                  <role.icon
                    className="mt-1 h-6 w-6 shrink-0 text-lime-strong transition-colors group-hover:text-accent-foreground"
                    strokeWidth={1.5}
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-4">
                      <h3 className="text-lg font-semibold transition-colors group-hover:text-accent-foreground md:text-xl">
                        {role.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent-foreground" />
                    </div>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-accent-foreground/80">
                      {role.body}
                    </p>
                  </div>
                </Reveal>
              ))}
              <Reveal delay={300} className="flex items-center justify-between bg-accent p-7">
                <p className="font-mono-d text-[11px] font-semibold tracking-[0.18em] text-accent-foreground uppercase">
                  Your campus could be cell №07
                </p>
                <ArrowUpRight className="h-4 w-4 text-accent-foreground" />
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
