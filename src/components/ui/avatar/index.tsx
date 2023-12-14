import { ImageBackground } from 'react-native'

import { styles } from './avatar.styles'

export function Avatar({ avatar }: { avatar: string }) {
  return <ImageBackground style={styles.image} source={{ uri: avatar }} />
}
