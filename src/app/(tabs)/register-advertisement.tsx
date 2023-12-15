import { router } from 'expo-router'
import { ScrollView, ImageBackground, Pressable } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

import {
  RegisterAdvertisementForm,
  RegisterAdvertisementFormSchema,
} from '@/components/forms/register-advertisement'
import { useRegisterAdvertisement } from '@/hooks/useRegisterAdvertisement'
import { useUploadFile } from '@/hooks/useUploadFile'

import blurBg from '@/assets/background.png'
import { colors } from '@/styles/theme'
import { styles } from '@/app/styles/register-advertisement.styles'

export default function RegisterAdvertisement() {
  const { handleRegister, isPendingRegister } = useRegisterAdvertisement()
  const { handleUploadFile, isPendingUpload } = useUploadFile()

  async function handleRegisterNewAdvertisement(
    data: RegisterAdvertisementFormSchema,
  ) {
    try {
      const picture = await handleUploadFile(data.picture)
      handleRegister({ ...data, picture })
    } catch (error) {
      throw error
    }
  }
  return (
    <ImageBackground source={blurBg} style={styles.background}>
      <ScrollView style={styles.container}>
        <Pressable onPress={() => router.replace('/home')}>
          <Icon
            name="arrow-back"
            size={24}
            color={colors.gray_400}
            style={styles.arrow}
          />
        </Pressable>

        <RegisterAdvertisementForm
          onRegister={handleRegisterNewAdvertisement}
          isPending={isPendingRegister || isPendingUpload}
        />
      </ScrollView>
    </ImageBackground>
  )
}
