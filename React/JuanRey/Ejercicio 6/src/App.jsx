import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Insertar from './components/Insertar';
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import TiendaPage from "./pages/TiendaPage";

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
    
        <RouterProvider router={router}  />
  )
}

export default App
