import { Text, TextProps, TextStyle } from 'react-native'

enum FontTypes {
  'Regular' = 'Poppins-Regular',
  'Medium' = 'Poppins-Medium',
  'SemiBold' = 'Poppins-SemiBold',
  'Bold' = 'Poppins-Bold',
}

type FontKeys = keyof typeof FontTypes

interface ITextProps extends TextProps {
  text: string
  type?: FontKeys
  style?: TextStyle | TextStyle[]
  color?: TextStyle['color']
}

export function Typography({
  text,
  color = '#fff',
  type = 'Regular',
  style,
}: ITextProps) {
  return (
    <Text style={[{ color, fontFamily: FontTypes[type] }, style]}>{text}</Text>
  )
}
