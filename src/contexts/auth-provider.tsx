import { ReactNode, createContext, useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'
import { router } from 'expo-router'

import { User, useUser } from '@/hooks/useUser'
import { useProtectedRouter } from '../hooks/useProtectedRouter'
import { api } from '../libs/api'
import { useSignIn } from '@/hooks/useSignIn'

const AUTH_KEY = 'router-manager-token'

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
  const [userToken, setUserToken] = useState('')
  const { user, refetchUserMe } = useUser()
  const { signIn: signInUser, isPending } = useSignIn()

  useProtectedRouter(userToken)

  useEffect(() => {
    async function loadUser() {
      const storageToken = await SecureStore.getItemAsync(AUTH_KEY)
      if (storageToken) {
        updateToken(storageToken)
        await refetchUserMe()
      }
    }

    loadUser()
  }, [])

  function updateToken(token: string) {
    setUserToken(token)
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  async function signIn(email: string, password: string) {
    try {
      const token = await signInUser({ email, password })
      updateToken(token)
      await SecureStore.setItemAsync(AUTH_KEY, token)
      await refetchUserMe()
    } catch (error) {
      throw error
    }
  }

  async function signOut() {
    await SecureStore.deleteItemAsync(AUTH_KEY)
    setUserToken('')
    router.replace('/sign-in')
  }

  return (
    <AuthContext.Provider value={{ user, isPending, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
