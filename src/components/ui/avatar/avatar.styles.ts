import { StyleSheet } from 'react-native'
import { colors } from '@/styles/theme'

const AVATAR_SIZE = 42

export const styles = StyleSheet.create({
  container: {
    color: colors.white,
  },
  image: {
    width: AVATAR_SIZE,
    height: AVATAR_SIZE,
    resizeMode: 'cover',
    overflow: 'hidden',
    borderRadius: AVATAR_SIZE / 2,
  },
})
