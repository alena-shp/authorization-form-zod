import { useState } from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router'

import { logOut, removeAccount } from '@/shared/utils'

import $ from './styles.module.scss'
import $$ from '@/styles.module.scss'
import { Loading } from '@/shared/ui/loading/component'

export const Home = () => {
	const navigate = useNavigate()

	const [isLoadingImage, setIsLoadingImage] = useState(true)

	const hangleOnLoad = () => {
		setIsLoadingImage(false)
	}

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
				className={classNames($.img, {
					[$.img_hidden]: isLoadingImage
				})}
				alt="image"
				onLoad={hangleOnLoad}
			/>
			{isLoadingImage && (
				<div className={$.loading}>
					<Loading />
				</div>
			)}
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
