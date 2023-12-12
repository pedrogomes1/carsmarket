import { useState } from 'react'
import { ActivityIndicator, TouchableOpacity, View, Image } from 'react-native'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Feather as FeatherIcon } from '@expo/vector-icons'
import { Dropdown } from 'react-native-element-dropdown'
import * as ImagePicker from 'expo-image-picker'
import MaskInput, { Masks } from 'react-native-mask-input'

import { useBrand } from '@/hooks/useBrand'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Typography } from '@/components/ui/typography'
import {
  BranchDropdown,
  RegisterVehicleFormData,
} from './register-vehicle.types'
import { RegisterVehicleValidationSchema } from './register-vehicle.validation'

import { colors } from '@/styles/theme'
import { styles } from './register-vehicle.styles'

interface RegisterVehicleFormProps {
  onRegister: (data: RegisterVehicleFormData) => void
  isPending: boolean
}

export type RegisterVehicleFormSchema = z.infer<
  typeof RegisterVehicleValidationSchema
>

export function RegisterVehicleForm({
  onRegister,
  isPending,
}: RegisterVehicleFormProps) {
  const [preview, setPreview] = useState<string | null>(null)
  const { data } = useBrand()

  const brands = data?.brands.map((brand) => ({
    label: brand.name,
    value: brand.id,
  }))

  const {
    control,
    setValue,
    reset,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
  } = useForm<RegisterVehicleFormSchema>({
    resolver: zodResolver(RegisterVehicleValidationSchema),
  })

  const onSubmit = (data: RegisterVehicleFormData) => {
    onRegister(data)
    if (isSubmitSuccessful) reset()
  }

  async function openImagePicker() {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 1,
      })
      if (result.assets?.[0]) {
        setPreview(result.assets[0].uri)
        setValue('picture', result.assets[0].uri)
      }
    } catch (err) {
      throw err
    }
  }

  return (
    <>
      <Controller
        name="description"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input.Label
              style={styles.inputLabel}
              text="Description"
              weight="semiBold"
            />
            <Input.Root style={styles.inputRoot}>
              <Input.Text
                style={styles.descriptionInput}
                autoCapitalize="none"
                placeholderTextColor={colors.gray_400}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                multiline
                numberOfLines={5}
              />
            </Input.Root>
          </>
        )}
      />
      {errors.description && (
        <Typography
          text={errors.description.message!}
          style={styles.textValidation}
        />
      )}

      <Typography style={styles.inputLabel} weight="semiBold" text="Brand" />
      <Controller
        name="brand"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Dropdown
            search
            data={brands || []}
            style={styles.dropdown}
            placeholderStyle={{ color: colors.white, fontSize: 14 }}
            inputSearchStyle={{ color: colors.gray_100, borderRadius: 5 }}
            selectedTextStyle={{ color: colors.white, fontSize: 14 }}
            containerStyle={{ backgroundColor: colors.darkness }}
            itemTextStyle={{ color: colors.white }}
            itemContainerStyle={{ backgroundColor: colors.darkness }}
            activeColor={colors.blue_900}
            labelField="label"
            valueField="value"
            placeholder=""
            searchPlaceholder="Search..."
            value={value}
            onChange={(branch: BranchDropdown) => onChange(branch.value)}
          />
        )}
      />

      {errors.brand && (
        <Typography
          text={errors.brand.message!}
          style={styles.textValidation}
        />
      )}

      <Controller
        name="model"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input.Label
              style={styles.inputLabel}
              weight="semiBold"
              text="Model"
            />
            <Input.Root>
              <Input.Text
                autoCapitalize="none"
                placeholderTextColor={colors.gray_400}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </Input.Root>
          </>
        )}
      />
      {errors.model && (
        <Typography
          text={errors.model.message!}
          style={styles.textValidation}
        />
      )}

      <View style={styles.containerInputs}>
        <Controller
          name="year"
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <View style={styles.containerInputView}>
              <Input.Label
                style={styles.inputLabel}
                weight="semiBold"
                text="Year of manufacture"
              />
              <Input.Root>
                <Input.Text
                  autoCapitalize="none"
                  placeholderTextColor={colors.gray_400}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  keyboardType="numeric"
                  value={value?.replace(/[^0-9]/g, '')}
                />
              </Input.Root>
              {errors.year && (
                <Typography
                  text={errors.year.message!}
                  style={styles.textValidation}
                />
              )}
            </View>
          )}
        />

        <Controller
          name="value"
          control={control}
          render={({ field: { onChange, value = '' } }) => (
            <View style={styles.containerInputView}>
              <Input.Label
                style={styles.inputLabel}
                weight="semiBold"
                text="Value"
              />
              <Input.Root>
                <MaskInput
                  value={String(value)}
                  onChangeText={onChange}
                  mask={Masks.BRL_CURRENCY}
                  keyboardType="numeric"
                  style={{ fontSize: 14, color: colors.white, flex: 1 }}
                  placeholderTextColor={colors.white}
                />
              </Input.Root>
              {errors.value && (
                <Typography
                  text={errors.value.message!}
                  style={styles.textValidation}
                />
              )}
            </View>
          )}
        />
      </View>

      <Controller
        name="city"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <>
            <Input.Label
              style={styles.inputLabel}
              weight="semiBold"
              text="City"
            />
            <Input.Root>
              <Input.Text
                autoCapitalize="none"
                placeholderTextColor={colors.gray_400}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </Input.Root>
          </>
        )}
      />
      {errors.city && (
        <Typography text={errors.city.message!} style={styles.textValidation} />
      )}

      <Typography style={styles.inputLabel} weight="semiBold" text="Picture" />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={openImagePicker}
        style={styles.containerImagePicker}
      >
        {preview ? (
          <View style={styles.containerPreview}>
            <TouchableOpacity
              style={styles.buttonDeletePreview}
              onPress={() => setPreview(null)}
            >
              <FeatherIcon name="trash-2" size={22} color={colors.red} />
            </TouchableOpacity>
            <Image
              alt="Preview image"
              source={{ uri: preview }}
              style={styles.previewImage}
            />
          </View>
        ) : (
          <View style={styles.containerSelectPreview}>
            <FeatherIcon name="image" size={30} color={colors.gray_100} />
            <Typography text="Select vehicle image" color={colors.gray_100} />
          </View>
        )}
      </TouchableOpacity>

      <Button.Gradient
        colors={[colors.purple, colors.blue_200]}
        style={styles.loginButton}
      >
        <Button.Touchable
          onPress={handleSubmit(onSubmit)}
          disabled={isPending}
          style={styles.touchableLogin}
        >
          {isPending ? (
            <ActivityIndicator size={18} />
          ) : (
            <Typography
              text="Register"
              weight="semiBold"
              style={styles.textLoginButton}
            />
          )}
        </Button.Touchable>
      </Button.Gradient>
    </>
  )
}
