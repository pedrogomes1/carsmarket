import { useQuery } from '@tanstack/react-query'

import { api } from '@/libs/api'

export interface Advertisement {
  id: string
  picture: string
  description: string
  model: string
  year: string
  value: number
  city: string
  brand: {
    id: string
    logo: string
    name: string
  }
}
export interface Advertisements {
  advertisements: Advertisement[]
}

async function fetchAdvertisements(): Promise<Advertisements> {
  const response = await api.get('/advertisements')
  return response.data
}

export function useAvailableCars() {
  const { data, isError, isPending } = useQuery({
    queryKey: ['advertisementsList'],
    queryFn: fetchAdvertisements,
  })

  return { data: data?.advertisements, isPending, isError }
}
