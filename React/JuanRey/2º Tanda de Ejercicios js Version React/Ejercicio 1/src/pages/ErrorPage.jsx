import { Link } from "react-router-dom"

const ErrorPage = () => {
    return (
        <div className="m-3 ">
            <h1 className="text-xl font-bold text-center mb-7 text-red-600 bg-red-200 p-6">Error Page</h1>
            <div className="text-center mt-8">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                    px-4 mx-3 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
                >
                    <Link to={'/insert'}>Volver</Link>
                </button>
            </div>
        </div>
    )
}

export default ErrorPage