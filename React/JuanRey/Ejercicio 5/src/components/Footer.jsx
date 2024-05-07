import { createContext } from "react";
import { configProvider } from "../context/configContext";

const Footer = () => {
    const config = createContext(configProvider);

    const changeConfig = () => {

    }

    return (
        <div>
            <h1>Info de Configuración</h1>
            <div>
                <p>Color de fondo: </p>
                <p>Color de texto: </p>
                <p>Fuente del texto: </p>
            </div>
        </div>
    )
}

export default Footer;