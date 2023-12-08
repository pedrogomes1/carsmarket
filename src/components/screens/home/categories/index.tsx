import React, { useState } from 'react'
import { FlatList, TouchableOpacity } from 'react-native'
import { styles } from './categories.styles'
import { Typography } from '@/components/ui/typography'

import CategoryIcon from '@/assets/bmw.svg'

type ItemData = {
  id: string
  title: string
}

const DATA: ItemData[] = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'BMW',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'BMW',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'BMW',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d76',
    title: 'BMW',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d744',
    title: 'BMW',
  },
]

export const Categories = () => {
  const [selectedId, setSelectedId] = useState<string>()

  return (
    <FlatList
      data={DATA}
      style={styles.list}
      renderItem={({ item }: { item: ItemData }) => {
        return (
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <CategoryIcon />
            <Typography text={item.title} />
          </TouchableOpacity>
        )
      }}
      contentContainerStyle={styles.itens}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      horizontal
    />
  )
}
