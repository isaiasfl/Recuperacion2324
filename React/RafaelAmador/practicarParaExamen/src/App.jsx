import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './App.css'
import Insertar from './components/Insertar';
import RootPage from './components/page/RootPage';
import ErrorPage from './components/page/ErrorPage';
import Tienda from "./components/page/Tienda";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to={"/tienda"} />},
        { path: '/insertar', element: <Insertar /> },
        { path: '/tienda', element: <Tienda /> },
      ],
    },
    
  ]);
  return(
    
        <RouterProvider router={router}  />
     
  )
}

export default App
