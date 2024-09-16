import { Link } from 'react-router-dom'
import { LoginForm } from '@/features/loginForm'

import { ETextSize, ETextType } from '@/shared/types'
import { Text } from '@/shared/ui/text'

import $$ from '@/styles.module.scss'

export const Login = () => {
	return (
		<div className={$$.block}>
			<Text
				content="Login"
				size={ETextSize.large}
			/>
			<LoginForm />
			<div className={$$.footer}>
				<Text content="You don't have an account?" />
				<Link
					to="/register"
					className={$$.link}
				>
					<Text
						content="Sign In"
						type={ETextType.link}
					/>
				</Link>
			</div>
		</div>
	)
}
