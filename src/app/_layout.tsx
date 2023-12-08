import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { Stack, SplashScreen } from 'expo-router'
import { ToastProvider } from 'react-native-toast-notifications'
import { AuthProvider } from '@/contexts/auth-provider'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'Nunito-Regular': require('../../assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Medium': require('../../assets/fonts/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('../../assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('../../assets/fonts/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('../../assets/fonts/Nunito-ExtraBold.ttf'),
  })

  useEffect(() => {
    if (fontsLoaded) {
      setTimeout(() => {
        SplashScreen.hideAsync()
      }, 1000)
    }
  }, [fontsLoaded])

  if (!fontsLoaded && !fontError) {
    return null
  }

  return (
    <ToastProvider>
      <AuthProvider>
        <Stack screenOptions={{ headerShown: false }} />
      </AuthProvider>
    </ToastProvider>
  )
}
