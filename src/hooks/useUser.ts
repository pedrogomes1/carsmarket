import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'

import { api } from '@/libs/api'

export type User = {
  id: string
  name: string
  avatar_url: string
}

async function fetchUserMe(): Promise<User> {
  const response = await api.get('/me')

  return response.data?.me
}

export function useUser() {
  const [user, setUser] = useState<User | null>(null)

  const {
    data,
    isSuccess,
    refetch: refetchUserMe,
  } = useQuery({
    queryKey: ['userMe'],
    queryFn: fetchUserMe,
    enabled: false,
  })

  useEffect(() => {
    if (isSuccess) {
      setUser(data)
    }
  }, [isSuccess])

  return { user, refetchUserMe }
}
