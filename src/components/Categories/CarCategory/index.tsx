import React from 'react'
import { TouchableOpacity } from 'react-native'
import { styles } from './car-category.styles'
import { Typography } from '@/components/Typography'

import CategoryIcon from '@/assets/bmw.svg'

type ItemProps = {
  title: string
  onPress: () => void
  isSelected: boolean
}

export const CarCategory = ({ title, onPress, isSelected }: ItemProps) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.item}>
      <CategoryIcon />
      <Typography text={title} />
    </TouchableOpacity>
  )
}
