import CryptoJS from 'crypto-js'
import Cookies from 'js-cookie'

import { TUserData } from '@/shared/types'

const SECRET_KEY = 'secret-key'

export const decoded = (userName: string) => {
	const token = Cookies.get(userName)

	if (token) {
		const bytes = CryptoJS.AES.decrypt(token, SECRET_KEY)
		const decoded = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))

		return decoded
	}
}

export const generateToken = (userData: TUserData) => {
	return CryptoJS.AES.encrypt(JSON.stringify(userData), SECRET_KEY).toString()
}

export const signIn = (userData: TUserData) => {
	const token = generateToken(userData)

	Cookies.set('currentUser', userData.name)
	Cookies.set(userData.name, token)

	const saveEmails = Cookies.get('emails')

	if (saveEmails) {
		const emails = JSON.parse(Cookies.get('emails') || '')
		const newEmails = JSON.stringify({ ...emails, [userData.email]: userData.email })

		Cookies.set('emails', newEmails)
	} else {
		const currEmail = JSON.stringify({ [userData.email]: userData.email })

		Cookies.set('emails', currEmail)
	}
}

export const removeAccount = () => {
	const userName = Cookies.get('currentUser') as string
	const email = decoded(userName).email

	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { [email]: removeEmail, ...otherEmails } = JSON.parse(Cookies.get('emails') || '')

	Cookies.remove(userName)
	Cookies.remove('currentUser')

	Cookies.set('emails', otherEmails)
}

export const checkUserLogIn = () => {
	const currentUser = Cookies.get('currentUser')

	return currentUser && currentUser !== ''
}

export const logIn = (name: string) => {
	Cookies.set('currentUser', name)
}

export const logOut = () => {
	Cookies.remove('currentUser')
}

export const isValidLogInData = (name: string, password: string) => {
	const saveUserData = decoded(name || '')

	return saveUserData?.password && saveUserData.password === password
}

export const isUniqueSignInName = (userName: string) => {
	const user = Cookies.get(userName)

	return !user
}

export const isUniqueSignInEmail = (userEmail: string) => {
	const saveEmails = Cookies.get('emails')

	if (saveEmails) {
		const { [userEmail]: email } = JSON.parse(saveEmails)

		return !email
	}

	return true
}
