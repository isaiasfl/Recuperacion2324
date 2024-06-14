import { useContext } from "react";
import { UserContextLogin } from "../components/context/UserProvider";
import { Link } from "react-router-dom";

const Header = () => {
    const {  loged, cerrarSesion  } = useContext(UserContextLogin);

    const handleCerrarSesion = () =>{
        cerrarSesion()
    }
  return (
    <div>
        <h2>Rafael Amador</h2>
        {loged ? <button onClick={handleCerrarSesion}>Cerrar Sesion</button> : <Link to={"/login"}><button >Iniciar Sesion</button></Link> }
    </div>
  )
}

export default Header