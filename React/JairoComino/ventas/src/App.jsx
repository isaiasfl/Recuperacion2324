import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './App.css'
import CategoriaMasVendida from './components/CategoriaMasVendida';
import ProductoMasVendido from './components/ProductoMasVendido';
import VentasCategoria from './components/VentasCategoria';
import VentasProducto from './components/VentasProducto';
import RootPage from "./page/RootPage";
import ErrorPage from "./page/ErrorPage";
import {  VentasContext } from "./components/context/VentasContext";


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to={"/ventasproductos"} />},
        { path: '/ventasproductos', element: <VentasProducto /> },
        { path: '/ventascategorias', element: <VentasCategoria /> },
        { path: '/masvendido', element: <ProductoMasVendido /> },
        { path: '/categoriamasvendida', element: <CategoriaMasVendida /> },
      ],
    },
    
  ]);
  return(
    <VentasContext> 
        <RouterProvider router={router}  />
    </VentasContext>
  )
}

export default App
