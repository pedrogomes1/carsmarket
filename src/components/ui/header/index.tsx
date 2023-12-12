import { View, TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'

import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'
import { useAuth } from '@/hooks/useAuth'

import { styles } from './header.styles'
import { colors } from '@/styles/theme'

export function Header() {
  const { signOut, user } = useAuth()
  return (
    <View style={styles.container}>
      <Avatar />
      <View style={styles.containerProfile}>
        <Typography text="Welcome," />
        <Typography
          text={user?.name || ''}
          style={styles.username}
          weight="bold"
        />
      </View>
      <TouchableOpacity onPress={signOut} style={styles.logoutButton}>
        <Icon name="logout" size={22} color={colors.white} />
      </TouchableOpacity>
    </View>
  )
}
