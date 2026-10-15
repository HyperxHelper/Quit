const HABITS = [
  "Smoking",
  "Doom-scrolling",
  "Cannabis",
  "Junk food",
  "Gaming",
  "Vaping",
  "Porn",
  "Procrastination",
]

export default function Marquee() {
  const row = [...HABITS, ...HABITS]
  return (
    <div className="border-y border-border bg-accent overflow-hidden py-3" aria-hidden="true">
      <div className="animate-marquee flex w-max items-center gap-8 whitespace-nowrap">
        {row.map((habit, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-mono-d text-xs font-semibold tracking-[0.22em] text-accent-foreground uppercase">
              {habit}
            </span>
            <span className="text-accent-foreground/50">✕</span>
          </span>
        ))}
      </div>
    </div>
  )
}
