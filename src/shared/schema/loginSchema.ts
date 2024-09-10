import { z } from 'zod'
import { isValidLogInData } from '@/shared/utils'

export const loginSchema = z
	.object({
		username: z
			.string()
			.min(2, { message: 'Username must be more than 2 characters' })
			.max(20, 'Username must be less than 20 characters')
			.transform((v) => v.toLowerCase().replace(/\s+/g, '_')),
		password: z.string().min(6, 'Password must be more than 6 characters')
	})
	.refine((value) => isValidLogInData(value.username, value.password), {
		path: ['password'],
		message: 'Incorrect username or password'
	})

export type LoginSchema = z.infer<typeof loginSchema>
