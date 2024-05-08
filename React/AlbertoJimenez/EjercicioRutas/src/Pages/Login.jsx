import { Navigate } from "react-router-dom";
import genToken from "../helpers/genToken";

const Login = ( {token, setToken} ) => {

    function generarToken (){

        genToken();
        setToken(true);
    }
    if (token) {
        return <Navigate to="/inicio" />;
    } else {
        return <button onClick={generarToken}>ACCEDER</button>;
    }
}

export default Login;
