import { api } from '@/libs/api'
import { useState } from 'react'

export type User = {
  id: string
  name: string
  role: string
  bio: string
  avatar_url: string
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  async function getUser() {
    try {
      const response = await api.get('/me')
      const { me } = response.data
      setUser(me)
    } catch (error) {
      console.error(error)
    }
  }

  return { user, setUser, getUser }
}
