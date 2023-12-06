import { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'

import { Home } from './src/screens/Home'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    'Nunito-Regular': require('./assets/fonts/Nunito-Regular.ttf'),
    'Nunito-Medium': require('./assets/fonts/Nunito-Medium.ttf'),
    'Nunito-SemiBold': require('./assets/fonts/Nunito-SemiBold.ttf'),
    'Nunito-Bold': require('./assets/fonts/Nunito-Bold.ttf'),
    'Nunito-ExtraBold': require('./assets/fonts/Nunito-ExtraBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <SafeAreaView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <Home />
    </SafeAreaView>
  )
}
