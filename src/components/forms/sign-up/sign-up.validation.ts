import { z } from 'zod'

export const signUpValidationSchema = z
  .object({
    name: z
      .string({ required_error: 'Name is mandatory' })
      .min(1, 'name is mandatory'),
    email: z
      .string({ required_error: 'Email is mandatory' })
      .email('Enter a valid email address'),
    password: z
      .string({ required_error: 'Password is mandatory' })
      .min(5, 'Minimum of 5 characters'),
    confirmPassword: z
      .string({ required_error: 'Confirm password is mandatory' })
      .min(5, 'Minimum of 5 characters'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: "Password don't match",
  })
