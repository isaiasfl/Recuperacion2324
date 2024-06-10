import { Link, Navigate } from "react-router-dom";

const Header = () => {
    return (
        <header>
        <Navigate>
            <ul>
            <li><Link to="/add">Añadir Libro</Link></li>
            <li><Link to="/prestar">Prestar Libro</Link></li>
            <li><Link to="/devolver">Devolver Libro</Link></li>
            <li><Link to="/buscar">Buscar Libros por Autor</Link></li>
            <li><Link to="/prestados">Libros Prestados</Link></li>
            </ul>
        </Navigate>
        </header>
    );
};

export default Header;