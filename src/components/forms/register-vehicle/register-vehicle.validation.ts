import { z } from 'zod'

const regexRemoveCharacters = /[^0-9.-]+/g

export const RegisterVehicleValidationSchema = z.object({
  description: z.string({ required_error: 'Description is mandatory' }),
  picture: z.string({ required_error: 'Picture is mandatory' }),
  brand: z.string({ required_error: 'Brand is mandatory' }),
  model: z.string({ required_error: 'Model is mandatory' }),
  year: z.string({ required_error: 'Year is mandatory' }),
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
  city: z.string({ required_error: 'City is mandatory' }),
})
