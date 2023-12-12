import {
  View,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import SearchIcon from '@expo/vector-icons/AntDesign'

import { Header } from '@/components/ui/header'
import { Typography } from '@/components/ui/typography'
import { Input } from '@/components/ui/input'
import { Categories } from '@/components/screens/home/categories'
import { AvailableCars } from '@/components/screens/home/available-cars'
import { useAvailableCars } from '@/hooks/useAvailableCars'

import blurBg from '@/assets/background.png'
import { colors } from '@/styles/theme'
import { styles } from '../styles/home.styles'

const SEARCH_ICON = (
  <SearchIcon name="search1" size={24} color={colors.gray_400} />
)

export default function Home() {
  const { data, isPending } = useAvailableCars()

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

          <Input.Root style={styles.rootInput}>
            <Input.Icon icon={SEARCH_ICON} />
            <Input.Text
              placeholder="Search by model"
              autoCapitalize="none"
              inputMode="search"
              placeholderTextColor={colors.gray_400}
            />
          </Input.Root>
        </View>

        <Categories />

        {isPending ? (
          <ActivityIndicator size={18} />
        ) : (
          <AvailableCars advertisements={data} />
        )}
      </ScrollView>
    </ImageBackground>
  )
}
