import { Field } from '@/entities/field'
import { useFormControl } from '@/shared/hooks'
import { EFormType } from '@/shared/types'

import $ from './styles.module.scss'

export const LoginForm = () => {
	const { isValid, errors, register, handleSubmit } = useFormControl({ formType: EFormType.logIn })

	return (
		<form
			className={$.form}
			onSubmit={handleSubmit}
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
				id="password"
				label="Password *"
				placeholder="At least 6 characters"
				register={register('password')}
				isError={!!errors.password}
				errorMessage={errors.password?.message}
			/>
			<button
				type="submit"
				disabled={!isValid}
				className={$.btn}
			>
				Submit
			</button>
		</form>
	)
}
