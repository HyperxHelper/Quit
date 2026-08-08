import type { Addiction } from "@/lib/auth"

export const ADDICTIONS: Array<{
  value: Addiction
  label: string
  description: string
  saving: number
}> = [
  {
    value: "smoking",
    label: "Smoking",
    description: "A pack a day becomes €2,190 a year you stop burning.",
    saving: 365,
  },
  {
    value: "vaping",
    label: "Vaping",
    description: "Pods, coils, juice — the hidden tax on your pocket.",
    saving: 240,
  },
  {
    value: "drugs",
    label: "Drugs / weed",
    description: "Cannabis and other substances — quit the dependency.",
    saving: 300,
  },
  {
    value: "screen_time",
    label: "Doomscrolling",
    description: "Reclaim hours — roughly 1.5 h/day from feeds alone.",
    saving: 0,
  },
  {
    value: "gaming",
    label: "Gaming",
    description: "Keep the fun, drop the all-nighters and ranks-chasing.",
    saving: 60,
  },
  {
    value: "junking",
    label: "Junk food",
    description: "Delivery snacks and energy drinks add up fast.",
    saving: 150,
  },
]

export function addictionLabel(value: Addiction) {
  return ADDICTIONS.find((a) => a.value === value)?.label ?? value
}

export function addictionMeta(value: Addiction) {
  return ADDICTIONS.find((a) => a.value === value)
}

export function formatDin(tnd: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "TND",
    maximumFractionDigits: 0,
  }).format(Math.round(tnd))
}

export function daySuffix(value: number) {
  return value === 1 ? "day" : "days"
}