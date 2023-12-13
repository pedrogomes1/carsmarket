import React, { useState } from 'react'
import { FlatList, Pressable, Image } from 'react-native'

import { Typography } from '@/components/ui/typography'
import { useBrand } from '@/hooks/useBrand'

import { styles } from './brands.styles'

interface ItemData {
  id: string
  title: string
  logo: string
}

interface BransProps {
  onFilterByBrand: (id: string) => void
}

export const Brands = ({ onFilterByBrand }: BransProps) => {
  const [selectedId, setSelectedId] = useState<string>('')

  const { data } = useBrand()

  const brands = data?.brands.map((brand) => ({
    id: brand.id,
    title: brand.name,
    logo: brand.logo,
  }))

  function handleBrandPress(id: string) {
    setSelectedId(id === selectedId ? '' : id)
    onFilterByBrand(id === selectedId ? '' : id)
  }

  return (
    <FlatList
      data={brands}
      style={styles.list}
      renderItem={({ item }: { item: ItemData }) => {
        const isSelected = selectedId === item.id
        return (
          <Pressable
            onPress={() => handleBrandPress(item.id)}
            style={[styles.item, isSelected ? styles.selected : null]}
          >
            <Image
              alt={`${item.title} brand`}
              source={{ uri: item.logo }}
              style={styles.image}
            />
            <Typography text={item.title} />
          </Pressable>
        )
      }}
      contentContainerStyle={styles.items}
      keyExtractor={(item) => item.id}
      extraData={selectedId}
      horizontal
    />
  )
}
