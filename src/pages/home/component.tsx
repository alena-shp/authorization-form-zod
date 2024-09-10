import { useNavigate } from 'react-router'

import { logOut, removeAccount } from '@/shared/utils'

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
		<div>
			Home
			<button onClick={handleLogOut}>Log out</button>
			<button onClick={handleRemoveAccount}>Remove account</button>
		</div>
	)
}
