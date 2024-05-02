import { useContext } from "react"
import { Link } from "react-router-dom"
import GlobalContext from "../context/GlobalContext"
import comprobarToken from "../helpers/comprobarToken"
import { useEffect } from "react"
import { Navigate } from 'react-router-dom'

const AboutPage = () => {
    const { appState, setAppState } = useContext(GlobalContext)

    useEffect(() => {
        const hayToken = comprobarToken()
        setAppState({...appState, token: hayToken})
    }, [])
    
  return (
    appState.token ? (
        <div className="m-3 ">
            <h1 className="text-xl font-bold text-center mb-7">About Page</h1>
            <div className="text-center mt-8">
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                    px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
                >
                    <Link to={'/inicio'}>Volver</Link>
                </button>
            </div>
        </div>
    ) : (
        <Navigate to={'/login'} />
    )
  )
}

export default AboutPage
