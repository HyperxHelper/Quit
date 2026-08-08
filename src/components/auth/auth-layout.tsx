import type { ReactNode } from "react"
import { Link } from "react-router-dom"
import { BookOpen, Flame, ShieldCheck } from "lucide-react"

import { Logo, Wordmark } from "@/components/brand/logo"

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: {
  title: string
  subtitle: string
  children: ReactNode
  footer: ReactNode
}) {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="flex flex-col items-start justify-center px-6 py-12 sm:px-12">
        <Link to="/" className="mb-10 flex items-center gap-2">
          <Logo />
          <Wordmark />
        </Link>
        <div className="w-full max-w-md">
          <h1 className="font-display text-3xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {footer}
          </div>
        </div>
      </div>

      <div className="relative hidden overflow-hidden bg-primary lg:block">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.18),transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-center px-12 text-primary-foreground lg:px-16">
          <blockquote className="max-w-md">
            <p className="font-display text-2xl font-bold leading-snug">
              “The most reliable predictor of writing a new chapter is not how
              hard you fall — it is how fast you get back up.”
            </p>
            <footer className="mt-4 text-sm text-primary-foreground/80">
              The Quit mindset
            </footer>
          </blockquote>
          <div className="mt-10 space-y-4">
            <Perk
              icon={ShieldCheck}
              text="Science-proven protocols, transparent sources"
            />
            <Perk icon={Flame} text="Streak tracking that makes quitting stick" />
            <Perk icon={BookOpen} text="Made for students, free for students" />
          </div>
        </div>
      </div>
    </div>
  )
}

function Perk({
  icon: Icon,
  text,
}: {
  icon: typeof ShieldCheck
  text: string
}) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex size-9 items-center justify-center rounded-lg bg-white/10">
        <Icon className="size-5" />
      </div>
      <div className="text-sm">{text}</div>
    </div>
  )
}