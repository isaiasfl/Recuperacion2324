// import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import ProtectedRoute from "./components/utils/ProtectedRoute";
// import { AuthProvider } from "./context/useAuthContext";
import HomePage from "./pages/HomePage";
// import LoginPage from "./pages/LoginPage";
// import RootPage from "./pages/RootPage";
// import ErrorPage from "./pages/ErrorPage";



function App() {
  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <RootPage />,
  //     errorElement: <ErrorPage />,
  //     children: [
  //       {
  //         element: <ProtectedRoute redirectPath="/login" />,
  //         children: [
  //           { index: true, element: <HomePage /> },
  //         ],
  //       },
  //       {
  //         path: "/login",
  //         element: <LoginPage />,
  //       },
  //     ],
  //   },
  // ]);
  // return (
  //   <AuthProvider>
  //     <RouterProvider router={router} />
  //   </AuthProvider>
  // );
  return (
    <HomePage />
  )
}

export default App;
