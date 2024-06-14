import './App.css'
import {  RouterProvider, createBrowserRouter } from "react-router-dom";
import RootPage from "./page/RootPage";
import ErrorPage from "./page/ErrorPage";
import Login from "./components/Login";
import Edit from "./components/Edit";
import Stats from "./components/Stats";
import UserProvider from "./components/context/UserProvider";
import PaginaPrincipal from "./page/PaginaPrincipal";

function App() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <RootPage />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <PaginaPrincipal />},
            { path: "/login", element: <Login /> },
            { path: "/stats", element: <Stats /> },
            { path: "/edit/:id", element: <Edit /> },
        ]
      },
         
    ]);
    return (
      <UserProvider>
        <RouterProvider router={router} />;
      </UserProvider>
    );
}

export default App;
