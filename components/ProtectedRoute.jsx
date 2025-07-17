'use client'

import { useSupabase } from './SupabaseProvider'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function ProtectedRoute({ children }) {
  const { session } = useSupabase()
  const router = useRouter()

  useEffect(() => {
    if (!session) router.push('/login')
  }, [session, router])

  return session ? children : null
}
