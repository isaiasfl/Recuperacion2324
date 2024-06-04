import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage'
import InsertPage from './pages/InsertPage'
import ShowProductsPage from './pages/ShowProductsPage'
import EditarPage from './pages/EditarPage'
import ProductoProvider from './context/ProductoProvider'

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
      path: '/edit/:idproduct',
      element: <EditarPage />
    },
    {
      path: '/show',
      element: <ShowProductsPage />
    }
  ])

  return (
    <ProductoProvider>
      <RouterProvider router={router} />
    </ProductoProvider>
  )
}

export default App
