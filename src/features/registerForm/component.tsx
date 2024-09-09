import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'

import { zodResolver } from '@hookform/resolvers/zod'
import { Field } from '@/entities/field'
import { ConditionsField } from '@/entities/conditionField'
import { signIn } from '@/shared/helpers'

import { type Schema, schema } from './schema'

import $ from './styles.module.scss'

export const RegisterForm = () => {
	const navigate = useNavigate()

	const {
		register,
		handleSubmit,
		reset,
		setFocus,
		formState: { isValid, errors }
	} = useForm<Schema>({ resolver: zodResolver(schema), mode: 'onTouched' })

	const onSubmit = (data: Schema) => {
		const { username, password, email } = data

		const userData = { name: username, password, email }

		signIn(userData)
		reset()
		navigate('/')
	}

	useEffect(() => {
		setFocus('username')
	}, [setFocus])

	return (
		<form
			className={$.form}
			onSubmit={handleSubmit(onSubmit)}
		>
			<Field
				type="text"
				id="username"
				label="Username *"
				placeholder="Your name"
				register={register('username')}
				isError={!!errors.username}
				errorMessage={errors.username?.message}
			/>
			<Field
				type="text"
				id="email"
				label="Email *"
				placeholder="name@mail.com"
				register={register('email')}
				isError={!!errors.email}
				errorMessage={errors.email?.message}
			/>
			<Field
				type="text"
				id="password"
				label="Password *"
				placeholder="At least 6 characters"
				register={register('password')}
				isError={!!errors.password}
				errorMessage={errors.password?.message}
			/>
			<Field
				type="text"
				id="confirmPassword"
				label="Password confirmation *"
				placeholder="At least 6 characters"
				register={register('confirmPassword')}
				isError={!!errors.confirmPassword}
				errorMessage={errors.confirmPassword?.message}
			/>
			<ConditionsField
				id="terms"
				register={register('terms')}
				isError={!!errors.terms}
				errorMessage={errors.terms?.message}
			/>
			<button
				type="submit"
				className={$.btn}
				disabled={!isValid}
			>
				Submit
			</button>
		</form>
	)
}
