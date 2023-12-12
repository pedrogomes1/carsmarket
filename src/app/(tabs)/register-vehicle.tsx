import { router } from 'expo-router'
import { ScrollView, ImageBackground, Pressable } from 'react-native'
import Icon from '@expo/vector-icons/Ionicons'

import {
  RegisterVehicleForm,
  RegisterVehicleFormSchema,
} from '@/components/forms/register-vehicle'
import { useRegisterVehicle } from '@/hooks/useRegisterVehicle'
import { useUploadFile } from '@/hooks/useUploadFile'

import blurBg from '@/assets/background.png'
import { colors } from '@/styles/theme'
import { styles } from '../styles/register-vehicle.styles'

export default function RegisterVehicle() {
  const { handleRegister, isPendingRegister } = useRegisterVehicle()
  const { handleUploadFile, isPendingUpload } = useUploadFile()

  async function handleRegisterNewVehicle(data: RegisterVehicleFormSchema) {
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

        <RegisterVehicleForm
          onRegister={handleRegisterNewVehicle}
          isPending={isPendingRegister || isPendingUpload}
        />
      </ScrollView>
    </ImageBackground>
  )
}
