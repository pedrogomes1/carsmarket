import * as SecureStore from 'expo-secure-store'
import { useMutation } from '@tanstack/react-query'
import { useToast } from 'react-native-toast-notifications'

import { api } from '@/libs/api'
import { SignInFormSchema } from '@/components/forms/sign-in'
import { AUTH_KEY, USER_KEY } from '@/contexts/auth-provider'

export function useSignIn() {
  const toast = useToast()

  const { mutateAsync: signIn, isPending } = useMutation({
    mutationFn: async ({ email, password }: SignInFormSchema) => {
      return await api.post('/sessions', { email, password })
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
