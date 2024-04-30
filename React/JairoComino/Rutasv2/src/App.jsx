
import { RouterProvider, createBrowserRouter,Navigate } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage';
import InicioPage from './pages/InicioPage';
import AbautPage from './pages/AbautPage';
import ErrorPage from './pages/ErrorPage';
import React, { useEffect, useState } from 'react';

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
      path: "/about",
      element:<AbautPage/>,
      errorElement:<ErrorPage />,
    }
  ]);
  
  return <RouterProvider router={router} />;
}

export default App;