import { useState } from 'react'
import {
  View,
  ImageBackground,
  ActivityIndicator,
  ScrollView,
} from 'react-native'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

import { Header } from '@/components/ui/header'
import { Typography } from '@/components/ui/typography'
import { Input } from '@/components/ui/input'
import { Brands } from '@/components/screens/home/brands'
import { AvailableCars } from '@/components/screens/home/available-cars'
import { Advertisement, useAvailableCars } from '@/hooks/useAvailableCars'

import blurBg from '@/assets/background.png'
import { colors } from '@/styles/theme'
import { styles } from '../styles/home.styles'

const SEARCH_ICON = (
  <AntDesign name="search1" size={24} color={colors.gray_400} />
)

export default function Home() {
  const [filteredAdvertisements, setFilteredAdvertisements] =
    useState<Advertisement[]>()

  const [isFiltering, setIsFiltering] = useState(false)

  const { data: advertisements, isPending } = useAvailableCars()

  function handleFilterByModel(text: string) {
    if (!text) return setIsFiltering(false)
    setIsFiltering(true)

    const searchText = text.toLowerCase()

    const newAdvertisements = advertisements?.filter(({ model }) =>
      model.toLowerCase().includes(searchText),
    )
    setFilteredAdvertisements(newAdvertisements)
  }

  function handleFilterByBrand(brandId: string) {
    if (!brandId) return setIsFiltering(false)
    setIsFiltering(true)

    const newAdvertisements = advertisements?.filter(
      ({ brand }) => brand.id === brandId,
    )

    setFilteredAdvertisements(newAdvertisements)
  }

  const advertisementsData = isFiltering
    ? filteredAdvertisements
    : advertisements

  if (isPending) return <ActivityIndicator size={18} />

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
              onChangeText={handleFilterByModel}
            />
          </Input.Root>
        </View>

        <Brands onFilterByBrand={handleFilterByBrand} />

        {advertisementsData?.length ? (
          <AvailableCars advertisements={advertisementsData} />
        ) : (
          <View style={styles.containerFilterNotFound}>
            <MaterialCommunityIcons
              color={colors.white}
              size={40}
              name="filter-remove-outline"
            />
            <Typography
              text="No advertisements found by this filter."
              style={styles.notFoundText}
            />
          </View>
        )}
      </ScrollView>
    </ImageBackground>
  )
}
