import { useMutation } from '@tanstack/react-query'
import { useToast } from 'react-native-toast-notifications'

import { api } from '@/libs/api'
import { SignUpFormData } from '@/components/forms/sign-up/sign-up.types'
import { useAuth } from './useAuth'

export function useSignUp() {
  const toast = useToast()
  const { signIn, isPending } = useAuth()

  const { mutateAsync: signUp, isPending: isPendingCreate } = useMutation({
    mutationFn: async ({ name, email, password }: SignUpFormData) => {
      await api.post('/register-user', {
        name,
        email,
        password,
      })

      await signIn(email, password)
    },
    onError: () => {
      toast.show('Error to create user', {
        placement: 'top',
        type: 'danger',
      })
    },
  })

  return { signUp, isPending: isPendingCreate || isPending }
}
