import { useState } from "react"
import { Link } from "react-router-dom"
import {
  ArrowRight,
  Globe,
  GraduationCap,
  Heart,
  HeartHandshake,
  Megaphone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react"
import { toast } from "sonner"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { useAuth } from "@/lib/auth"
import { cn } from "@/lib/utils"

const roles = [
  {
    icon: HeartHandshake,
    title: "Peer Support Volunteer",
    desc: "Be the first person a fellow student talks to. Listen, empathise and guide them toward the nurse on the Quit Discord.",
    tags: ["Discord", "Chat", "Empathy"],
  },
  {
    icon: Megaphone,
    title: "Campus Ambassador",
    desc: "Spread the word on your campus. Organise info sessions, share Quit resources and help students discover the science behind quitting.",
    tags: ["On-campus", "Events", "Outreach"],
  },
  {
    icon: GraduationCap,
    title: "Academy Contributor",
    desc: "Help produce educational content — videos, articles and audio guides that teach students how to beat cravings using evidence-based methods.",
    tags: ["Content", "Creative", "Research"],
  },
]

const regions = [
  { label: "Tunisia", flag: "🇹🇳", volunteers: "120+" },
  { label: "Morocco", flag: "🇲🇦", volunteers: "45+" },
  { label: "France", flag: "🇫🇷", volunteers: "35+" },
  { label: "Canada", flag: "🇨🇦", volunteers: "20+" },
  { label: "Germany", flag: "🇩🇪", volunteers: "15+" },
  { label: "United Kingdom", flag: "🇬🇧", volunteers: "12+" },
]

export function VolunteerPage() {
  const { user } = useAuth()
  const [name, setName] = useState(user?.name ?? "")
  const [email, setEmail] = useState(user?.email ?? "")
  const [role, setRole] = useState("")
  const [motivation, setMotivation] = useState("")
  const [country, setCountry] = useState("")
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!name.trim() || !email.trim() || !role || !country) {
      toast.error("Please fill in all required fields.")
      return
    }
    setSubmitting(true)
    // Simulate submission — localStorage-backed for now
    let applications: unknown[] = []
    try {
      applications = JSON.parse(
        localStorage.getItem("quit.volunteer-applications") ?? "[]"
      )
      if (!Array.isArray(applications)) applications = []
    } catch {
      applications = []
    }
    applications.push({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      role,
      country,
      motivation: motivation.trim(),
      createdAt: new Date().toISOString(),
    })
    localStorage.setItem(
      "quit.volunteer-applications",
      JSON.stringify(applications)
    )
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
      toast.success("Application submitted — welcome to the Quit Initiative!")
    }, 700)
  }

  return (
    <div className="w-full min-w-0 px-4 pb-12 pt-6 sm:px-6 sm:pb-16 sm:pt-8">
      {/* Header */}
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">
          Quit Initiative · Global Volunteer Program
        </p>
        <h1 className="font-display mt-1 text-2xl font-bold tracking-tight sm:text-3xl">
          Promote Healthy behaviour in your community
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Quit is a global student-led movement. Volunteering means you become
          part of the infrastructure that helps students quit addiction — on
          your campus, in your city, and across the world.
        </p>
      </header>

      {/* Hero card */}
      <Card className="relative mt-6 overflow-hidden rounded-2xl border border-primary/20 bg-primary/5 shadow-sm">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-24 h-48 bg-gradient-to-b from-primary/10 to-transparent"
        />
        <div className="relative flex flex-col gap-4 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-start gap-3">
            <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <Globe className="size-6" />
            </span>
            <div>
              <h2 className="text-base font-semibold">
                A global network of students who quit — and help others do the
                same.
              </h2>
              <p className="mt-1 max-w-xl text-sm text-muted-foreground">
                Volunteers are the backbone of Quit. Every campus ambassador,
                every peer supporter, every content contributor makes the next
                student's quit attempt more likely to succeed. Join the
                movement — it starts with one application.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2 text-xs font-medium text-foreground/80 lg:justify-end">
              <span className="relative flex size-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Active in 6 countries
            </div>
            <Button
              size="lg"
              className="h-12 w-full gap-2 rounded-xl sm:px-6 lg:w-auto"
              asChild
            >
              <a href="#apply">
                Apply now <ArrowRight className="size-4" />
              </a>
            </Button>
          </div>
        </div>
      </Card>

      {/* Global presence */}
      <div className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight">
              Where we operate
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              The Quit Initiative is present across continents. Volunteering is
              remote-first, with on-campus meetups where possible.
            </p>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {regions.map((region) => (
            <Card key={region.label} className="gap-2 p-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{region.flag}</span>
                <div>
                  <div className="text-sm font-semibold">{region.label}</div>
                  <div className="text-xs text-muted-foreground">
                    {region.volunteers} active volunteers
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Roles */}
      <SectionLabel
        title="Volunteer roles"
        sub="Choose the role that fits your skills and availability. You can switch roles or contribute to multiple areas."
        className="mt-8"
      />
      <div className="mt-3 grid gap-3 sm:grid-cols-3">
        {roles.map((r) => (
          <Card
            key={r.title}
            className={cn(
              "gap-3 p-5 transition-colors",
              role === r.title
                ? "border-primary bg-primary/5 ring-2 ring-primary/30"
                : "bg-card"
            )}
          >
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
              <r.icon className="size-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold">{r.title}</h3>
            <p className="text-sm text-muted-foreground">{r.desc}</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {r.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-[11px]">
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>

      {/* Impact stats */}
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <StatCard
          icon={Users}
          value="247+"
          label="Active volunteers globally"
          sub="Across 6 countries and growing"
        />
        <StatCard
          icon={Heart}
          value="1,200+"
          label="Students reached"
          sub="Through campus outreach and Discord"
        />
        <StatCard
          icon={ShieldCheck}
          value="100%"
          label="Free, always"
          sub="Volunteering costs nothing — your time is the contribution"
        />
      </div>

      {/* Application form */}
      <div id="apply" className="mt-10 scroll-mt-24">
        <SectionLabel
          title="Apply to volunteer"
          sub="Fill out the form below. We review applications within 48 hours and reach out via email."
          className="mb-3"
        />

        {submitted ? (
          <Card className="rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center shadow-sm">
            <div className="mx-auto flex size-16 items-center justify-center rounded-2xl bg-primary/10">
              <Sparkles className="size-8 text-primary" />
            </div>
            <h2 className="font-display mt-4 text-xl font-bold tracking-tight">
              Application received.
            </h2>
            <p className="mx-auto mt-2 max-w-md text-sm text-muted-foreground">
              Thank you for stepping up. We'll review your application and
              reach out within 48 hours with next steps. In the meantime,
              you can explore the Quit Academy to get familiar with our
              evidence-based approach.
            </p>
            <Button className="mt-6 gap-1.5" asChild>
              <Link to="/app/academy">
                Explore the Academy <ArrowRight className="size-4" />
              </Link>
            </Button>
          </Card>
        ) : (
          <Card className="rounded-2xl border bg-card p-6 shadow-sm sm:p-8">
            <Tabs defaultValue="form">
              <TabsList className="mb-6 grid w-full grid-cols-2">
                <TabsTrigger value="form">Apply now</TabsTrigger>
                <TabsTrigger value="info">What to expect</TabsTrigger>
              </TabsList>

              <TabsContent value="form">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vol-name">Full name *</Label>
                      <Input
                        id="vol-name"
                        placeholder="Your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="vol-email">Email *</Label>
                      <Input
                        id="vol-email"
                        type="email"
                        placeholder="you@university.edu"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="vol-country">Country *</Label>
                      <Input
                        id="vol-country"
                        placeholder="e.g. Tunisia, France, Canada"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label>Preferred role *</Label>
                      <div className="flex flex-wrap gap-2">
                        {roles.map((r) => (
                          <button
                            key={r.title}
                            type="button"
                            onClick={() => setRole(r.title)}
                            className={cn(
                              "rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors",
                              role === r.title
                                ? "border-primary bg-primary/10 text-primary"
                                : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                            )}
                          >
                            {r.title}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="vol-motivation">
                      Why do you want to volunteer? (optional)
                    </Label>
                    <textarea
                      id="vol-motivation"
                      rows={4}
                      maxLength={500}
                      placeholder="Tell us what drew you to Quit and how you'd like to contribute..."
                      className="w-full rounded-lg border bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus-visible:border-primary focus-visible:outline-none"
                      value={motivation}
                      onChange={(e) => setMotivation(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      {motivation.length}/500
                    </p>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full gap-1.5"
                    disabled={submitting || !name.trim() || !email.trim() || !role || !country}
                  >
                    {submitting
                      ? "Submitting..."
                      : "Submit volunteer application"}
                    {!submitting && <ArrowRight className="size-4" />}
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="info">
                <div className="space-y-6">
                  <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      No experience required.
                    </span>{" "}
                    We provide onboarding, training materials and a mentor from
                    the Quit team. All you need is willingness to help and
                    availability of a few hours per week.
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold">
                      What happens after you apply:
                    </h3>
                    <div className="space-y-3">
                      {[
                        {
                          step: "1",
                          text: "We review your application within 48 hours.",
                        },
                        {
                          step: "2",
                          text: "You receive an onboarding pack and join the Quit Discord volunteer channel.",
                        },
                        {
                          step: "3",
                          text: "A mentor walks you through your first week and pairs you with an experienced volunteer.",
                        },
                        {
                          step: "4",
                          text: "You start contributing at your own pace — remote, on-campus, or both.",
                        },
                      ].map((s) => (
                        <div
                          key={s.step}
                          className="flex items-start gap-3"
                        >
                          <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                            {s.step}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {s.text}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-sm font-semibold">
                      Volunteer benefits:
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Certificate of contribution",
                        "Quit volunteer badge",
                        "Priority access to Academy content",
                        "Community recognition",
                        "Recommendation letter",
                      ].map((benefit) => (
                        <Badge key={benefit} variant="secondary">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </Card>
        )}
      </div>

      {/* Closing CTA */}
      <Card className="mt-8 rounded-2xl border bg-card p-6 shadow-sm sm:p-7">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
          <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <HeartHandshake className="size-5" />
          </span>
          <div>
            <h2 className="text-base font-semibold">
              Every volunteer makes the next quit attempt possible.
            </h2>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
              Quit exists because students help students. Whether you
              contribute an hour a week or lead a campus chapter, your time
              directly reduces the number of students trapped in addiction.
              The movement is growing — and it needs you.
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

function SectionLabel({
  title,
  sub,
  className,
}: {
  title: string
  sub?: string
  className?: string
}) {
  return (
    <div className={cn(className)}>
      <h2 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </h2>
      {sub && (
        <p className="mt-1 text-sm text-muted-foreground/80">{sub}</p>
      )}
    </div>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
  sub,
}: {
  icon: typeof Users
  value: string
  label: string
  sub: string
}) {
  return (
    <Card className="gap-2 rounded-2xl border bg-card p-4 shadow-sm">
      <CardContent className="space-y-2 p-0">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
          <span className="flex size-7 items-center justify-center rounded-md bg-primary/10 text-primary">
            <Icon className="size-4" />
          </span>
          {label}
        </div>
        <div className="font-display text-3xl font-extrabold tracking-tight">
          {value}
        </div>
        <div className="text-xs text-muted-foreground">{sub}</div>
      </CardContent>
    </Card>
  )
}
