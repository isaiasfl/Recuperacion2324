import { Link } from "react-router-dom"

const Header = () => {

    return (
        <div className="flex flex-row">
            <div className="bg-white p-8 rounded-lg">
                <h1 className="text-3xl font-bold text-gray-800 text-center">Sistema de Gestión de Productos</h1>
            </div>
            <div className="p-2 w-1/2 text-center">
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                px-4 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
                    <Link to={'/insert'}>Insertar</Link>
                </button>
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                px-4 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
                    <Link to={'/show'}>Lista Productos</Link>
                </button>
            </div>
        </div>
    )
}

export default Header