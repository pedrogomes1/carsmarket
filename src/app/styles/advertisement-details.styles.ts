import { StyleSheet } from 'react-native'
import { colors, fontSize, radius, spacing } from '@/styles/theme'

const CARD_SIZE = 88
const IMAGE_SIZE = 30

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.darkness,
  },
  container: {
    marginTop: spacing[60],
    marginHorizontal: spacing[20],
  },
  containerHeader: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: spacing[12],
  },
  containerLocation: {
    flexDirection: 'row',
    marginLeft: 'auto',
    alignItems: 'center',
    gap: spacing[4],
  },
  title: {
    fontSize: fontSize.xl,
    marginTop: spacing[12],
  },
  subtitle: {
    fontSize: fontSize.sm,
    marginTop: spacing[8],
    lineHeight: spacing[24],
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
  },
  review: {
    textDecorationLine: 'underline',
    fontSize: fontSize.base,
    color: colors.gray_100,
  },
  starIcon: {
    marginRight: spacing[12],
  },
  ratingNumber: {
    fontSize: fontSize.lg,
  },
  picture: {
    marginTop: spacing[20],
    width: '100%',
    height: 200,
    objectFit: 'cover',
  },
  touchableButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing[12],
    height: spacing[48],
    borderRadius: radius[5],
    flex: 1,
    gap: spacing[8],
    backgroundColor: colors.green,
  },
  whatsAppText: {
    fontSize: fontSize.sm,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'center',
    width: CARD_SIZE,
    height: CARD_SIZE,
    borderColor: colors.gray_500,
    borderWidth: 1,
    borderRadius: radius[10],
    backgroundColor: colors.gray_700,
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[40],
    marginVertical: spacing[20],
  },
  separator: {
    borderLeftWidth: 0.5,
    borderWidth: 0.5,
    height: '60%',
    borderLeftColor: colors.gray_100,
  },
  price: {
    fontSize: fontSize.lg,
  },
})