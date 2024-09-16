import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { Register } from '@/pages/register'
import { PrivateRoute } from '@/processes/auth/privateRoute'
import { Layout } from '@/shared/ui/layout'

const router = createBrowserRouter([
	{
		element: <Layout />,
		children: [
			{ path: '/', element: <PrivateRoute Component={Home} /> },
			{ path: '/login', element: <Login /> },
			{ path: '/register', element: <Register /> }
		]
	}
])

export const App = () => {
	return <RouterProvider router={router} />
}
