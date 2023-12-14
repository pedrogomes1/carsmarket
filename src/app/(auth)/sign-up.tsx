import { View } from 'react-native'
import { Link } from 'expo-router'

import { useSignUp } from '@/hooks/useSignUp'
import { Typography } from '@/components/ui/typography'
import { SignUpForm } from '@/components/forms/sign-up'
import { SignUpFormData } from '@/components/forms/sign-up/sign-up.types'

import { styles } from '../styles/sign-up.styles'
import { colors } from '@/styles/theme'

export default function SignUp() {
  const { signUp, isPending } = useSignUp()

  async function handleSignUp({ name, email, password }: SignUpFormData) {
    try {
      await signUp({ name, email, password })
    } catch (error) {
      throw error
    }
  }

  return (
    <View style={styles.container}>
      <Typography
        text="Create new account"
        weight="bold"
        style={styles.title}
      />
      <Typography
        text="Set up your username and password"
        color={colors.gray_100}
        style={styles.subtitle}
      />

      <SignUpForm onSignUp={handleSignUp} isPending={isPending} />

      <View style={styles.containerBaseboard}>
        <Typography
          text="Already have an account?"
          weight="medium"
          style={styles.text}
        />

        <Link href="/(auth)/sign-in">
          <Typography
            text=" Log in"
            weight="medium"
            style={styles.text}
            color={colors.blue_300}
          />
        </Link>
      </View>
    </View>
  )
}
