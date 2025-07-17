'use client'

import { useState } from 'react'
import { useSupabase } from '@/components/SupabaseProvider'

export default function LoginPage() {
  const { supabase } = useSupabase()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState(null)

  const handleLogin = async (e) => {
    e.preventDefault()
    setStatus('Sending magic link...')

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/dashboard`, // or wherever you want to redirect after login
      },
    })

    if (error) {
      console.error(error)
      setStatus('Error sending magic link')
    } else {
      setStatus('Magic link sent! Check your email.')
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-4 p-8 rounded-md bg-gray-100 w-full max-w-sm"
      >
        <h1 className="text-xl font-semibold text-center">Login via Email</h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 border border-gray-300 rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send Magic Link
        </button>
        {status && <p className="text-sm text-center">{status}</p>}
      </form>
    </div>
  )
}
