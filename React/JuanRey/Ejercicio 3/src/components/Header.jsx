import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-500 p-4 text-white">
      <div className="container mx-auto flex justify-between items-center">
      <div className="text-white text-lg font-semibold">
        Noticias y vehiculos
      </div>
        <nav className="flex justify-between">
          <ul className="flex space-x-4">
            <li>
            <Link to="/" className="text-white hover:text-gray-200">Home</Link>
            </li>
            <li>
              <Link to="/login" className="text-white hover:text-gray-200">Login</Link>
            </li>
            <li>
              <Link to="/register" className="text-white hover:text-gray-200">Register</Link>
            </li>
            <li>
              <Link to="/main" className="text-white hover:text-gray-200">Main</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
