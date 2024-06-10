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
                        <Link to="/add-room" className="text-lg font-semibold hover:text-gray-300">
                            Añadir Habitación
                        </Link>
                    </li>
                    <li>
                        <Link to="/reserve-room" className="text-lg font-semibold hover:text-gray-300">
                            Reservar Habitación
                        </Link>
                    </li>
                    <li>
                        <Link to="/cancel-reservation" className="text-lg font-semibold hover:text-gray-300">
                            Cancelar Reserva
                        </Link>
                    </li>
                    <li>
                        <Link to="/client-reservations" className="text-lg font-semibold hover:text-gray-300">
                            Reservas del Cliente
                        </Link>
                    </li>
                    <li>
                        <Link to="/available-rooms" className="text-lg font-semibold hover:text-gray-300">
                            Habitaciones Disponibles
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
