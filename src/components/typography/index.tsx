import { Text, TextProps, TextStyle } from 'react-native'

enum FontTypes {
  'Regular' = 'Poppins-Regular',
  'Medium' = 'Poppins-Medium',
  'Bold' = 'Poppins-Bold',
}

type FontKeys = keyof typeof FontTypes

interface ITextProps extends TextProps {
  text: string
  type?: FontKeys
  style?: TextStyle
}

export function Typography({ text, type = 'Regular', style }: ITextProps) {
  const font = {
    fontFamily: FontTypes[type],
  }

  return <Text style={[font, style]}>{text}</Text>
}
