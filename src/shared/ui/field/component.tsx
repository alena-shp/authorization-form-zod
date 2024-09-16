import { UseFormRegisterReturn } from 'react-hook-form'

import { type TField, EAriaInvalid } from '@/shared/types'

import $ from './styles.module.scss'

type TProps = Readonly<{
	type: string
	id: string
	label: string
	placeholder: string
	register: UseFormRegisterReturn<TField>
	isError: boolean
	errorMessage?: string
}>

export const Field = ({ type, id, label, errorMessage, placeholder, isError, register }: TProps) => {
	return (
		<div className={$.field}>
			<label
				htmlFor={id}
				className={$.label}
			>
				{label}
			</label>
			<input
				{...register}
				type={type}
				id={id}
				className={$.input}
				placeholder={placeholder}
				aria-invalid={isError ? EAriaInvalid.true : EAriaInvalid.false}
			/>
			<span
				role="alert"
				className={$.error}
			>
				{errorMessage}
			</span>
		</div>
	)
}
