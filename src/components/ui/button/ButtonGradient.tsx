import { PropsWithChildren } from 'react'
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient'

export function ButtonGradient({
  children,
  ...rest
}: PropsWithChildren<LinearGradientProps>) {
  return (
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} {...rest}>
      {children}
    </LinearGradient>
  )
}
