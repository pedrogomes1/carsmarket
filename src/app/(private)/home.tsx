import { View, ImageBackground, ScrollView } from 'react-native'
import SearchIcon from '@expo/vector-icons/AntDesign'

import { Header } from '@components/Header'
import { Typography } from '@components/Typography'
import { Input } from '@components/Input'
import { Categories } from '@components/Categories'
import { AvailableCars } from '@components/AvailableCars'

import blurBg from '@assets/background.png'
import { colors } from '@styles/theme'
import { styles } from './home.styles'

const SEARCH_ICON = (
  <SearchIcon name="search1" size={24} color={colors.gray_400} />
)

export default function Home() {
  return (
    <ImageBackground source={blurBg} style={styles.backgroundImage}>
      <ScrollView>
        <Header />

        <View style={styles.containerSearchTitle}>
          <Typography
            text="Select or search your"
            weight="bold"
            style={styles.searchTitle}
          />
          <Typography
            text="Desired vehicle"
            weight="extraBold"
            color={colors.blue_300}
            style={styles.searchTitle}
          />

          <Input.Root>
            <Input.Icon icon={SEARCH_ICON} />
            <Input.Text
              placeholder="Search"
              autoCapitalize="none"
              inputMode="search"
              placeholderTextColor={colors.gray_400}
            />
          </Input.Root>
        </View>

        <Categories />

        <AvailableCars />
      </ScrollView>
    </ImageBackground>
  )
}
