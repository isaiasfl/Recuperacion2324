  import { useEffect, useState } from 'react'

import './App.css'
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import LoginPage from './pages/LoginPage';
import InicioPage from './pages/InicioPage';
import AltaPage from './pages/AltaPage';

function App() {
  const [token, setToken] = useState(false)
  
  useEffect(() => {
    if (localStorage.getItem('Token2')) {
        setToken(true);
    }else{
      setToken(false);
    }
    console.log("hola",token);
  },[token])

  const router= new createBrowserRouter([
    {
      path: "/",
      element:<Navigate to={'/login'} />,
      errorElement:<ErrorPage />,
    },
    {
      path: "/login",
      element:<LoginPage token={token} setToken={setToken}/>,
      errorElement:<ErrorPage />,
    },
    {
      path: "/inicio",
      element:<InicioPage token={token} setToken={setToken}/>,
      errorElement:<ErrorPage />,
    },
    {
      path:"/altas",
      element:<AltaPage/>,
      errorElement:<ErrorPage/>
    },
   
   
  ]);
  
  return <RouterProvider router={router} />;
}

export default App
