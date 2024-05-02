import { useContext } from "react"
import GlobalContext from "../context/GlobalContext"
import generarToken from "../helpers/generarToken"
import comprobarToken from "../helpers/comprobarToken"
import { useEffect } from "react"
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
    const { appState, setAppState } = useContext(GlobalContext)

    const handleEnter = () => {
        generarToken()
    }

    useEffect(() => {
        const hayToken = comprobarToken()
        setAppState({...appState, token: hayToken})
    }, [appState])

  return (
    appState.token ? (
        <Navigate to={'/inicio'} />
    ) : (
        <div className="m-3 ">
            <h1 className="text-xl font-bold text-center mb-7">Login Page</h1>
            <div className="text-center mt-8">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                    px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
                    onClick={handleEnter}
                >
                    Entrar
                </button>
            </div>
        </div>
    )
  )
}

export default LoginPage
