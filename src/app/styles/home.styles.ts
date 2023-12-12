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
  rootInput: {
    marginTop: spacing[20],
  },
  containerSearchTitle: {
    marginTop: spacing[32],
    marginHorizontal: spacing[20],
  },
  searchTitle: {
    fontSize: spacing[20],
  },
})
