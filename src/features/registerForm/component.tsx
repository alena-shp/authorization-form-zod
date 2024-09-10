import { Field } from '@/entities/field'
import { ConditionsField } from '@/entities/conditionField'
import { useFormControl } from '@/shared/hooks'
import { EFormType } from '@/shared/types'

import $ from './styles.module.scss'

export const RegisterForm = () => {
	const { isValid, errors, register, handleSubmit } = useFormControl({ formType: EFormType.signIn })

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
