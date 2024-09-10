export type TField = 'username' | 'email' | 'password' | 'confirmPassword'

export type TUserData = Readonly<{
	name: string
	password: string
	email: string
}>

export const enum EFormType {
	logIn = 'logIn',
	signIn = 'signIn'
}

export type TFormType = Readonly<EFormType.logIn | EFormType.signIn>
