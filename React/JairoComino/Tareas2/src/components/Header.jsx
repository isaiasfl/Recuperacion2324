

// Header.js

import { Link } from 'react-router-dom';

function Header() {
  return (
<header className="bg-gray-800 py-4 w-full">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <nav className="flex items-center justify-between">
      <div className="flex items-center">
        <Link to="/" className="text-white text-2xl font-bold">Tareas</Link>
      </div>
      <div className="flex items-center">
        <Link to="/login" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Login</Link>
      </div>
    </nav>
  </div>
</header>

  );
}

export default Header;