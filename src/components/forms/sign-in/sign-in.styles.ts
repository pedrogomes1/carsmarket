import { StyleSheet } from 'react-native'
import { colors, fontSize, radius, spacing } from '@/styles/theme'

export const styles = StyleSheet.create({
  inputRoot: {
    marginTop: spacing[20],
  },
  textValidation: {
    marginRight: 'auto',
    marginTop: spacing[4],
    color: colors.red,
  },
  loginButton: {
    width: '100%',
    marginVertical: spacing[20],
    height: spacing[48],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: radius[10],
  },
  textLoginButton: {
    fontSize: fontSize.lg,
  },
  touchableLogin: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
})
