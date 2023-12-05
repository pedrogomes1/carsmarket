import { View, ImageBackground, ScrollView } from 'react-native'
import FeatherIcon from '@expo/vector-icons/Feather'

import { Header } from '../../components/Header'
import { Typography } from '../../components/Typography'
import { Input } from '../../components/Input'
import { Categories } from '../../components/Categories'

import blurBg from '../../../src/assets/background.png'

import { styles } from './home.styles'

const SEARCH_ICON = <FeatherIcon name="search" size={24} color="#80849399" />

export function Home() {
  return (
    <ImageBackground source={blurBg} style={styles.backgroundImage}>
      <ScrollView>
        <Header />

        <View style={styles.containerSearchTitle}>
          <Typography
            text="Select or search your"
            type="Bold"
            style={styles.searchTitle}
          />
          <Typography
            text="Desired vehicle"
            type="Bold"
            color="#6679C0"
            style={styles.searchTitle}
          />

          <Input.Root>
            <Input.Icon icon={SEARCH_ICON} />
            <Input.Text
              placeholder="Search"
              inputMode="search"
              placeholderTextColor="#80849399"
            />
          </Input.Root>
        </View>

        <Categories />
      </ScrollView>
    </ImageBackground>
  )
}
