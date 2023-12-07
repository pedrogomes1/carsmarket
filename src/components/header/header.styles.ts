import { StyleSheet } from 'react-native'
import { spacing, fontSize } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[60],
    marginHorizontal: spacing[20],
  },
  containerProfile: {
    flexDirection: 'column',
    marginLeft: spacing[20],
  },
  username: {
    fontSize: fontSize.sm,
  },
  logoutButton: {
    marginLeft: 'auto',
  },
})
