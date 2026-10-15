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
        <Link to="/" className="mb-10 flex items-baseline gap-2">
          <Logo className="size-7" />
          <Wordmark />
        </Link>
        <div className="w-full max-w-md">
          <p className="font-mono-d text-[10px] tracking-[0.22em] text-muted-foreground uppercase">
            Quit⁄Lab · Account
          </p>
          <h1 className="font-display mt-3 text-3xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
          <div className="mt-6 text-center text-sm text-muted-foreground">
            {footer}
          </div>
        </div>
      </div>

      <div className="bg-ink relative hidden overflow-hidden text-ink-fg lg:block">
        <div className="bg-grid absolute inset-0 opacity-40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(163,230,53,0.12),transparent_60%)]" />
        <div className="relative flex h-full flex-col justify-center px-12 lg:px-16">
          <p className="font-mono-d text-[10px] tracking-[0.22em] text-primary uppercase">
            § — The Quit mindset
          </p>
          <blockquote className="mt-6 max-w-md">
            <p className="font-serif-d text-3xl leading-snug italic md:text-4xl">
              “The most reliable predictor of writing a new chapter is not how
              hard you fall — it is how fast you get back up.”
            </p>
            <footer className="font-mono-d mt-5 text-[10px] tracking-[0.16em] text-ink-muted uppercase">
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
    <div className="flex items-center gap-3 border-t border-ink-line pt-4">
      <Icon className="size-4 shrink-0 text-primary" strokeWidth={1.5} />
      <div className="font-mono-d text-[11px] tracking-[0.1em] text-ink-muted uppercase">
        {text}
      </div>
    </div>
  )
}
