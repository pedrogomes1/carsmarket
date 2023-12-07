import { StyleSheet } from 'react-native'
import { spacing, radius, colors, fontSize } from '@styles/theme'

export const styles = StyleSheet.create({
  container: {
    marginTop: spacing[20],
    paddingHorizontal: spacing[20],
    paddingVertical: spacing[20],
    borderWidth: 1,
    borderColor: colors.gray_500,
    borderRadius: radius[10],
    backgroundColor: colors.gray_700,
  },
  name: {
    marginTop: spacing[24],
  },
  starIcon: {
    marginRight: spacing[12],
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: spacing[12],
    gap: spacing[4],
  },
  review: {
    textDecorationLine: 'underline',
    fontSize: fontSize.xs,
    color: colors.gray_100,
  },
  price: {
    marginLeft: 'auto',
    fontSize: fontSize.lg,
  },
})
