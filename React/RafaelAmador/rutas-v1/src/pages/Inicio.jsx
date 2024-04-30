import { Link, Navigate } from "react-router-dom"
import { borrarToken } from "../helper/borrarToken"

const Inicio = (props) => {
   

    const handleSalir = () =>{
        borrarToken()
        props.setRedirect(false)
    }

  return (
    <div>
        {props.redirect==false && <Navigate to={'/login'} />}
        <h1>Inicio</h1>
        <Link to={'/about'} ><button>About</button></Link>
        <button onClick={handleSalir}>Salir</button>
    </div>
  )
}

export default Inicio