import { View, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'

import { Avatar } from '../Avatar'
import { Typography } from '../Typography'
import { useAuth } from '../../hooks/useAuth'

import { styles } from './header.styles'

export function Header() {
  const { signOut } = useAuth()
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.containerProfile}>
        <Typography text="Welcome," />
        <Typography text="Pedro Gomes" style={styles.username} weight="bold" />
      </View>
      <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
        <Icon name="logout" size={22} color="#fff" />
      </TouchableOpacity>
    </View>
  )
}
