import { useState } from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router'

import { ETextSize, ETextType } from '@/shared/types'
import { Loading } from '@/shared/ui/loading'
import { Text } from '@/shared/ui/text'
import { logOut, removeAccount } from '@/shared/utils'

import $ from './styles.module.scss'
import $$ from '@/styles.module.scss'

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
		<div className={$$.block}>
			<Text
				content="Home"
				size={ETextSize.large}
			/>
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
					<Text
						content="Log out"
						type={ETextType.button}
					/>
				</button>
				<button
					className={$$.btn}
					onClick={handleRemoveAccount}
				>
					<Text
						content="Remove account"
						type={ETextType.button}
					/>
				</button>
			</div>
		</div>
	)
}
