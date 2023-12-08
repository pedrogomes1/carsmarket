import { useState } from 'react'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Feather as FeatherIcon, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { SignInFormData } from './sign-in.types'
import { signInValidationSchema } from './sign-in.validation'

import { colors } from '@/styles/theme'
import { styles } from './sign-in.styles'

const MAIL_ICON = <FeatherIcon name="mail" size={20} color={colors.gray_400} />
const LOCK_ICON = <FeatherIcon name="lock" size={20} color={colors.gray_400} />

function getPasswordIcon(isPasswordVisible: boolean) {
  return (
    <Ionicons
      name={`${isPasswordVisible ? 'md-eye-outline' : 'md-eye-off-outline'}`}
      size={20}
      color={colors.gray_400}
    />
  )
}

interface SignInFormProps {
  onSignIn: (data: SignInFormData) => void
  isPending: boolean
}

export type SignInFormSchema = z.infer<typeof signInValidationSchema>

export function SignInForm({ onSignIn, isPending }: SignInFormProps) {
  const [shouldHidePassword, setShouldHidePassword] = useState(true)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormSchema>({
    resolver: zodResolver(signInValidationSchema),
  })

  const onSubmit = (data: SignInFormSchema) => onSignIn(data)
  function handlePressVisiblePassword() {
    setShouldHidePassword((prev) => !prev)
  }

  return (
    <>
      <Controller
        name="email"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input.Root style={styles.inputRoot}>
            <Input.Icon icon={MAIL_ICON} />
            <Input.Text
              placeholder="Email"
              autoCapitalize="none"
              inputMode="email"
              placeholderTextColor={colors.gray_400}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </Input.Root>
        )}
      />
      {errors.email && (
        <Typography
          text={errors.email.message!}
          style={styles.textValidation}
        />
      )}

      <Controller
        name="password"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input.Root style={styles.inputRoot}>
            <Input.Icon icon={LOCK_ICON} />
            <Input.Text
              placeholder="Password"
              secureTextEntry={shouldHidePassword}
              autoCapitalize="none"
              placeholderTextColor={colors.gray_400}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
            <Input.Action
              onPress={handlePressVisiblePassword}
              icon={getPasswordIcon(shouldHidePassword)}
            />
          </Input.Root>
        )}
      />
      {errors.password && (
        <Typography
          text={errors.password.message!}
          style={styles.textValidation}
        />
      )}

      <LinearGradient
        colors={[colors.purple, colors.blue_200]}
        style={styles.loginButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity
          onPress={handleSubmit(onSubmit)}
          disabled={isPending}
          style={styles.touchableLogin}
        >
          {isPending ? (
            <ActivityIndicator size={18} />
          ) : (
            <Typography text="Log in" style={styles.textLoginButton} />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </>
  )
}
