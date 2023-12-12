import { Text, TextProps, TextStyle } from 'react-native'
import { fonts } from '@/styles/theme'

type FontKeys = keyof typeof fonts

export interface TypographyProps extends TextProps {
  text: string
  weight?: FontKeys
  style?: TextStyle | TextStyle[]
  color?: TextStyle['color']
}

export function Typography({
  text,
  color = '#fff',
  weight = 'regular',
  style,
}: TypographyProps) {
  return (
    <Text style={[{ color, fontFamily: fonts[weight] }, style]}>{text}</Text>
  )
}
