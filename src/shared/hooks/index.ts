import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { zodResolver } from '@hookform/resolvers/zod'

import { logIn, signIn } from '@/shared/utils'
import { type TFormType, EFormType } from '@/shared/types'
import { type LoginSchema, type RegisterSchema, loginSchema, registerSchema } from '@/shared/schema'

type Props = {
	readonly formType: TFormType
}

export const useFormControl = ({ formType }: Props) => {
	const navigate = useNavigate()

	const schema = formType === EFormType.logIn ? loginSchema : registerSchema

	const {
		register,
		handleSubmit,
		reset,
		formState: { isValid, errors }
	} = useForm<LoginSchema & RegisterSchema>({ resolver: zodResolver(schema), mode: 'onTouched' })

	const onSubmit = (data: LoginSchema & RegisterSchema) => {
		const { username, password, email } = data

		const userData = { name: username, password, email }

		if (formType === EFormType.logIn) {
			logIn(username)
		} else {
			signIn(userData)
		}

		reset()
		navigate('/')
	}

	return {
		register,
		handleSubmit: handleSubmit(onSubmit),
		isValid,
		errors
	}
}
