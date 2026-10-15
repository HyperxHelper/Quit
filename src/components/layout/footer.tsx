import { Link } from "react-router-dom"
import { ArrowUp } from "lucide-react"

import { useScrollToSection } from "@/lib/nav"

const COLS = [
  {
    title: "Initiative",
    links: [
      { label: "The science", to: "science", section: true },
      { label: "Programs", to: "programs", section: true },
      { label: "Method", to: "method", section: true },
      { label: "Impact", to: "impact", section: true },
    ],
  },
  {
    title: "R&D Lab",
    links: [
      { label: "Research", to: "/research", section: false },
      { label: "Our code", to: "/code", section: false },
      { label: "Blog", to: "/blog", section: false },
      { label: "Dashboard", to: "/app", section: false },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Volunteer", to: "/app/volunteer", section: false },
      { label: "Log in", to: "/login", section: false },
      { label: "Join the lab", to: "/signup", section: false },
      { label: "Sponsor us", to: "https://ko-fi.com/quitnow", section: false },
    ],
  },
]

export function Footer() {
  const scrollToSection = useScrollToSection()

  return (
    <footer className="bg-ink relative overflow-hidden text-ink-fg pb-[calc(4rem+env(safe-area-inset-bottom,0px))] md:pb-0">
      <div className="bg-grid absolute inset-0 opacity-30" />
      <div className="relative mx-auto max-w-[1400px] px-5 pt-16 pb-10 md:px-10 md:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="font-mono-d text-[10px] tracking-[0.22em] text-ink-muted uppercase">
              Quit⁄Lab — Initiative &amp; R&amp;D
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ink-muted">
              Free for every student. Anonymous if you want. Science-backed
              always. Our protocols cite the original studies — you can, too.
            </p>
          </div>
          {COLS.map((col) => (
            <div key={col.title} className="md:col-span-2">
              <p className="font-mono-d text-[10px] tracking-[0.2em] text-primary uppercase">
                {col.title}
              </p>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {link.section ? (
                      <button
                        type="button"
                        onClick={() => scrollToSection(link.to)}
                        className="cursor-pointer text-sm text-ink-muted transition-colors hover:text-ink-fg"
                      >
                        {link.label}
                      </button>
                    ) : link.to.startsWith("http") ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ink-muted transition-colors hover:text-ink-fg"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-sm text-ink-muted transition-colors hover:text-ink-fg"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 overflow-hidden border-t border-ink-line pt-10 select-none">
          <p className="font-mono-d text-center text-[16.5vw] leading-[0.85] font-semibold tracking-[-0.04em] text-ink-line md:text-[13rem] whitespace-nowrap">
            Quit<span className="text-primary">⁄</span>Lab
          </p>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-ink-line pt-6">
          <p className="font-mono-d text-[10px] tracking-[0.16em] text-ink-muted uppercase">
            © {new Date().getFullYear()} Quit Initiative &amp; R&amp;D Lab —
            pre-NGO collective
          </p>
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="font-mono-d flex cursor-pointer items-center gap-2 text-[10px] tracking-[0.16em] text-ink-muted uppercase transition-colors hover:text-primary"
          >
            Back to top <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  )
}
