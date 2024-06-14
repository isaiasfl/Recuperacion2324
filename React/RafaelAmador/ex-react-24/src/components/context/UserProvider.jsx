import { createContext, useEffect, useState } from "react";

export const UserContextLogin = createContext();
const UserProvider = ({children}) => {
    const [usuario, setUsuario] = useState("")
    const [password, setPassword] = useState("")
    const [loged, setLoged] = useState(false)

    const iniciarSesion = (user, contra) =>{
        console.log("intentando iniciar sesion");
        const usuarioBien = import.meta.env.VITE_USER;
        const contrasenaBien= import.meta.env.VITE_PASSWORD
        console.log(usuarioBien);
        console.log(contrasenaBien);
        setUsuario(user)
        setPassword(contra)
        if(user== usuarioBien && contra==contrasenaBien ){
            setLoged(true);
            setUsuario(user)
            setPassword(contra)
            localStorage.setItem("access_token", JSON.stringify({user, contra}))
        }else{
            console.log("Error al iniciar sesion");
            setLoged(false)
            setUsuario("")
            setPassword("")
        }
    }
    
    
    const cerrarSesion = () =>{
        localStorage.removeItem("access_token")
        setLoged(false)
        setUsuario("")
        setPassword("")
    }
    /*useEffect(() => {
        const sesionIniciada = () =>{
            if(JSON.parse(localStorage.getItem("access_token"))){
                setLoged(true)
            }
        }
        sesionIniciada();
    }, [])
    */
  return (
    <UserContextLogin.Provider value={{ usuario, setUsuario, password, setPassword, loged, iniciarSesion, cerrarSesion}}>
        {children}
    </UserContextLogin.Provider>
  )
}

export default UserProvider