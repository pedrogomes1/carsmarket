import { ScrollView } from 'react-native'

import { Typography } from '@/components/Typography'
import { Car } from './Car'

import { styles } from './available-cars.style'

export function AvailableCars() {
  return (
    <ScrollView style={styles.container}>
      <Typography text="Available cars" weight="bold" style={styles.title} />
      {[0, 1, 2].map((car) => (
        <Car key={car} />
      ))}
    </ScrollView>
  )
}
