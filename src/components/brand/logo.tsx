import { cn } from "@/lib/utils"

export function Logo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className={cn("size-8", className)}>
      <rect width="32" height="32" className="fill-primary" />
      <path
        d="M10 20c0-3 0-6 0-9"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M10 20c4-3 8-3 12 0"
        stroke="#0a0a0a"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="22" cy="11" r="2.4" fill="#0a0a0a" />
    </svg>
  )
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "font-mono-d text-sm font-semibold tracking-[0.22em] uppercase",
        className
      )}
    >
      Quit<span className="text-lime-strong">⁄</span>Lab
    </span>
  )
}
