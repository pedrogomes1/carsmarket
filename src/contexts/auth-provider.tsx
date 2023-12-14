import {
  ReactNode,
  useCallback,
  createContext,
  useEffect,
  useState,
} from 'react'
import * as SecureStore from 'expo-secure-store'
import { router } from 'expo-router'

import { useProtectedRouter } from '../hooks/useProtectedRouter'
import { api } from '../libs/api'
import { useSignIn } from '@/hooks/useSignIn'

export const AUTH_KEY = 'router-manager-token'
export const USER_KEY = 'user-manager-token'

export type User = {
  id: string
  name: string
  email: string
  photo: string
}

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
  const { signIn: signInUser, isPending } = useSignIn()
  const [user, setUser] = useState<User | null>(null)

  useProtectedRouter(userToken)

  const loadUser = useCallback(async () => {
    const storageToken = await SecureStore.getItemAsync(AUTH_KEY)
    if (storageToken) {
      updateToken(storageToken)
    }
    const storageUser = await SecureStore.getItemAsync(USER_KEY)
    if (storageUser) setUser(JSON.parse(storageUser))
  }, [])

  useEffect(() => {
    loadUser()
  }, [loadUser])

  function updateToken(token: string) {
    setUserToken(token)
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  async function signIn(email: string, password: string) {
    try {
      const { data } = await signInUser({ email, password })
      updateToken(data.token)
      await SecureStore.setItemAsync(AUTH_KEY, data.token)
      await SecureStore.setItemAsync(USER_KEY, JSON.stringify(data.user))
      loadUser()
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
