import { z } from 'zod'

const regexRemoveCharacters = /[^0-9.-]+/g

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
    .min(1, 'Year is mandatory'),
  value: z
    .string({ required_error: 'Value is mandatory' })
    .refine(
      (value) => {
        return value?.replace(regexRemoveCharacters, '')
      },
      { message: 'Value is mandatory' },
    )
    .transform((value) => {
      return Number(value.replace(regexRemoveCharacters, ''))
    }),
  city: z
    .string({ required_error: 'City is mandatory' })
    .min(1, 'City is mandatory'),
})
