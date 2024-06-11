import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import RootPage from './Page/RootPage';
import ErrorPage from './Page/ErrorPage';
import Pokemones from './components/Pokemones';
import PokemonProvider from './components/context/PokemonProvider';
import Equipo from './components/Equipo';
import Desafio from './components/Desafio';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
          { index: "/", element: <Navigate to={"/pokemones"} /> },
          { path: "/pokemones", element: <Pokemones /> },
          { path: "/equipo", element: <Equipo />},
          { path: "/desafio", element: <Desafio />}
          ],
        },
       
  ]);
  return (
    <PokemonProvider>
      <RouterProvider router={router} />
    </PokemonProvider>
  );
}

export default App
