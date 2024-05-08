import { Link, Navigate } from "react-router-dom";
import eliminarToken from "../helpers/eliminarToken";

const Inicio = ( {token, setToken} ) => {

    function handleEliminarToken(){
        eliminarToken();
        setToken(false);
    }
    return (
        <>
            {!token ? (
                <Navigate to="/inicio" />
            ) : (
                <>
                    <button onClick={handleEliminarToken} ><Link to = {"/login"}>SALIR</Link></button>
                    <button ><Link to = {"/about"}>ABOUT</Link></button>
                </>
            )}
        </>
    );
}

export default Inicio;
