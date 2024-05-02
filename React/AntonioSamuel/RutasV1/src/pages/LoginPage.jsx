import { useEffect, useState } from "react"
import { Navigate } from 'react-router-dom'
import generarToken from "../helpers/generarToken"
import comprobarToken from "../helpers/comprobarToken"

const LoginPage = () => {
    const [token, setToken] = useState(false)

    const handleEnter = () => {
        // Cuando entro, genero el token y lo guardo en el localStorage
        generarToken()
    }

    useEffect(() => {
        //Comprobar que existe el token
        const hayToken = comprobarToken()
        setToken(hayToken)
    }, [])
    
  return (
    token ? (
        <Navigate to="/inicio" />
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
