import { View } from 'react-native'
import { styles } from './header.styles'
import { Avatar } from '../Avatar'
import { Typography } from '../Typography'

export function Header() {
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.containerProfile}>
        <Typography text="Welcome," />
        <Typography
          text="Pedro Gomes"
          style={styles.username}
          type="SemiBold"
        />
      </View>
    </View>
  )
}
