import { useMutation } from '@tanstack/react-query'
import { router } from 'expo-router'
import { useToast } from 'react-native-toast-notifications'

import { api } from '@/libs/api'
import { FormSchema } from '@/components/forms/sign-in'

import { useToken } from './useToken'
import { useSecureStore } from './useSecureStore'
import { useUser } from './useUser'

export function useSignIn() {
  const { updateToken } = useToken()
  const { updateSecureStore } = useSecureStore()
  const { getUser } = useUser()
  const toast = useToast()

  const { mutate: signIn, isPending } = useMutation({
    mutationFn: ({ email, password }: FormSchema) => {
      return api.post('/sessions', { email, password })
    },
    onSuccess: async (response) => {
      const { token } = response.data
      updateToken(token)
      await updateSecureStore(token)

      await getUser()
      router.replace('/home')
    },
    onError: () => {
      toast.show('Error when authenticating', {
        placement: 'top',
        type: 'danger',
      })
    },
  })

  return { signIn, isPending }
}
