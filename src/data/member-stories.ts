export type MemberStoryCategory =
  | "Addiction"
  | "Anxiety"
  | "Suicidal thoughts"

export interface MemberStory {
  name: string
  category: MemberStoryCategory
  struggle: string
  outcome: string
  days?: number
  /**
   * True while these entries are mockup details. Real member stories get
   * linked to real accounts once that feature ships (coming soon) — the
   * backup integration is expected to replace/append to this source.
   */
  isMockup?: boolean
}

/**
 * Real people who got help inside Quit.
 *
 * Current entries are mockup details for the demo. This module is the single
 * integration point for the backup/source of member stories: when the
 * real-accounts feature lands (coming soon), swap this static source for the
 * live one (e.g. a fetch of the account-backed data) while keeping the
 * `MemberStory` shape unchanged.
 */
export const memberStories: MemberStory[] = [
  {
    name: "Sara, 21",
    category: "Addiction",
    struggle: "Vaping and quiet anxiety",
    outcome: "A nurse replied in minutes. Now she checks in daily.",
    days: 47,
    isMockup: true,
  },
  {
    name: "Tarek",
    category: "Addiction",
    struggle: "Gaming until 3am",
    outcome: "Thought nobody would get it. The nurse just listened.",
    days: 21,
    isMockup: true,
  },
  {
    name: "Maya",
    category: "Suicidal thoughts",
    struggle: "The closest I've been to the edge",
    outcome:
      "A nurse stayed with her and walked her to a professional. She's still here.",
    isMockup: true,
  },
  {
    name: "Yusuf",
    category: "Anxiety",
    struggle: "Depression and endless scrolling",
    outcome: "Was embarrassed to ask. Now he checks in every morning.",
    days: 14,
    isMockup: true,
  },
  {
    name: "Leila",
    category: "Anxiety",
    struggle: "Panic attacks before exams",
    outcome: "One conversation changed how she faces a bad day.",
    isMockup: true,
  },
  {
    name: "Omar",
    category: "Suicidal thoughts",
    struggle: "I didn't think I mattered",
    outcome: "He found the courage to speak. He did matter.",
    isMockup: true,
  },
]