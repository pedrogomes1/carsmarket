import { router } from 'expo-router'
import { useMutation } from '@tanstack/react-query'
import { useToast } from 'react-native-toast-notifications'

import { client } from '@/app/_layout'
import { api } from '@/libs/api'
import { useAuth } from './useAuth'
import { RegisterAdvertisementFormSchema } from '@/components/forms/register-advertisement'

export function useRegisterAdvertisement() {
  const toast = useToast()
  const { user } = useAuth()

  const { mutate: handleRegister, isPending: isPendingRegister } = useMutation({
    mutationFn: async (data: RegisterAdvertisementFormSchema) => {
      const { brand, city, description, model, picture, value, year } = data

      await api.post('/advertisements', {
        userId: user?.id,
        picture,
        description,
        brandId: brand,
        model,
        year,
        city,
        value,
      })
      router.replace('/home')
    },
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ['advertisementsList'] })
    },
    onError: () => {
      toast.show('Error to register new advertisement', {
        placement: 'top',
        type: 'danger',
      })
    },
  })

  return { handleRegister, isPendingRegister }
}
