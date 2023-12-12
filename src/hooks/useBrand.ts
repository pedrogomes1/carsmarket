import { useQuery } from '@tanstack/react-query'

import { api } from '@/libs/api'

interface Brands {
  brands: {
    id: string
    name: string
    logo: string
  }[]
}

async function fetchBrands(): Promise<Brands> {
  const response = await api.get('/brand')
  return response.data
}

export function useBrand() {
  const {
    data,
    isError,
    isPending: isPendingBrands,
  } = useQuery({
    queryKey: ['brandsList'],
    queryFn: fetchBrands,
  })

  return { data, isPendingBrands, isError }
}
