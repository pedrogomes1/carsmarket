import { ImageBackground } from 'react-native'

import { styles } from './avatar.styles'

export function Avatar() {
  return (
    <ImageBackground
      style={styles.image}
      source={{ uri: 'https://github.com/pedrogomes1.png' }}
    />
  )
}
