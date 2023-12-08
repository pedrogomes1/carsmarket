import { ReactNode } from 'react'
import { View, ViewProps } from 'react-native'

import { styles } from './input.styles'

interface IInputRootProps extends ViewProps {
  children: ReactNode
  style?: ViewProps['style']
}

export function InputRoot({ children, style, ...rest }: IInputRootProps) {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  )
}
