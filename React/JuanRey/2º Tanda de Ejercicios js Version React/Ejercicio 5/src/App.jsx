import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LikesPage from './pages/LikesPage';
import RepliesPage from './pages/RepliesPage';
import Header from './components/Header';
import Footer from './components/Footer';
import { CommentProvider } from './context/CommentContext';

function App() {
    return (
        <CommentProvider>
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/likes" element={<LikesPage />} />
                    <Route path="/replies" element={<RepliesPage />} />
                </Routes>
                <Footer />
            </Router>
        </CommentProvider>
    );
}

export default App;
