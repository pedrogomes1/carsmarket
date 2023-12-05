import { ReactNode } from 'react'
import { View } from 'react-native'

import { styles } from './input.styles'

interface IInputRootProps {
  children: ReactNode
}

export function InputRoot({ children }: IInputRootProps) {
  return <View style={styles.container}>{children}</View>
}
