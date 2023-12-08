import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { ActivityIndicator, TouchableOpacity } from 'react-native'
import { z } from 'zod'
import { Feather as FeatherIcon, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { Input } from '@/components/ui/input'
import { Typography } from '@/components/ui/typography'
import { zodResolver } from '@hookform/resolvers/zod'

import { styles } from './sign-in.styles'
import { colors } from '@/styles/theme'

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

type SignInFormData = {
  email: string
  password: string
}

const validationSchema = z.object({
  email: z
    .string({ required_error: 'Email is mandatory' })
    .email('Enter a valid email address'),
  password: z
    .string({ required_error: 'Password is mandatory' })
    .min(5, 'Minimum of 5 characters'),
})

interface SignInFormProps {
  onSignIn: (data: SignInFormData) => void
}

export type FormSchema = z.infer<typeof validationSchema>

export function SignInForm({ onSignIn }: SignInFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [shouldHidePassword, setShouldHidePassword] = useState(true)

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(validationSchema),
  })

  const onSubmit = (data: FormSchema) => onSignIn(data)
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
          disabled={isLoading}
          style={styles.touchableLogin}
        >
          {isLoading ? (
            <ActivityIndicator size={18} />
          ) : (
            <Typography text="Log in" style={styles.textLoginButton} />
          )}
        </TouchableOpacity>
      </LinearGradient>
    </>
  )
}
