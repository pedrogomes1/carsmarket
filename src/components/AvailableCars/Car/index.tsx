import { View, Text } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'
import { Typography } from '../../Typography'

import { styles } from './car.style'

import CarIcon from '../../../assets/car.svg'

export function Car() {
  return (
    <View style={styles.container}>
      <CarIcon />
      <Typography text="Jaguar F Pace" type="Bold" style={styles.name} />
      <View style={styles.containerRating}>
        <Icon name="staro" size={18} color="#EFAC4E" style={styles.starIcon} />
        <Typography text="4.9" type="ExtraBold" />
        <Typography text="(120 Reviews)" type="Medium" style={styles.review} />
        <Typography text="$540.000" type="Bold" style={styles.price} />
      </View>
    </View>
  )
}
