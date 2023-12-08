import { StyleSheet } from 'react-native'
import { colors, fontSize, radius, spacing } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkness,
    padding: spacing[24],
  },
  logoImage: {
    width: 200,
    height: 150,
  },
  title: {
    fontSize: fontSize.xl,
    textAlign: 'center',
  },
  subtitle: {
    maxWidth: 260,
    textAlign: 'center',
    marginTop: spacing[20],
    marginBottom: spacing[12],
  },
  separatorContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: spacing[8],
    marginVertical: spacing[20],
    alignItems: 'center',
  },
  separator: {
    borderWidth: 0.3,
    flex: 1,
    borderColor: colors.white,
  },
  separatorText: {
    fontSize: fontSize.sm,
  },
  googleButton: {
    flexDirection: 'row',
    width: 160,
    padding: spacing[12],
    alignItems: 'center',
    textAlign: 'left',
    height: spacing[48],
    borderColor: colors.gray_500,
    borderWidth: 1,
    borderRadius: radius[10],
    backgroundColor: colors.gray_700,
  },
  googleText: {
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: fontSize.sm,
  },
})
