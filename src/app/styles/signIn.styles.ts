import { StyleSheet } from 'react-native'
import { colors, fontSize, radius, spacing } from '@/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkness,
    padding: spacing[24],
    gap: spacing[20],
  },
  title: {
    fontSize: fontSize.xl,
    textAlign: 'center',
  },
  subtitle: {
    maxWidth: 260,
    textAlign: 'center',
  },
  loginButton: {
    width: '100%',
    height: spacing[48],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius[10],
  },
  textLoginButton: {
    fontSize: fontSize.lg,
  },
  separatorContainer: {
    width: '100%',
    flexDirection: 'row',
    gap: spacing[8],
    marginTop: spacing[20],
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
