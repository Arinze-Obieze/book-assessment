'use client'

import { useState } from 'react'
import { useSupabase } from '@/components/SupabaseProvider'
import { v4 as uuidv4 } from 'uuid'

export default function AddBookForm() {
  const { supabase } = useSupabase()
  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    image: null,
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleChange = (e) => {
    const { name, value, files } = e.target
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)

    // 1. Upload image to Supabase Storage
    const fileName = `${uuidv4()}-${form.image.name}`
    const { data: storageData, error: uploadError } = await supabase.storage
      .from('books')
      .upload(fileName, form.image)

    if (uploadError) {
      console.error(uploadError)
      setMessage('Image upload failed')
      setLoading(false)
      return
    }

    const imageUrl = supabase.storage
      .from('books')
      .getPublicUrl(fileName).data.publicUrl

    // 2. Save book details to DB
    const { error: insertError } = await supabase
      .from('books')
      .insert([
        {
          title: form.title,
          author: form.author,
          genre: form.genre,
          description: form.description,
          image_url: imageUrl,
        },
      ])

    if (insertError) {
      console.error(insertError)
      setMessage('Failed to save book')
    } else {
      setMessage('Book saved successfully!')
      setForm({
        title: '',
        author: '',
        genre: '',
        description: '',
        image: null,
      })
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-md mx-auto">
      <input name="title" placeholder="Book Title" value={form.title} onChange={handleChange} required className="p-2 border" />
      <input name="author" placeholder="Author" value={form.author} onChange={handleChange} required className="p-2 border" />
      <input name="genre" placeholder="Genre" value={form.genre} onChange={handleChange} className="p-2 border" />
      <textarea name="description" placeholder="Description" value={form.description} onChange={handleChange} className="p-2 border" />
      <input type="file" accept="image/*" name="image" onChange={handleChange} required />
      <button type="submit" className="bg-blue-600 text-white py-2 rounded" disabled={loading}>
        {loading ? 'Saving...' : 'Save Book'}
      </button>
      {message && <p className="text-center mt-2">{message}</p>}
    </form>
  )
}
