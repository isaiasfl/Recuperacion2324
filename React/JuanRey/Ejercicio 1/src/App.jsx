import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import './App.css';
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

  return;
}

export default App
