import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import About from './pages/About';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import ErrorPage from './pages/ErrorPage';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {

  const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if(localStorage.getItem("TOKEN")){
            setRedirect(true);
        }else{
            setRedirect(false)
        }
    }, [])
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Navigate to={'/login'} />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/inicio",
      element: <Inicio redirect={redirect}  setRedirect={setRedirect}/>,
      
    },
    {
      path: "/about",
      element: <About redirect={redirect} />,
    },
    {
      path: "/login",
      element: <Login redirect={redirect} setRedirect={setRedirect}/>,
    }
    
  ]);
  return <RouterProvider router={router} />;

}

export default App
