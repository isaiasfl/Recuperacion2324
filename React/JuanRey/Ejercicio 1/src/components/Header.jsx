import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <div className="text-white text-lg font-semibold">
            Task Manager
            </div>
            <nav>
            <ul className="flex space-x-4">
                <li>
                <Link to="/" className="text-white hover:text-gray-200">
                    Home
                </Link>
                </li>
                <li>
                <Link to="/add-task" className="text-white hover:text-gray-200">
                    Add Task
                </Link>
                </li>
                <li>
                <Link to="/important-tasks" className="text-white hover:text-gray-200">
                    Important Tasks
                </Link>
                </li>
                <li>
                <Link to="/completed-tasks" className="text-white hover:text-gray-200">
                    Completed Tasks
                </Link>
                </li>
            </ul>
            </nav>
        </div>
        </header>
    );
};

export default Header;
