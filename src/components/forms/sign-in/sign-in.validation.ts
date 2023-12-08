import { z } from 'zod'

export const signInValidationSchema = z.object({
  email: z
    .string({ required_error: 'Email is mandatory' })
    .email('Enter a valid email address'),
  password: z
    .string({ required_error: 'Password is mandatory' })
    .min(5, 'Minimum of 5 characters'),
})
