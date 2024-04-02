import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import { AuthProvider } from './context/authContextProduct';

import Tareas from './components/Tareas';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
          { index: true, element: <Tareas /> },
          { path: "/task", element: <Tareas /> },
          ],
        },
       
  ]);
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App;