import './App.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import TiendaPage from './pages/TiendaPage';
import Insertar from './components/Insertar';
import ProductosProvider from './context/ProductosProvider';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to={"/tienda"} />},
        { path: '/insertar', element: <Insertar /> },
        { path: '/tienda', element: <TiendaPage /> },
      ],
    },
  ]);
  return(
    <ProductosProvider>
      <RouterProvider router={router}  />
    </ProductosProvider>    
  )
}

export default App