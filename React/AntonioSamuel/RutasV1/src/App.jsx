import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import InicioPage from './pages/InicioPage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <LoginPage />
    },
    {
      path: '/inicio',
      element: <InicioPage />
    },
    {
      path: '/about',
      element: <AboutPage />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
