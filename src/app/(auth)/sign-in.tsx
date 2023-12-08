import { TouchableOpacity, View, ImageBackground } from 'react-native'

import { Typography } from '@/components/ui/typography'
import { useAuth } from '@/hooks/useAuth'

import logo from '@/assets/logo.png'
import GoogleIcon from '@/assets/google.svg'

import { styles } from '../styles/sign-in.styles'
import { colors } from '@/styles/theme'
import { FormSchema, SignInForm } from '@/components/forms/sign-in'

export default function SignIn() {
  const { signIn } = useAuth()

  async function handleSignIn({ email, password }: FormSchema) {
    await signIn(email, password)
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={logo} style={styles.logoImage} />
      <Typography text="Welcome Back" weight="bold" style={styles.title} />
      <Typography
        text="Log in to your account using email or social networks"
        color={colors.gray_100}
        style={styles.subtitle}
      />

      <SignInForm onSignIn={handleSignIn} />

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
