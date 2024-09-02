import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Home } from '@/pages/home'
import { Login } from '@/pages/login'
import { Register } from '@/pages/register'
import { Layout } from '@/entities/layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
])

export const App = () => {
  return <RouterProvider router={router} />
}
