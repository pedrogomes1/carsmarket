import { ReactNode } from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

export interface ButtonProps extends TouchableOpacityProps {
  children: ReactNode
}

export function TouchableButton({ children, ...props }: ButtonProps) {
  return <TouchableOpacity {...props}>{children}</TouchableOpacity>
}
