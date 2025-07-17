'use client'
import { useState } from 'react'
import { useSupabase } from '@/components/SupabaseProvider'

export default function RegisterPage() {
  const { supabase } = useSupabase()
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('user') // or 'author'
  const [status, setStatus] = useState(null)

  const handleRegister = async (e) => {
    e.preventDefault()
    setStatus('Sending magic link...')

    const { data, error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${location.origin}/onboarding?role=${role}`,
      },
    })

    if (error) {
      setStatus('Error sending magic link')
    } else {
      setStatus('Check your email to finish registration.')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex items-center justify-center p-4">
      <form 
        onSubmit={handleRegister} 
        className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-bold text-purple-400 mb-6 text-center">Create an Account</h1>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-gray-300">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            placeholder="you@example.com"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="role" className="block text-sm font-medium text-gray-300">
            Account Type
          </label>
          <select
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
          >
            <option value="user">Reader</option>
            <option value="author">Author</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200"
        >
          Register with Magic Link
        </button>

        {status && (
          <p className={`mt-4 text-center text-sm ${
            status.includes('Error') ? 'text-red-400' : 'text-green-400'
          }`}>
            {status}
          </p>
        )}

        <p className="text-xs text-gray-400 text-center mt-6">
          By registering, you agree to our Terms of Service and Privacy Policy
        </p>
      </form>
    </div>
  )
}