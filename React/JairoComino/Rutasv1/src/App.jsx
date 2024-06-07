
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import LoginPage from './pages/LoginPage';
import InicioPage from './pages/InicioPage';
import AbautPage from './pages/AbautPage';
import ErrorPage from './pages/ErrorPage';

function App() {
  const router= new createBrowserRouter([
    {
      path: "/",
      element:<LoginPage/>,
      errorElement:<ErrorPage />,
    },
    {
      path: "/login",
      element:<LoginPage/>,
      errorElement:<ErrorPage />,
    },
    {
      path: "/inicio",
      element:<InicioPage/>,
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