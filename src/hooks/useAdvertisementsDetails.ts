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
  }
  favorites: [
    {
      id: string
      isFavorite: boolean
      advertisementId: string
    },
  ]
}
export interface Advertisements {
  advertisements: Advertisement
}

async function fetchAdvertisementsDetails(id: string): Promise<Advertisements> {
  const response = await api.get(`/advertisements/${id}`)
  return response.data
}

export function useAdvertisementsDetails(id: string) {
  const { data, isError, isPending, refetch } = useQuery({
    queryKey: ['advertisementsList'],
    queryFn: () => fetchAdvertisementsDetails(id),
  })

  return { data: data?.advertisements, isPending, isError, refetch }
}
