import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import { AuthProvider } from './context/AuthProvider';
import ProtectedRoute from './util/ProtectedRoute';
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import RootPage from "./pages/RootPage";
import MainPage from "./pages/MainPage";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <ProtectedRoute redirectPath="login" />,
          children: [
            {
              index: true,
              element: <MainPage />,
            }
          ]
        },
        {
          path: '/login',
          element: <LoginPage />
        }
      ]
    }
  ])
  return (
    <AuthProvider>
      <RouterProvider router={router} />;
    </AuthProvider>
  );
}

export default App
