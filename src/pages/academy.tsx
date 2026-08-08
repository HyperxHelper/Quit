import {
  Clapperboard,
  FileText,
  GraduationCap,
  Play,
  Podcast,
  ShieldCheck,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

const tracks = [
  {
    icon: Clapperboard,
    title: "Crafting videos",
    text: "Short, evidence-driven video lessons on how each type of addiction forms, works and gets outlived — built for feeds, not lectures.",
  },
  {
    icon: FileText,
    title: "Articles & guides",
    text: "In-depth written materials covering the science and the personal side of quitting, updated as we produce them.",
  },
  {
    icon: Podcast,
    title: "Audio & checkpoints",
    text: "Debriefs and mini-casts to revisit whenever a craving shows up — designed to be consumed in the moment of temptation.",
  },
]

const lessons = [
  {
    type: "Video",
    duration: "6 min",
    title: "Nicotine & the 15-minute urge",
    tag: "Smoking",
  },
  {
    type: "Video",
    duration: "5 min",
    title: "The doomscrolling reward loop",
    tag: "Screen habits",
  },
  {
    type: "Article",
    read: "4 min read",
    title: "Why relapse is a data point, not a verdict",
    tag: "Resilience",
  },
  {
    type: "Video",
    duration: "7 min",
    title: "Dopamine redirection for gaming",
    tag: "Gaming",
  },
  {
    type: "Article",
    read: "5 min read",
    title: "Building resistance before the temptation",
    tag: "Prevention",
  },
]

export function AcademyPage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-xl bg-primary/10">
          <GraduationCap className="size-6 text-primary" />
        </div>
        <div>
          <h1 className="font-display text-2xl font-bold tracking-tight">
            Academy
          </h1>
          <p className="text-sm text-muted-foreground">
            Videos, articles and materials that strengthen a student's
            resistance to addiction — in every one of its forms.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {tracks.map((track) => (
          <Card key={track.title} className="gap-3 p-6">
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
              <track.icon className="size-5 text-primary" />
            </div>
            <h3 className="text-base font-semibold">{track.title}</h3>
            <p className="text-sm text-muted-foreground">{track.text}</p>
          </Card>
        ))}
      </div>

      <div className="mt-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="font-display text-xl font-bold tracking-tight">
              Under production
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              First materials to land in the Academy.
            </p>
          </div>
          <Button size="sm" variant="outline">
            <Play className="size-4" /> Watch playlist
          </Button>
        </div>

        <div className="mt-4 space-y-3">
          {lessons.map((lesson) => (
            <Card key={lesson.title} className="gap-3 p-5">
              <div className="flex items-center gap-4">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  {lesson.type === "Video" ? (
                    <Play className="size-4" />
                  ) : (
                    <FileText className="size-4" />
                  )}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="secondary">{lesson.type}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {lesson.duration ?? lesson.read}
                    </span>
                    <Badge variant="outline">{lesson.tag}</Badge>
                  </div>
                  <h3 className="mt-1.5 truncate text-sm font-semibold">
                    {lesson.title}
                  </h3>
                </div>
                <Button size="sm" variant="ghost" className="shrink-0">
                  {lesson.type === "Video" ? "Play" : "Read"}
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4 text-sm">
        <ShieldCheck className="mt-0.5 size-5 shrink-0 text-primary" />
        <p className="text-muted-foreground">
          <span className="font-medium text-foreground">
            The goal of the Academy:
          </span>{" "}
          before the craving shows up, you already know how to meet it. Every
          lesson is built to inoculate students against the next urge, whatever
          type of addiction it is.
        </p>
      </div>
    </div>
  )
}