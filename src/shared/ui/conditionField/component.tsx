import { UseFormRegisterReturn } from 'react-hook-form'
import { ETextSize, ETextType, EAriaInvalid } from '@/shared/types'

import $ from './styles.module.scss'
import { Text } from '../text'

type TProps = Readonly<{
	id: string
	register: UseFormRegisterReturn<'terms'>
	isError: boolean
	errorMessage?: string
}>

export const ConditionsField = ({ id, register, isError, errorMessage }: TProps) => {
	return (
		<div className={$.conditionsField}>
			<div className={$.row}>
				<input
					{...register}
					type="checkbox"
					id={id}
					className={$.checkbox}
					aria-invalid={isError ? EAriaInvalid.true : EAriaInvalid.false}
				/>
				<label
					htmlFor={id}
					className={$.confirm}
				>
					<Text
						content="I accept "
						size={ETextSize.small}
					/>
					<a
						className={$.link}
						href="#"
					>
						<Text
							content="Terms and conditions"
							size={ETextSize.small}
							type={ETextType.link}
						/>
					</a>
				</label>
			</div>
			<span className={$.error}>{errorMessage}</span>
		</div>
	)
}
