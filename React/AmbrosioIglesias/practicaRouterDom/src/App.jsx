import {createBrowserRouter, Navigate, redirect, RouterProvider } from "react-router-dom"
import './App.css'

import Login from "./pages/Login"
import About from "./pages/About"
import Inicio from "./pages/Inicio"



function App() {
  const numeroAleatorio = localStorage.getItem('numeroAleatorio');
  
    const router = createBrowserRouter([
      {
        path:"/",
        element: <Navigate to={numeroAleatorio ? '/inicio' : '/login'} />,
      },
      {
        path:"/login",
        element: <Login/>
      },
      {
        path:"/inicio",
        element: <Inicio/>
      },
      {
        path:"/about",
        element: <About/>
      },
    ]);
    

    return <RouterProvider router={router}/>
}

export default App
