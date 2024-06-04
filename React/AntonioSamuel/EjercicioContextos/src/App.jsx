import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import InsertPage from './pages/InsertPage'
import EditarPage from './pages/EditarPage'
import BorrarPage from './pages/BorrarPage'
import ConfigProvider from './context/ConfigProvider'
import UseProvider from './context/UseProvider'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/insert" replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/insert',
      element: <InsertPage />
    },
    {
      path: '/edit',
      element: <EditarPage />
    },
    {
      path: '/borrar',
      element: <BorrarPage />
    }
  ])

  return (
    <UseProvider>
      <ConfigProvider>
        <RouterProvider router={router} />
      </ConfigProvider>
    </UseProvider>
  )
}

export default App
