import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import RegisterPage from './pages/RegisterPage';
import RootPage from './pages/RootPage';
import ErrorPage from './pages/ErrorPage';
import LandingPage from './pages/LandingPage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        { index: true, element: <LandingPage/> },
        { path: "login", element: <LoginPage /> },
        { path: "main", element: <MainPage /> },
        { path: "register", element: <RegisterPage /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
