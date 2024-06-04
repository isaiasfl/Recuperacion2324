import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './App.css'
import { ProductProvider } from "./components/context/ProductContext";
import InsertarProducto from "./components/InsertarProducto";
import UpdateProducto from "./components/UpdateProducto";
import DeleteProduct from "./components/DeleteProduct";
import RootPage from "./page/RootPage";
import ErrorPage from "./page/ErrorPage";
import BuscarProductoPorCategoria from "./components/BuscarProductoPorCategoria";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to={"/productos"} />},
        { path: '/productos', element: <InsertarProducto /> },
        { path: '/editar', element: <UpdateProducto /> },
        { path: '/papelera', element: <DeleteProduct /> },
        { path: '/buscar', element: <BuscarProductoPorCategoria /> },
      ],
    },
    
  ]);
  return(
    <ProductProvider> 
        <RouterProvider router={router}  />
    </ProductProvider>
  )
}


export default App
