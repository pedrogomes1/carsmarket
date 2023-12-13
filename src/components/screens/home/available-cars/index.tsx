import { ScrollView, View, Image, Pressable } from 'react-native'
import { router } from 'expo-router'

import { Typography } from '@/components/ui/typography'
import Icon from '@expo/vector-icons/AntDesign'

import { formatCurrency } from '@/utils/formatCurrency'
import { Advertisement, Advertisements } from '@/hooks/useAvailableCars'

import { colors, spacing } from '@/styles/theme'
import { styles } from './available-cars.style'

interface AvailableCarsProps {
  advertisements?: Advertisements['advertisements']
}

export type ParamList = {
  Entry: { nth_visitor: number }
  Greet: { message: string }
}

export function AvailableCars({ advertisements }: AvailableCarsProps) {
  function handleNavigateToAdvertisementsDetail(advertisement: Advertisement) {
    const {
      picture,
      description,
      model,
      brand: { logo },
      value,
      city,
    } = advertisement
    router.push({
      pathname: '/(auth)/advertisements-details',
      params: { picture, description, model, logo, value, city },
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
          <Typography
            text={advertisement.model}
            weight="bold"
            style={styles.name}
          />
          <View style={styles.containerRating}>
            <Icon
              name="staro"
              size={spacing[20]}
              color={colors.yellow}
              style={styles.starIcon}
            />
            <Typography text="4.9" weight="extraBold" />
            <Typography
              text="(120 Reviews)"
              weight="medium"
              style={styles.review}
            />
            <Typography
              text={formatCurrency(advertisement.value)}
              weight="bold"
              style={styles.price}
            />
          </View>
        </Pressable>
      ))}
    </ScrollView>
  )
}
