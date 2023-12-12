import React, { useState } from 'react'
import { FlatList, TouchableOpacity, Image } from 'react-native'

import { Typography } from '@/components/ui/typography'
import { useBrand } from '@/hooks/useBrand'

import { styles } from './categories.styles'

interface ItemData {
  id: string
  title: string
  logo: string
}

export const Categories = () => {
  const [selectedId, setSelectedId] = useState<string>()

  const { data } = useBrand()

  const brands = data?.brands.map((brand) => ({
    id: brand.id,
    title: brand.name,
    logo: brand.logo,
  }))

  return (
    <FlatList
      data={brands}
      style={styles.list}
      renderItem={({ item }: { item: ItemData }) => {
        return (
          <TouchableOpacity onPress={() => {}} style={styles.item}>
            <Image
              alt={`${item.title} brand`}
              source={{ uri: item.logo }}
              style={styles.image}
            />
            <Typography text={item.title} />
          </TouchableOpacity>
        )
      }}
      contentContainerStyle={styles.items}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      horizontal
    />
  )
}
