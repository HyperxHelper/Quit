import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"

export type Addiction =
  | "smoking"
  | "vaping"
  | "drugs"
  | "screen_time"
  | "junking"
  | "gaming"

export interface QuitPlan {
  id: string
  addiction: Addiction
  startDate: string
  goal: string
  dailySaving: number
}

interface UserRecord {
  id: string
  name: string
  email: string
  passwordHash: string
  createdAt: string
  isAnonymous?: boolean
  plan: QuitPlan | null
}

export interface SessionUser {
  id: string
  name: string
  email: string
  createdAt: string
  isAnonymous: boolean
  plan: QuitPlan | null
}

interface AuthState {
  user: SessionUser | null
  loading: boolean
  signUp: (input: {
    name: string
    email: string
    password: string
  }) => Promise<SessionUser>
  signIn: (input: { email: string; password: string }) => Promise<SessionUser>
  signInAnonymous: (input: {
    nickname: string
    password: string
  }) => Promise<SessionUser>
  signOut: () => void
  setPlan: (plan: Omit<QuitPlan, "id">) => void
}

const USERS_KEY = "quit.users"
const SESSION_KEY = "quit.session"
const LAST_ANONYMOUS_KEY = "quit.last-anonymous"

function db<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

function persist(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value))
}

function loadUsers(): Record<string, UserRecord> {
  return db(USERS_KEY, {})
}

function uid() {
  return `u_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`
}

const delay = (ms = 700) => new Promise((r) => setTimeout(r, ms))

// Concept-safe password hashing (SHA-256) stored client-side only.
async function hash(password: string) {
  const data = new TextEncoder().encode(`quit:${password}`)
  const digest = await crypto.subtle.digest("SHA-256", data)
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("")
}

function toSession(record: UserRecord): SessionUser {
  return {
    id: record.id,
    name: record.name,
    email: record.email,
    createdAt: record.createdAt,
    isAnonymous: record.isAnonymous ?? false,
    plan: record.plan,
  }
}

export function savePlan(userId: string, plan: QuitPlan) {
  const users = loadUsers()
  const record = Object.values(users).find((u) => u.id === userId)
  if (!record) return
  record.plan = plan
  persist(USERS_KEY, users)
  const session = db<SessionUser | null>(SESSION_KEY, null)
  if (session && session.id === userId) {
    session.plan = plan
    persist(SESSION_KEY, session)
  }
}

export function getLastAnonymousNickname(): string {
  return db<string>(LAST_ANONYMOUS_KEY, "")
}

function rememberAnonymousNickname(nickname: string) {
  persist(LAST_ANONYMOUS_KEY, nickname)
}

const AuthContext = createContext<AuthState | null>(null)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<SessionUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const session = db<SessionUser | null>(SESSION_KEY, null)
    const users = loadUsers()
    if (session && users[session.email]) {
      setUser(toSession(users[session.email]))
    }
    setLoading(false)
  }, [])

  const signUp = useCallback(
    async (input: { name: string; email: string; password: string }) => {
      await delay()
      const users = loadUsers()
      const email = input.email.trim().toLowerCase()

      if (users[email]) {
        throw new Error("An account with this email already exists.")
      }

      const record: UserRecord = {
        id: uid(),
        name: input.name.trim(),
        email,
        passwordHash: await hash(input.password),
        createdAt: new Date().toISOString(),
        plan: null,
      }
      users[email] = record
      persist(USERS_KEY, users)

      const session = toSession(record)
      persist(SESSION_KEY, session)
      setUser(session)
      return session
    },
    []
  )

  const signIn = useCallback(
    async (input: { email: string; password: string }) => {
      await delay()
      const users = loadUsers()
      const email = input.email.trim().toLowerCase()
      const record = users[email]

      if (!record) {
        throw new Error("No account found with this email.")
      }

      const expected = await hash(input.password)
      if (record.passwordHash !== expected) {
        throw new Error("Incorrect password. Please try again.")
      }

      const session = toSession(record)
      persist(SESSION_KEY, session)
      setUser(session)
      return session
    },
    []
  )

  const signInAnonymous = useCallback(
    async (input: { nickname: string; password: string }) => {
      await delay()
      const nickname = input.nickname.trim()

      if (nickname.length < 2) {
        throw new Error("Your nickname needs at least 2 characters.")
      }
      if (input.password.length < 4) {
        throw new Error("Pick a temporary password (min 4 characters).")
      }

      const users = loadUsers()
      const passwordHash = await hash(input.password)

      // Resume an existing anonymous account for the same nickname + password
      // so coming back feels continuous instead of a brand new identity.
      const existing = Object.values(users).find(
        (u) =>
          u.isAnonymous &&
          u.name.toLowerCase() === nickname.toLowerCase() &&
          u.passwordHash === passwordHash
      )

      if (existing) {
        rememberAnonymousNickname(existing.name)
        const session = toSession(existing)
        persist(SESSION_KEY, session)
        setUser(session)
        return session
      }

      // Anonymous sessions are keyed by a synthetic address so they never
      // collide with real members; they can be upgraded to a full account.
      const email = `anon-${uid()}@anonymous.quit`

      const record: UserRecord = {
        id: uid(),
        name: nickname,
        email,
        passwordHash,
        createdAt: new Date().toISOString(),
        isAnonymous: true,
        plan: null,
      }
      users[email] = record
      persist(USERS_KEY, users)

      rememberAnonymousNickname(nickname)
      const session = toSession(record)
      persist(SESSION_KEY, session)
      setUser(session)
      return session
    },
    []
  )

  const signOut = useCallback(() => {
    localStorage.removeItem(SESSION_KEY)
    setUser(null)
  }, [])

  const setPlan = useCallback(
    (plan: Omit<QuitPlan, "id">) => {
      const full: QuitPlan = {
        ...plan,
        id: `p_${Date.now().toString(36)}`,
      }
      if (user) {
        savePlan(user.id, full)
        setUser({ ...user, plan: full })
      }
    },
    [user]
  )

  const value = useMemo(
    () => ({ user, loading, signUp, signIn, signInAnonymous, signOut, setPlan }),
    [user, loading, signUp, signIn, signInAnonymous, signOut, setPlan]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const ctx = useContext(AuthContext)
  if (!ctx) throw new Error("useAuth must be used within AuthProvider")
  return ctx
}

export function streakDays(plan: QuitPlan) {
  const start = new Date(plan.startDate)
  start.setHours(0, 0, 0, 0)
  const now = new Date()
  now.setHours(0, 0, 0, 0)
  return Math.max(0, Math.floor((now.getTime() - start.getTime()) / 86400000))
}