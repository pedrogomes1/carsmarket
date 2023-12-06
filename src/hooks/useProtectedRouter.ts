import { router, useRootNavigation, useSegments } from 'expo-router'
import { useEffect, useState } from 'react'

export function useProtectedRouter(token: string) {
  const [isNavigationReady, setNavigationReady] = useState(false)

  const rootNavigation = useRootNavigation()
  const segments = useSegments()

  useEffect(() => {
    const unsubscribe = rootNavigation?.addListener('state', () => {
      setNavigationReady(true)
    })

    return () => {
      if (unsubscribe) {
        unsubscribe()
      }
    }
  }, [rootNavigation])

  useEffect(() => {
    if (!isNavigationReady) return

    const inAuthGroup = segments[0] === '(auth)'

    if (!token && !inAuthGroup) {
      router.replace('/sign-in')
    } else if (token && inAuthGroup) {
      router.replace('/home')
    }
  }, [token, isNavigationReady])
}
