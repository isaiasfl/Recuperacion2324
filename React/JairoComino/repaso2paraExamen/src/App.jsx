import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './App.css'

import ErrorPage from "./pages/ErrorPage";
import Tienda from "./pages/Tienda";
import Insertar from "./pages/Insertar";
import RootPage from "./pages/RootPage";

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<RootPage/>,
      errorElement:<ErrorPage/>,
      children:[
        {path:'/',element:<Navigate to={"/tienda"}/>},
        { path: '/insertar', element: <Insertar /> },
        { path: '/tienda', element: <Tienda /> },
      ]
    },
  ])
  return(
    
    <RouterProvider router={router}  />
 
)
}

export default App
