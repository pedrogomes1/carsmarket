import { StyleSheet } from 'react-native'
import { spacing, colors, radius, fonts } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: spacing[8],
    alignItems: 'center',
    backgroundColor: colors.blue_900,
    marginTop: spacing[20],
    height: 50,
    borderRadius: radius[10],
    paddingRight: spacing[20],
    paddingLeft: spacing[8],
  },
  input: {
    backgroundColor: 'transparent',
    flex: 1,
    fontFamily: fonts.regular,
    color: colors.white,
  },
})
