import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import './App.css'
import ErrorPage from "./page/ErrorPage";
import RootPage from "./page/RootPage";
import { ComentariosProvider } from "./components/context/ComentariosProvider";
import AgregarComentario from "./components/AgregarComentario";
import ResponderComentario from "./components/ResponderComentario";
import RespuestasComentario from "./components/RespuestasComentario";
import ComentariosOrdenados from "./components/ComentariosOrdenados";

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Navigate to={"/agregar"} />},
        { path: '/agregar', element: <AgregarComentario /> },
        { path: '/responder', element: <ResponderComentario /> },
        { path: '/respuestas', element: <RespuestasComentario /> },
        { path: '/ordenar', element: <ComentariosOrdenados /> },

      ],
    },
    
  ]);
  return(
    <ComentariosProvider> 
        <RouterProvider router={router}  />
    </ComentariosProvider>
  )

}

export default App
