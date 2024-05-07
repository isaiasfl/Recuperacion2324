import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import InicioPage from './pages/InicioPage'
import ErrorPage from './pages/ErrorPage'
import AboutPage from './pages/AboutPage'
import { useEffect, useState } from 'react'
import comprobarToken from './helpers/comprobarToken'

function App() {
  const [token, setToken] = useState(false)

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/login" replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/login',
      element: <LoginPage token={token} setToken={setToken} />
    },
    {
      path: '/inicio',
      element: <InicioPage token={token} setToken={setToken}/>
    },
    {
      path: '/about',
      element: <AboutPage token={token}/>
    }
  ])
  useEffect(() => {
    //Comprobar que existe el token
    const hayToken = comprobarToken()
    setToken(hayToken)
}, [])

  return (
    <RouterProvider router={router} />
  )
}

export default App
