import { useState } from 'react'
import {
  ActivityIndicator,
  Alert,
  TouchableOpacity,
  View,
  ImageBackground,
} from 'react-native'
import axios from 'axios'
import { Feather as FeatherIcon, Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'
import { useAuth } from '@/hooks/useAuth'

import logo from '@/assets/logo.png'
import GoogleIcon from '@/assets/google.svg'

import { styles } from '../styles/signIn.styles'
import { colors, fonts } from '@/styles/theme'

export default function SignIn() {
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isPasswordVisible, setIsPasswordVisible] = useState(false)
  const { signIn } = useAuth()

  async function handleSignIn() {
    setIsLoading(true)

    if (!email.trim() || !password.trim()) {
      return Alert.alert('Erro', 'todos os campos são obrigatórios')
    }
    try {
      await signIn(email, password)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        Alert.alert('Erro de autenticação', error?.response?.data.error)
      }
    } finally {
      setIsLoading(false)
    }
  }

  function handlePressVisiblePassword() {
    setIsPasswordVisible((prev) => !prev)
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={logo}
        style={{
          width: 200,
          height: 150,
        }}
      />
      <Typography text="Welcome Back" weight="bold" style={styles.title} />
      <Typography
        text="Log in to your account using email or social networks"
        color={colors.gray_100}
        style={styles.subtitle}
      />

      <Input.Root>
        <Input.Icon
          icon={<FeatherIcon name="mail" size={20} color={colors.gray_400} />}
        />
        <Input.Text
          placeholder="Email"
          autoCapitalize="none"
          inputMode="email"
          placeholderTextColor={colors.gray_400}
        />
      </Input.Root>

      <Input.Root>
        <Input.Icon
          icon={<FeatherIcon name="lock" size={20} color={colors.gray_400} />}
        />
        <Input.Text
          placeholder="Password"
          secureTextEntry={isPasswordVisible}
          autoCapitalize="none"
          placeholderTextColor={colors.gray_400}
        />
        <Input.Action
          onPress={handlePressVisiblePassword}
          icon={
            <Ionicons
              name={`${
                isPasswordVisible ? 'md-eye-outline' : 'md-eye-off-outline'
              }`}
              size={20}
              color={colors.gray_400}
            />
          }
        />
      </Input.Root>

      <LinearGradient
        colors={['#7474BF', '#348AC7']}
        style={styles.loginButton}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <TouchableOpacity onPress={handleSignIn} disabled={isLoading}>
          {isLoading ? (
            <ActivityIndicator size={18} />
          ) : (
            <Typography text="Log in" style={styles.textLoginButton} />
          )}
        </TouchableOpacity>
      </LinearGradient>

      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
        <Typography
          text="Or sign in with"
          weight="bold"
          style={styles.separatorText}
        />
        <View style={styles.separator} />
      </View>

      <TouchableOpacity style={styles.googleButton}>
        <GoogleIcon />
        <Typography style={styles.googleText} text="Google" />
      </TouchableOpacity>
    </View>
  )
}
