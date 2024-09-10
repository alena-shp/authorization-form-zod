import { Link } from 'react-router-dom'
import { LoginForm } from '@/features/loginForm'

export const Login = () => {
	return (
		<div>
			<h1>Login</h1>
			<LoginForm />
			<p>You dont't have an account?</p>
			<Link to="/register">Sign In</Link>
		</div>
	)
}
