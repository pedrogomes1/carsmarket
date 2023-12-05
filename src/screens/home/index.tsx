import { ImageBackground, ScrollView } from 'react-native'
import { Header } from '../../components/header'
import blurBg from '../../../src/assets/background.png'

import { styles } from './home.styles'

export function Home() {
  return (
    <ScrollView>
      <ImageBackground source={blurBg} style={{ flex: 1 }}>
        <Header />
      </ImageBackground>
    </ScrollView>
  )
}
