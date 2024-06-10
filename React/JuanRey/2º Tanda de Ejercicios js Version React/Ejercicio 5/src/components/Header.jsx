import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white shadow-md">
            <nav className="container mx-auto p-4">
                <ul className="flex space-x-4">
                    <li>
                        <Link to="/" className="text-lg font-semibold hover:text-gray-300">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="/likes" className="text-lg font-semibold hover:text-gray-300">
                            Por Likes
                        </Link>
                    </li>
                    <li>
                        <Link to="/replies" className="text-lg font-semibold hover:text-gray-300">
                            Respuestas
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
