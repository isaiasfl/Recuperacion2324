import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import InsertPage from './pages/InsertPage'
import EditarPage from './pages/EditarPage'
import BorrarPage from './pages/BorrarPage'
import ConfigProvider from './context/ConfigProvider'
import UseProvider from './context/UseProvider'
import RootPage from './pages/RootPage'

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to={"/insert"} />},
        { path: '/insert', element: <InsertPage /> },
        { path: '/edit', element: <EditarPage /> },
        { path: '/delete', element: <BorrarPage/>}
      ],
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