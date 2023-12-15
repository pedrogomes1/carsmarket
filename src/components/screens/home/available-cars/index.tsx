import { ScrollView, View, Image, Pressable } from 'react-native'
import { router } from 'expo-router'
import Icon from '@expo/vector-icons/AntDesign'
import { Ionicons } from '@expo/vector-icons'

import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'

import { Advertisement, Advertisements } from '@/hooks/useAvailableCars'

import { colors } from '@/styles/theme'
import { styles } from './available-cars.style'
import { formatCurrency } from '@/utils/formatCurrency'

interface AvailableCarsProps {
  advertisements?: Advertisements['advertisements']
}

export function AvailableCars({ advertisements }: AvailableCarsProps) {
  function handleNavigateToAdvertisementsDetail({ id }: Advertisement) {
    router.replace({
      pathname: `/(auth)/advertisements-details/${id}`,
      params: { id },
    } as never)
  }

  return (
    <ScrollView style={styles.container}>
      <Typography text="Available cars" weight="bold" style={styles.title} />
      {advertisements?.map((advertisement) => (
        <Pressable
          key={advertisement.id}
          onPress={() => handleNavigateToAdvertisementsDetail(advertisement)}
          style={styles.containerCar}
        >
          <Image
            alt={`${advertisement.model} car picture`}
            source={{ uri: advertisement.picture }}
            style={styles.image}
          />
          <View style={styles.containerInfo}>
            <View style={styles.containerTitle}>
              <Image
                alt={`${advertisement.brand.logo} car picture`}
                source={{ uri: advertisement.brand.logo }}
                style={styles.imageLogo}
              />
              <Typography
                text={advertisement.brand.name}
                weight="extraBold"
                style={styles.name}
              />
              <Typography
                text={advertisement.model}
                weight="extraBold"
                style={styles.modelText}
              />
              <View style={styles.containerYear}>
                <Typography
                  text={advertisement.year}
                  weight="medium"
                  style={styles.review}
                />
              </View>
            </View>
            <View style={styles.containerSubInfo}>
              <Typography
                text={formatCurrency(advertisement.value)}
                weight="bold"
                style={styles.price}
              />
              <View style={styles.containerLocation}>
                <Ionicons
                  name="location-sharp"
                  size={20}
                  color={colors.blue_300}
                />
                <Typography text="Rio de Janeiro" weight="semiBold" />
              </View>
            </View>
            <Button.Touchable
              onPress={() =>
                handleNavigateToAdvertisementsDetail(advertisement)
              }
              style={styles.touchableRedirect}
            >
              <Button.Text text="Details" />
              <Icon name="arrowright" size={18} color={colors.white} />
            </Button.Touchable>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  )
}
