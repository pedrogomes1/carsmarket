import { StyleSheet } from 'react-native'
import { colors, radius, spacing } from '@/styles/theme'

const CARD_SIZE = 88
const IMAGE_SIZE = 35

export const styles = StyleSheet.create({
  list: {
    marginHorizontal: spacing[20],
  },
  items: {
    gap: spacing[16],
  },
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
  selected: {
    borderColor: colors.gray_100,
    borderWidth: 2,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    objectFit: 'contain',
  },
})
