import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          element: <MainPage />,
        }
      ],
    }
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
