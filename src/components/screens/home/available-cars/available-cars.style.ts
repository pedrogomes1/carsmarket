import { StyleSheet } from 'react-native'
import { spacing, fontSize, colors, radius } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    marginHorizontal: spacing[20],
    marginTop: spacing[20],
    paddingBottom: spacing[40],
  },
  title: {
    fontSize: fontSize.lg,
  },
  image: {
    width: '100%',
    height: 150,
    objectFit: 'cover',
    zIndex: 1,
  },
  imageLogo: { width: 20, height: 20 },
  containerCar: {
    marginTop: spacing[20],
    paddingHorizontal: spacing[20],
    paddingVertical: spacing[20],
    borderWidth: 1,
    borderColor: colors.gray_500,
    borderRadius: radius[10],
    backgroundColor: colors.gray_700,
  },
  containerInfo: {
    width: '100%',
    gap: spacing[8],
    marginTop: spacing[24],
  },
  modelText: {
    fontSize: fontSize.lg,
    color: colors.blue_200,
    marginRight: spacing[4],
  },
  containerSubInfo: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: spacing[8],
  },
  containerLocation: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[4],
  },
  name: {
    fontSize: fontSize.lg,
  },
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing[8],
  },
  starIcon: {
    marginRight: spacing[12],
  },
  review: {
    fontSize: fontSize.xs,
  },
  price: {
    fontSize: fontSize.lg,
  },
  containerYear: {
    borderWidth: 1,
    padding: spacing[4],
    borderColor: colors.gray_400,
    borderRadius: radius[5],
    marginLeft: 'auto',
  },
  touchableRedirect: {
    flexDirection: 'row',
    gap: 5,
    backgroundColor: colors.gray_700,
    padding: spacing[12],
    borderRadius: radius[5],
    borderWidth: 0.5,
    borderColor: colors.gray_500,
    justifyContent: 'center',
    marginTop: spacing[8],
  },
})
