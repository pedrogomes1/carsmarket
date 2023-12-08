import { ReactNode, createContext, useEffect, useState } from 'react'
import * as SecureStore from 'expo-secure-store'

import { useProtectedRouter } from '../hooks/useProtectedRouter'
import { api } from '../libs/api'
import { router } from 'expo-router'
import { useToast } from 'react-native-toast-notifications'

const AUTH_KEY = 'router-manager-token'

type User = {
  id: string
  name: string
  role: string
  bio: string
  avatar_url: string
}

type AuthContextData = {
  user: User | null
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
}

export const AuthContext = createContext<AuthContextData>({} as AuthContextData)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [userToken, setUserToken] = useState('')
  const toast = useToast()

  useProtectedRouter(userToken)

  useEffect(() => {
    async function loadUser() {
      const storageToken = await SecureStore.getItemAsync(AUTH_KEY)
      if (storageToken) {
        updateToken(storageToken)
        await getUser()
      }
    }

    loadUser()
  }, [])

  function updateToken(token: string) {
    setUserToken(token)
    api.defaults.headers.common.Authorization = `Bearer ${token}`
  }

  async function getUser() {
    try {
      const response = await api.get('/me')
      const { me } = response.data
      setUser(me)
    } catch (error) {
      console.error(error)
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post('/sessions', {
        email,
        password,
      })

      const { token } = response.data

      updateToken(token)
      await SecureStore.setItemAsync(AUTH_KEY, token)

      await getUser()
    } catch (error) {
      toast.show('Error when authenticating', {
        placement: 'top',
        type: 'danger',
      })
      throw error
    }
  }

  async function signOut() {
    await SecureStore.deleteItemAsync(AUTH_KEY)
    setUserToken('')
    setUser(null)
    router.replace('/sign-in')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
