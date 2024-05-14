import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { ConfigProvider, ConfigContext } from "./context/configContext";
import { ProductProvider } from "./context/productContext";
import MainPage from './pages/MainPage';
import EditPage from './pages/EditPage';
import DeletePage from './pages/DeletePage';
import Footer from "./components/Footer"
import { ThemeProvider } from './context/configContext';

const AppWrapper = () => (
    <ThemeProvider>
        <ProductProvider>
            <App />
        </ProductProvider>
    </ThemeProvider>
);

const App = () => {

    return (
        <Router>
            <div className="min-h-screen transition-colors duration-500">
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