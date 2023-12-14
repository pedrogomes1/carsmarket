import { useMutation } from '@tanstack/react-query'
import { useToast } from 'react-native-toast-notifications'

import { api } from '@/libs/api'

interface FavoriteProps {
  id?: string
  advertisementId: string
}

export function useFavorites() {
  const toast = useToast()

  const { mutateAsync: setFavorite, data } = useMutation({
    mutationFn: async ({ id, advertisementId }: FavoriteProps) => {
      const response = await api.put(`/favorites/${id}/${advertisementId}`)

      return response?.data.isFavorite as boolean
    },
    onError: () => {
      toast.show('Error update favorite', {
        placement: 'top',
        type: 'danger',
      })
    },
  })

  return { setFavorite, data }
}
