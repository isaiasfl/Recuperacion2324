
import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { RootPage } from './pages/RootPage';
import { ErrorPage } from './pages/ErrorPage';
import ProtectedRoute from './pages/utils/ProtectedRoute';
import Home from './pages/Home';
import Login from './pages/Login';


function App() {
  const router= new createBrowserRouter([
    {
      path: "/",
      element:<RootPage/>,
      errorElement: <ErrorPage />,
      children:[
        {
          element: <ProtectedRoute isActive={false} redirectPath="/login" />,
          children: [
            { index: true, element: <Home /> },
          ],
        },
        
        {
          path: "login",
          element: <Login />,
        },  
        
      ]
    }

  ]);
  

  return <RouterProvider router={router} />;
}

export default App;

