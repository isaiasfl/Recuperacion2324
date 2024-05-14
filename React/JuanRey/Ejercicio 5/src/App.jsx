import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConfigProvider, ConfigContext } from "./context/configContext";
import { ProductProvider } from "./context/productContext";
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';
import DeletePage from './pages/DeletePage';
import { useContext } from 'react';
import Footer from "./components/Footer"

const AppWrapper = () => (
  <ConfigProvider>
      <ProductProvider>
          <App />
      </ProductProvider>
  </ConfigProvider>
);

const App = () => {
  const { isDarkMode } = useContext(ConfigContext);

  return (
      <Router>
          <div className={`${isDarkMode ? 'dark' : ''} min-h-screen transition-colors duration-500`}>
              <Routes>
                  <Route path="/edit" element={<EditPage />} />
                  <Route path="/delete" element={<DeletePage />} />
                  <Route path="/" element={<MainPage />} />
              </Routes>
              <Footer />
          </div>
      </Router>
  );
};

export default AppWrapper;