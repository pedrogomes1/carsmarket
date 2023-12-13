import { transformCurrencyToNumber } from '@/utils/transformCurrencyToNumber'
import { z } from 'zod'

export const RegisterVehicleValidationSchema = z.object({
  description: z
    .string({ required_error: 'Description is mandatory' })
    .min(1, 'Description is mandatory'),
  picture: z
    .string({ required_error: 'Picture is mandatory' })
    .min(1, 'Picture is mandatory'),
  brand: z
    .string({ required_error: 'Brand is mandatory' })
    .min(1, 'Brand is mandatory'),
  model: z
    .string({ required_error: 'Model is mandatory' })
    .min(1, 'Model is mandatory'),
  year: z
    .string({ required_error: 'Year is mandatory' })
    .min(1, 'Year is mandatory')
    .transform((value) => {
      return Number(value)
    }),
  value: z
    .string({ required_error: 'Value is mandatory' })
    .refine(
      (value) => {
        return !!transformCurrencyToNumber(value)
      },
      { message: 'Value is mandatory' },
    )
    .transform((value) => {
      return transformCurrencyToNumber(value)
    }),
  city: z
    .string({ required_error: 'City is mandatory' })
    .min(1, 'City is mandatory'),
})
