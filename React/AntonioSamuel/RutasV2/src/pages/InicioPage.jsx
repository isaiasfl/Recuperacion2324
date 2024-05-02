import { Link } from "react-router-dom"
import GlobalContext from "../context/GlobalContext"
import { useEffect } from "react"
import eliminarToken from "../helpers/eliminarToken"
import comprobarToken from "../helpers/comprobarToken"
import { useContext } from "react"
import { Navigate } from 'react-router-dom'


const InicioPage = () => {
    const { appState, setAppState } = useContext(GlobalContext)

    const handleSalir = () => {
        eliminarToken()
        setAppState({...appState, token: false})
    }

    useEffect(() => {
        //Comprobar que existe el token
        const hayToken = comprobarToken()
        setAppState({...appState, token: hayToken})
    }, [])

  return (
    appState.token ? (
        <div className="m-3 ">
            <h1 className="text-xl font-bold text-center mb-7">Inicio Page</h1>
            <div className="text-center mt-8">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                    px-4 mx-3 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
                >
                    <Link to={'/about'}>About</Link>
                </button>

                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                    px-4 mx-3 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
                    onClick={handleSalir}
                >
                    <Link to={'/login'}>Salir</Link>
                </button>
            </div>
        </div>
    ) : (
        <Navigate to={'/login'} />
    )
  )
}

export default InicioPage
