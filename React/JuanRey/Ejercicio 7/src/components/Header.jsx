import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <nav className="flex justify-around">
                <Link 
                    to="/tienda" 
                    className="text-xl hover:text-yellow-300 transition-colors duration-300"
                >
                    Tienda
                </Link>
                <Link 
                    to="/insertar" 
                    className="text-xl hover:text-yellow-300 transition-colors duration-300"
                >
                    Insertar
                </Link>
            </nav>
        </header>
    );
};

export default Header;
