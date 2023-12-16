import { memo } from 'react'
import { View, TouchableOpacity, Alert } from 'react-native'
import Icon from '@expo/vector-icons/MaterialIcons'

import { Avatar } from '@/components/ui/avatar'
import { Typography } from '@/components/ui/typography'
import { useAuth } from '@/hooks/useAuth'

import { styles } from './header.styles'
import { colors } from '@/styles/theme'

export const Header = memo(function Header() {
  const { signOut, user } = useAuth()

  function confirmSignOut() {
    Alert.alert(
      'Exit',
      'Do you really want to exit the application?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Exit', onPress: () => signOut() },
      ],
      { userInterfaceStyle: 'dark' },
    )
  }

  return (
    <View style={styles.container}>
      <Avatar avatar={user?.photo || undefined} />
      <View style={styles.containerProfile}>
        <Typography text="Welcome," />
        <Typography
          text={user?.name || ''}
          style={styles.username}
          weight="bold"
        />
      </View>
      <TouchableOpacity onPress={confirmSignOut} style={styles.logoutButton}>
        <Icon name="logout" size={22} color={colors.white} />
      </TouchableOpacity>
    </View>
  )
})
