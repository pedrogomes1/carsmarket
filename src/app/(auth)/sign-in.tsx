import { View, ImageBackground } from 'react-native'
import { Link } from 'expo-router'

import { useAuth } from '@/hooks/useAuth'
import { Typography } from '@/components/ui/typography'
import { SignInFormSchema, SignInForm } from '@/components/forms/sign-in'

import logo from '@/assets/logo.png'

import { styles } from '../styles/sign-in.styles'
import { colors } from '@/styles/theme'

export default function SignIn() {
  const { signIn, isPending } = useAuth()

  async function handleSignIn({ email, password }: SignInFormSchema) {
    await signIn(email, password)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.logoImage} />
      <Typography text="Welcome Back" weight="bold" style={styles.title} />
      <Typography
        text="Log in to your account using your email"
        color={colors.gray_100}
        style={styles.subtitle}
      />

      <SignInForm onSignIn={handleSignIn} isPending={isPending} />

      <View style={styles.containerBaseboard}>
        <Typography
          text="First time here?"
          weight="medium"
          style={styles.text}
        />

        <Link href="/(auth)/sign-up">
          <Typography
            text=" Sign up"
            weight="medium"
            style={styles.text}
            color={colors.blue_300}
          />
        </Link>
      </View>
    </View>
  )
}
