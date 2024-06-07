import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import ErrorPage from './pages/ErrorPage';
import { ConfigProvider } from './contexts/ConfigContext';
import { ProducProvider } from './contexts/ProducContext';


function App() {
  
 
  const router= new createBrowserRouter([
    {
      path: "/",
      element:<Page1/>,
      errorElement:<ErrorPage/>,      
    },
    {
      path: "/edit",
      element:<Page2/>,
      errorElement:<ErrorPage />,
    },
    {
      path: "/delete",
      element:<Page3/>,
      errorElement:<ErrorPage />,
    },
   
  ]);
  
  return   (
<ProducProvider>
  <ConfigProvider>
    <RouterProvider router={router} /> 
   </ConfigProvider>
  </ProducProvider>
  )
}


export default App
