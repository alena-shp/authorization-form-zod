export type TField = 'username' | 'email' | 'password' | 'confirmPassword'

export type TUserData = Readonly<{
	name: string
	password: string
	email: string
}>

export const enum EAriaInvalid {
	true = 'true',
	false = 'false'
}

export const enum EFormType {
	logIn = 'logIn',
	signIn = 'signIn'
}

export type TFormType = Readonly<EFormType.logIn | EFormType.signIn>

export const enum ETextSize {
	small = 'small',
	middle = 'middle',
	large = 'large'
}

export type TTextSize = ETextSize.small | ETextSize.middle | ETextSize.large

export const enum ETextType {
	text = 'text',
	button = 'button',
	link = 'link'
}

export type TTextType = ETextType.text | ETextType.button | ETextType.link

