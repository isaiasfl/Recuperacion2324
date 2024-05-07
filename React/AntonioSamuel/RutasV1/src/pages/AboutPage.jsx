import { Link } from "react-router-dom"
import { Navigate } from 'react-router-dom'

const AboutPage = ({token}) => {

  return (
      !token ? (
        <Navigate to="/inicio" />
      ) : (
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
    )
  )
}

export default AboutPage
