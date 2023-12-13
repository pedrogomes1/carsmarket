import {
  Pressable,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { Ionicons, AntDesign } from '@expo/vector-icons'

import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import Icon from '@expo/vector-icons/Ionicons'

import blurBg from '@/assets/background.png'

import { styles } from '../styles/advertisement-details.styles'
import { colors, spacing } from '@/styles/theme'
import { formatCurrency } from '@/utils/formatCurrency'

type SearchParamType = {
  picture: string
  description: string
  model: string
}

export default function AdvertisementsDetails() {
  const { description, model, picture, logo, value, city } =
    useLocalSearchParams<SearchParamType & { [key: string]: string }>()

  return (
    <ImageBackground source={blurBg} style={styles.background}>
      <ScrollView style={styles.container}>
        <Pressable onPress={() => router.replace('/home')}>
          <Ionicons name="arrow-back" size={24} color={colors.gray_400} />
        </Pressable>
        <Typography text={model} weight="bold" style={styles.title} />

        <View style={styles.containerHeader}>
          <View style={styles.containerRating}>
            <AntDesign
              name="staro"
              size={spacing[24]}
              color={colors.yellow}
              style={styles.starIcon}
            />
            <Typography
              text="4.9"
              weight="extraBold"
              style={styles.ratingNumber}
            />
            <Typography
              text="(120 Reviews)"
              weight="medium"
              style={styles.review}
            />
          </View>
          <View style={styles.containerLocation}>
            <Ionicons name="location-sharp" size={20} color={colors.blue_300} />
            <Typography text={city} weight="semiBold" />
          </View>
        </View>

        <Image
          alt={`${model} picture`}
          source={{ uri: picture }}
          style={styles.picture}
        />

        <Typography text="Overview" weight="semiBold" style={styles.title} />
        <Typography text={description} style={styles.subtitle} />

        <View style={styles.containerInfo}>
          <View style={styles.item}>
            <Image
              alt={`${model} brand`}
              source={{
                uri: logo,
              }}
              style={styles.image}
            />
          </View>
          <View style={styles.separator} />
          <Typography
            text={formatCurrency(Number(value))}
            weight="extraBold"
            style={styles.price}
          />
        </View>

        <Button.Touchable style={styles.touchableButton} activeOpacity={0.7}>
          <Icon name="logo-whatsapp" size={20} color={colors.white} />
          <Button.Text
            text="Whatsapp"
            weight="bold"
            style={styles.whatsAppText}
          />
        </Button.Touchable>
      </ScrollView>
    </ImageBackground>
  )
}
