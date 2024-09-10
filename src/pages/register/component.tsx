import { Link } from 'react-router-dom'
import { RegisterForm } from '@/features/registerForm'

export const Register = () => {
	return (
		<div>
			<h1>Sign In</h1>
			<RegisterForm />
			<p>Already have an account?</p>
			<Link to="/login">Log In</Link>
		</div>
	)
}
