import { StyleSheet } from 'react-native'
import { spacing, colors, radius } from '@styles/theme'

const CARD_SIZE = 88
const IMAGE_SIZE = 30

export const styles = StyleSheet.create({
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[4],
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderColor: colors.gray_500,
    borderWidth: 1,
    borderRadius: radius[10],
    marginTop: spacing[20],
    backgroundColor: colors.gray_700,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
})
