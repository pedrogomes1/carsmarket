import { StyleSheet } from 'react-native'
import { colors, fontSize, radius, spacing } from '@/styles/theme'

export const styles = StyleSheet.create({
  inputRoot: {
    height: 100,
  },
  inputLabel: {
    fontSize: fontSize.sm,
    marginTop: spacing[12],
    marginBottom: spacing[8],
  },
  descriptionInput: {
    flex: 1,
    paddingTop: spacing[12],
    textAlignVertical: 'top',
    alignSelf: 'flex-start',
    color: colors.white,
    lineHeight: spacing[20],
  },
  dropdown: {
    backgroundColor: colors.blue_900,
    height: spacing[48],
    borderRadius: radius[10],
    paddingHorizontal: spacing[12],
  },
  textValidation: {
    marginRight: 'auto',
    marginTop: spacing[4],
    marginBottom: spacing[8],
    color: colors.red,
  },
  containerImagePicker: {
    height: 180,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radius[10],
    borderColor: colors.gray_500,
    borderWidth: 1,
    borderStyle: 'dashed',
  },
  containerPreview: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },

  buttonDeletePreview: {
    position: 'absolute',
    right: 0,
    zIndex: 2,
  },
  previewImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    zIndex: 1,
  },
  containerSelectPreview: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing[12],
  },
  containerInputs: {
    flexDirection: 'row',
    gap: spacing[20],
  },
  containerInputView: {
    flex: 1,
    flexDirection: 'column',
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
