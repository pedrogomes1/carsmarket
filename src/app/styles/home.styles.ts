import { StyleSheet } from 'react-native'
import { colors, spacing } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blue_900,
  },
  backgroundImage: {
    flex: 1,
  },
  containerSearchTitle: {
    marginTop: spacing[32],
    marginRight: spacing[20],
    marginLeft: spacing[20],
  },
  searchTitle: {
    fontSize: spacing[20],
  },
})
