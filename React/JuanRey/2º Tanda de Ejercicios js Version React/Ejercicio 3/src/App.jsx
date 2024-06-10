import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { BibliotecaProvider } from './context/BibliotecaContext';
import ErrorPage from './pages/ErrorPage';
import Header from './components/Header';
import Footer from './components/Footer';
import SaveLocalStorageButton from './components/SaveLocalStorageButton';
import SearchLendedBooksPage from './pages/SearchLendedBooksPage';
import SearchBookByAuthPage from './pages/SearchBookByAuthPage';
import ReturnBookPage from './pages/ReturnBookPage';
import LendBookPage from './pages/LendBookPage';
import AddBookPage from './pages/AddBookPage';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Navigate to="/add" replace />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/add',
      element: <AddBookPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/prestar',
      element: <LendBookPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/devolver',
      element: <ReturnBookPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/buscar',
      element: <SearchBookByAuthPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/prestados',
      element: <SearchLendedBooksPage />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <BibliotecaProvider>
      <Header />
      <div>
        <h1>Biblioteca</h1>
        <SaveLocalStorageButton />
        <RouterProvider router={router} />
      </div>
      <Footer />
    </BibliotecaProvider>
  );
};

export default App;
