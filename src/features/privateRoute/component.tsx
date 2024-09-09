import { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'

import { checkUserLogIn } from '@/shared/helpers'

type Props = {
	readonly Component: ComponentType
}

export const PrivateRoute = ({ Component }: Props) => {
	const isLogIn = checkUserLogIn()

	return isLogIn ? <Component /> : <Navigate to="/login" />
}
