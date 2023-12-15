import { useState } from 'react'
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from 'react-native'
import { z } from 'zod'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Feather as FeatherIcon, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { SignUpFormData } from './sign-up.types'
import { signUpValidationSchema } from './sign-up.validation'

import { colors } from '@/styles/theme'
import { styles } from './sign-up.styles'

const USER_ICON = <FeatherIcon name="user" size={20} color={colors.gray_400} />
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

interface SignUpFormProps {
  onSignUp: (data: SignUpFormData) => void
  isPending: boolean
}

export type SignUpFormSchema = z.infer<typeof signUpValidationSchema>

export function SignUpForm({ onSignUp, isPending }: SignUpFormProps) {
  const [shouldHidePassword, setShouldHidePassword] = useState(true)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormSchema>({
    resolver: zodResolver(signUpValidationSchema),
  })

  const onSubmit = (data: SignUpFormSchema) => onSignUp(data)
  function handlePressVisiblePassword() {
    setShouldHidePassword((prev) => !prev)
  }

  return (
    <KeyboardAvoidingView
      style={styles.keyboardAvoidingView}
      enabled={Platform.OS === 'ios'}
      behavior="padding"
    >
      <Controller
        name="name"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input.Root style={styles.inputRoot}>
            <Input.Icon icon={USER_ICON} />
            <Input.Text
              autoFocus
              placeholder="Name"
              autoCapitalize="none"
              placeholderTextColor={colors.gray_400}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          </Input.Root>
        )}
      />
      {errors.name && (
        <Typography text={errors.name.message!} style={styles.textValidation} />
      )}
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

      <Controller
        name="confirmPassword"
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input.Root style={styles.inputRoot}>
            <Input.Icon icon={LOCK_ICON} />
            <Input.Text
              placeholder="Confirm password"
              secureTextEntry={shouldHidePassword}
              autoCapitalize="none"
              placeholderTextColor={colors.gray_400}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              returnKeyType="send"
            />
            <Input.Action
              onPress={handlePressVisiblePassword}
              icon={getPasswordIcon(shouldHidePassword)}
            />
          </Input.Root>
        )}
      />
      {errors.confirmPassword && (
        <Typography
          text={errors.confirmPassword.message!}
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
            <Typography
              text="Sign up"
              weight="semiBold"
              style={styles.textLoginButton}
            />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </KeyboardAvoidingView>
  )
}
