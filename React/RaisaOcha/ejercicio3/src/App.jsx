import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import EjemploContext from './components/EjemploContext'
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import { ProductProvider } from './contexts/ProductContext';
import { ThemeProvider } from './contexts/ThemeContext';
// import ProductPage from './pages/ProductPage';
import MainPage from './pages/MainPage';
import SearchPage from './pages/SearchPage';
import DeletePage from './pages/DeletePage';

function App() {


  return (
    <ThemeProvider>
      <ProductProvider>
        <Router>
          <NavBar />
          <Routes>
            <Route path="/"  element={<MainPage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/delete" element={<DeletePage />} />
          </Routes>
          <Footer />
        </Router>
      </ProductProvider>
    </ThemeProvider>
  )
}
export default App

