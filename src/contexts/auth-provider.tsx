import { ReactNode, createContext, useEffect } from 'react'

import { useProtectedRouter } from '../hooks/useProtectedRouter'
import { router } from 'expo-router'
import { useToken } from '@/hooks/useToken'
import { useSecureStore } from '@/hooks/useSecureStore'
import { User, useUser } from '@/hooks/useUser'
import { useSignIn } from '@/hooks/useSignIn'

type AuthContextData = {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  isPending: boolean
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const { userToken, resetToken, updateToken } = useToken()
  const { getSecureStore, deleteSecureStore } = useSecureStore()
  const { user, setUser, getUser } = useUser()
  const { signIn: signInUser, isPending } = useSignIn()

  useProtectedRouter(userToken)

  useEffect(() => {
    async function loadUser() {
      const storageToken = await getSecureStore()
      if (storageToken) {
        updateToken(storageToken)
        await getUser()
      }
    }

    loadUser()
  }, [])

  async function signIn(email: string, password: string) {
    signInUser({ email, password })
  }

  async function signOut() {
    await deleteSecureStore()
    resetToken()
    setUser(null)
    router.replace('/sign-in')
  }

  return (
    <AuthContext.Provider value={{ user, isPending, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
