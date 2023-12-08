import { ScrollView, View } from 'react-native'

import { Typography } from '@/components/ui/typography'
import Icon from '@expo/vector-icons/AntDesign'

import CarIcon from '@/assets/car.svg'

import { colors } from '@/styles/theme'
import { styles } from './available-cars.style'

export function AvailableCars() {
  return (
    <ScrollView style={styles.container}>
      <Typography text="Available cars" weight="bold" style={styles.title} />
      {[0, 1, 2].map((car) => (
        <View key={car} style={styles.containerCar}>
          <CarIcon />
          <Typography text="Jaguar F Pace" weight="bold" style={styles.name} />
          <View style={styles.containerRating}>
            <Icon
              name="staro"
              size={18}
              color={colors.yellow}
              style={styles.starIcon}
            />
            <Typography text="4.9" weight="extraBold" />
            <Typography
              text="(120 Reviews)"
              weight="medium"
              style={styles.review}
            />
            <Typography text="$540.000" weight="bold" style={styles.price} />
          </View>
        </View>
      ))}
    </ScrollView>
  )
}
