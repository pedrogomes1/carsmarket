import {
  Pressable,
  View,
  ImageBackground,
  ScrollView,
  Image,
  ActivityIndicator,
} from 'react-native'
import { router, useLocalSearchParams } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

import { Typography } from '@/components/ui/typography'
import { Button } from '@/components/ui/button'
import { useAdvertisementsDetails } from '@/hooks/useAdvertisementsDetails'
import { formatCurrency } from '@/utils/formatCurrency'

import blurBg from '@/assets/background.png'

import { colors } from '@/styles/theme'
import { styles } from '@/app/styles/advertisement-details.styles'

export default function AdvertisementsDetails() {
  const { id } = useLocalSearchParams()

  const { data, isFetching } = useAdvertisementsDetails(id as string)

  return (
    <ImageBackground source={blurBg} style={styles.background}>
      {isFetching ? (
        <ActivityIndicator style={styles.spinner} size="large" />
      ) : (
        <ScrollView style={styles.container}>
          <Pressable onPress={() => router.replace('/home')}>
            <Ionicons name="arrow-back" size={24} color={colors.gray_400} />
          </Pressable>

          <Typography
            text={`${data?.brand?.name} ${data?.model}`}
            weight="bold"
            style={styles.title}
          />

          <View style={styles.containerLocation}>
            <Ionicons name="location-sharp" size={20} color={colors.blue_300} />
            <Typography text={data?.city || ''} weight="semiBold" />
          </View>

          <Image
            alt={`${data?.model} picture`}
            source={{ uri: data?.picture }}
            style={styles.picture}
          />

          <Typography text="Overview" weight="bold" style={styles.title} />
          <Typography text={data?.description || ''} style={styles.subtitle} />

          <View style={styles.containerInfo}>
            <View style={styles.item}>
              <Image
                alt={`${data?.model} brand`}
                source={{
                  uri: data?.brand?.logo,
                }}
                style={styles.image}
              />
            </View>
            <View style={styles.separator} />
            <Typography
              text={formatCurrency(Number(data?.value))}
              weight="extraBold"
              style={styles.price}
            />
          </View>

          <Button.Touchable style={styles.touchableButton} activeOpacity={0.7}>
            <Ionicons name="logo-whatsapp" size={20} color={colors.white} />
            <Button.Text
              text="Whatsapp"
              weight="bold"
              style={styles.whatsAppText}
            />
          </Button.Touchable>
        </ScrollView>
      )}
    </ImageBackground>
  )
}
