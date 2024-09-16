import { Link } from 'react-router-dom'
import { RegisterForm } from '@/features/registerForm'

import { ETextSize } from '@/shared/types'
import { Text } from '@/shared/ui/text'

import $$ from '@/styles.module.scss'

export const Register = () => {
	return (
		<div className={$$.block}>
			<Text
				content="Sign In"
				size={ETextSize.large}
			/>
			<RegisterForm />
			<div className={$$.footer}>
				<Text
					content="Already have an account?"
					size={ETextSize.small}
				/>
				<Link
					to="/login"
					className={$$.link}
				>
					<Text
						content="Log In"
						size={ETextSize.small}
					/>
				</Link>
			</div>
		</div>
	)
}
