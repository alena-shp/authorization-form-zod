import { useNavigate } from 'react-router'

import { logOut, removeAccount } from '@/shared/utils'

import $ from './styles.module.scss'
import $$ from '@/styles.module.scss'

export const Home = () => {
	const navigate = useNavigate()

	const handleLogOut = () => {
		logOut()
		navigate('/login')
	}

	const handleRemoveAccount = () => {
		removeAccount()
		navigate('/register')
	}

	return (
		<div className={$.home}>
			Home
			<img
				src="https://picsum.photos/400"
				className={$.img}
				alt="image"
				onLoad={() => console.log('onLoad')}
			/>
			<div className={$.actions}>
				<button
					className={$$.btn}
					onClick={handleLogOut}
				>
					Log out
				</button>
				<button
					className={$$.btn}
					onClick={handleRemoveAccount}
				>
					Remove account
				</button>
			</div>
		</div>
	)
}
