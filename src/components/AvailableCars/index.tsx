import { ScrollView } from 'react-native'

import { Car } from './Car'

import { styles } from './available-cars.style'

export function AvailableCars() {
  return (
    <ScrollView style={styles.container}>
      {[0, 1, 2].map((car) => (
        <Car key={car} />
      ))}
    </ScrollView>
  )
}
