import './App.css'
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { NotificacionesProvider } from './components/context/NotificacionesProvider';
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import ListaNotificaciones from './components/ListaNotificaciones';
import AgregarNotificacion from './components/AgregarNotificacion';
import NotificacionesNoLeidas from './components/NotificacionesNoLeidas';
import NotificacionesOrdenadasPorFecha from './components/NotificacionesOrdenadasPorFecha';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to={"/lista"} />},
        { path: '/lista', element: <ListaNotificaciones /> },
        { path: '/agregar', element: <AgregarNotificacion /> },
        { path: '/noleidas', element: <NotificacionesNoLeidas /> },
        { path: '/ordenadas', element: <NotificacionesOrdenadasPorFecha /> },
      ],
    },
    
  ]);

  return (
    <NotificacionesProvider> 
      <RouterProvider router={router}  />
    </NotificacionesProvider>  
  )
}

export default App
