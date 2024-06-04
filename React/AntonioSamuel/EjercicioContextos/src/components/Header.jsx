import { Link } from "react-router-dom"

const Header = ({actualizarValor}) => {

    const handleCambiarModo = () => {
        actualizarValor();
    }
  return (
    <div className="flex flex-row">
        <div className="mr-2 w-1/2">
            <h1 className="text-center">Cabecera</h1>
        </div>
        <div className="p-2 w-1/2 text-center">
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
            px-4 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
                Guardar
            </button>
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
            px-4 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
                <Link to={'/borrar'}>Borrar</Link>
            </button>
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
            px-4 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
                <Link to={'/edit'}>Editar</Link>
            </button>
            <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
            px-4 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
            onClick={handleCambiarModo}
            >
                ⚙
            </button>
        </div>
    </div>
  )
}

export default Header