import { ScrollView, View, Image } from 'react-native'

import { Typography } from '@/components/ui/typography'
import Icon from '@expo/vector-icons/AntDesign'

import { formatCurrency } from '@/utils/formatCurrency'
import { Advertisements } from '@/hooks/useAvailableCars'

import { colors, spacing } from '@/styles/theme'
import { styles } from './available-cars.style'

interface AvailableCarsProps {
  advertisements?: Advertisements['advertisements']
}

export function AvailableCars({ advertisements }: AvailableCarsProps) {
  return (
    <ScrollView style={styles.container}>
      <Typography text="Available cars" weight="bold" style={styles.title} />
      {advertisements?.map((advertisements) => (
        <View key={advertisements.id} style={styles.containerCar}>
          <Image
            alt={`${advertisements.model} car picture`}
            source={{ uri: advertisements.picture }}
            style={styles.image}
          />
          <Typography
            text={advertisements.model}
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
              text={formatCurrency(advertisements.value)}
              weight="bold"
              style={styles.price}
            />
          </View>
        </View>
      ))}
    </ScrollView>
  )
}
