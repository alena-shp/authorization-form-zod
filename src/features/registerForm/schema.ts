import { z } from 'zod'
import { isUniqueSignInName, isUniqueSignInEmail } from '@/shared/helpers'

export const schema = z
	.object({
		username: z
			.string()
			.min(2, { message: 'Username must be more than 2 characters' })
			.max(20, 'Username must be less than 20 characters')
			.transform((v) => v.toLowerCase().replace(/\s+/g, '_'))
			.refine((value) => isUniqueSignInName(value), {
				message: 'Пользователь с таким именем уже существует'
			}),
		email: z
			.string()
			.email('Incorrect email')
			.refine((value) => isUniqueSignInEmail(value), {
				message: 'Пользователь с таким почтой уже существует'
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

export type Schema = z.infer<typeof schema>
