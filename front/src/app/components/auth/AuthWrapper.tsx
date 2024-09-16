'use client'

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { setUser, clearUser } from "../../lib/features/userSlice"

export function AuthWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession()
  const dispatch = useDispatch()

  useEffect(() => {
    // biome-ignore lint/complexity/useOptionalChain: <explanation>
    if (session && session.user) {
      dispatch(setUser({ username: session.user.name || 'Guest' }))
    } else {
      dispatch(clearUser())
    }
  }, [session, dispatch])

  return <>{children}</>
}