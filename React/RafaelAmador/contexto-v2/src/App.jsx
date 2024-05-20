import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './App.css'
import ErrorPage from './pages/ErrorPage';
import Productos from './pages/Productos';
import Editor from './pages/Editor';
import Papelera from './pages/Papelera';
import { ConfigProvider } from "./components/context/ConfigContext"; 
import { ProductProvider } from "./components/context/ProductContext";
import RootPage from "./pages/RootPage";


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to={"/productos"} />},
        { path: '/productos', element: <Productos /> },
        { path: '/editar', element: <Editor /> },
        { path: '/papelera', element: <Papelera /> },
      ],
    },
    
  ]);
  return(
    <ProductProvider> 
      <ConfigProvider> 
        <RouterProvider router={router}  />
      </ConfigProvider>
    </ProductProvider>
  )
}

export default App;