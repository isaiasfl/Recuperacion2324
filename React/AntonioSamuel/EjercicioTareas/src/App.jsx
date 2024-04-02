import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import RootPage from './pages/RootPage'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
// import LoginPage from './pages/LoginPage'
// import ProtectedRoute from './utils/ProtectedRoute'
// import { AuthProvider } from './context/AuthContextProduct'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/tareas" replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/tareas',
      element: <RootPage />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    }
  ]);

  return (
    // <AuthProvider>
      <RouterProvider router={router} />
    // </AuthProvider>
  )
}

export default App
