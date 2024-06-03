// importación de createContext para la creación de contexto.
import { createContext, useState } from "react"

// creaciñon y exportación del contexto
export const HolaMundoContext = createContext();

// proveedor (provider) del contexto y exportación
export const HolaMundoProvider = ({children}) => {
    const [mensaje, setMensaje] = useState("Hola Mundo");

    const toggleMensaje = () => {
        setMensaje(prevMensaje => ({
            ...prevMensaje,
            
        }))
    }

    return(
        <HolaMundoContext.Provider value={"hola mundo"}>
            {children}
        </HolaMundoContext.Provider>
    )

}