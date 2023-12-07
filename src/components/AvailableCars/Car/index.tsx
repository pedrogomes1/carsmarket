import { View, Text } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'
import { Typography } from '../../Typography'

import { styles } from './car.style'

import CarIcon from '../../../assets/car.svg'

export function Car() {
  return (
    <View style={styles.container}>
      <CarIcon />
      <Typography text="Jaguar F Pace" weight="bold" style={styles.name} />
      <View style={styles.containerRating}>
        <Icon name="staro" size={18} color="#EFAC4E" style={styles.starIcon} />
        <Typography text="4.9" weight="extraBold" />
        <Typography
          text="(120 Reviews)"
          weight="medium"
          style={styles.review}
        />
        <Typography text="$540.000" weight="bold" style={styles.price} />
      </View>
    </View>
  )
}
