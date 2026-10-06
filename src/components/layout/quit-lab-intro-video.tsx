import { Play } from "lucide-react"

const VIDEO_ID = "OmzrJDHXIHk"
const VIDEO_TITLE =
  "Introducing Quit Lab : empower research and start your comeback!"
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`

/* Browsers block unmuted autoplay, so the player starts muted and the
   visitor can unmute from the YouTube controls. */
const EMBED_SRC = `https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&mute=1&playsinline=1&rel=0&modestbranding=1&iv_load_policy=3`

export function QuitLabIntroVideo() {
  return (
    <div className="mt-10 flex w-full flex-col items-center">
      {/* “Now playing” indicator — tells the visitor a video is running */}
      <div className="flex max-w-full flex-wrap items-center justify-center gap-2 rounded-full border border-red-500/25 bg-red-500/10 px-3.5 py-1.5 shadow-xs">
        <span className="relative flex size-2 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-75" />
          <span className="relative inline-flex size-2 rounded-full bg-red-500" />
        </span>
        <Play className="size-3 shrink-0 fill-red-500 text-red-500" aria-hidden="true" />
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-red-600 dark:text-red-400">
          Now playing
        </span>
        <span className="text-[11px] font-medium text-red-600/70 dark:text-red-400/70">
          · Quit Lab intro
        </span>
        <span className="flex h-3 shrink-0 items-end gap-[2px]" aria-hidden="true">
          <span className="lab-eq-bar h-full w-[3px] rounded-full bg-red-500" />
          <span className="lab-eq-bar h-full w-[3px] rounded-full bg-red-500" />
          <span className="lab-eq-bar h-full w-[3px] rounded-full bg-red-500" />
        </span>
      </div>

      {/* Hand-drawn nudge: watch this before scrolling */}
      <p className="mt-3 text-xs font-medium italic text-muted-foreground">
        Watch this before you scroll
      </p>
      <svg
        className="lab-watch-bob size-9 text-primary"
        viewBox="0 0 44 36"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 4C12 16 28 14 28 28"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M28 28L32 21.1M28 28L24 21.1"
          stroke="currentColor"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Framed player */}
      <div className="relative mt-2 w-full max-w-3xl">
        <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-primary/10 blur-2xl" />
        <div className="relative rounded-3xl border border-border bg-card p-2 shadow-2xl shadow-black/20 ring-1 ring-black/5 dark:ring-white/5">
          <div className="relative aspect-video overflow-hidden rounded-2xl bg-black">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={EMBED_SRC}
              title={VIDEO_TITLE}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <p className="mt-3 text-xs text-muted-foreground">
        Autoplaying muted — tap the speaker for sound ·{" "}
        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 transition-colors hover:text-foreground"
        >
          Watch on YouTube
        </a>
      </p>
    </div>
  )
}
