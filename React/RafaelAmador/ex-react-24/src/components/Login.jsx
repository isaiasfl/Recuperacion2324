import { useContext, useEffect, useState } from "react"
import { UserContextLogin } from "./context/UserProvider";
import Swal from "sweetalert2";
import {  Navigate, redirect } from "react-router-dom";

const Login = () => {
    const {  loged ,iniciarSesion  } = useContext(UserContextLogin);

    const [user, setUser] = useState("")
    const [contrs, setContrs] = useState("")

    const handleChangeContrs = (e) =>{
        setContrs(e.target.value)
    }
    const handleChangeUser = (e) =>{
        setUser(e.target.value)
    }
    const handleIniciarSesion = (e) =>{
        e.preventDefault()
        if(user=="" || contrs=="" || contrs.length<5){
            Swal.fire({
                icon: 'error',
                title: 'Error al iniciar sesión',
                text: `Campos del formulario incorrectos`,
              });
        }
        setUser("")
        setContrs("")
        iniciarSesion(user, contrs)
        
    }


    

  return (
    <div>
        {loged ? <Navigate to={"/"} /> : ""}
        <form>
            <input type="text" value={user} onChange={handleChangeUser} name="user" />
            <input type="password" value={contrs} onChange={handleChangeContrs} name="password" />
            <button onClick={handleIniciarSesion}>Iniciar Sesion</button> 
        </form>
    </div>
  )
}

export default Login