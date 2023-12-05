import { Text, View } from 'react-native'
import { styles } from './header.styles'
import { Avatar } from '../avatar'
import { Typography } from '../typography'

export function Header() {
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.containerProfile}>
        <Typography text="Welcome," style={styles.text} />
        <Typography
          text="Pedro Gomes"
          style={[styles.text, styles.username]}
          type="SemiBold"
        />
      </View>
    </View>
  )
}
