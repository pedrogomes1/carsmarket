import { useMutation } from '@tanstack/react-query'
import { useToast } from 'react-native-toast-notifications'

import { api } from '@/libs/api'
import { SignInFormSchema } from '@/components/forms/sign-in'

export function useSignIn() {
  const toast = useToast()

  const { mutateAsync: signIn, isPending } = useMutation({
    mutationFn: async ({ email, password }: SignInFormSchema) => {
      const response = await api.post('/sessions', { email, password })
      return response.data.token
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
