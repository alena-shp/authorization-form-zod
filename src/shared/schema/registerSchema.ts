import { z } from 'zod'
import { isUniqueSignInName, isUniqueSignInEmail } from '@/shared/utils'

export const registerSchema = z
	.object({
		username: z
			.string()
			.min(2, { message: 'Username must be more than 2 characters' })
			.max(20, 'Username must be less than 20 characters')
			.transform((v) => v.toLowerCase().replace(/\s+/g, '_'))
			.refine((value) => isUniqueSignInName(value), {
				message: 'User with this username already exists'
			}),
		email: z
			.string()
			.email('Incorrect email')
			.refine((value) => isUniqueSignInEmail(value), {
				message: 'User with this email already exists'
			}),
		password: z.string().min(6, 'Password must be more than 6 characters'),
		confirmPassword: z.string().min(6, 'Repeat password'),
		terms: z.literal(true, {
			errorMap: () => ({ message: 'Required field' })
		})
	})
	.refine((data) => data.password === data.confirmPassword, {
		path: ['confirmPassword'],
		message: 'Password mismatch'
	})

export type RegisterSchema = z.infer<typeof registerSchema>
