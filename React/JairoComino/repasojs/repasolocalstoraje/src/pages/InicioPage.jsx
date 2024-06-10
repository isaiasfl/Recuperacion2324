import React from 'react'
import { Link, Navigate } from 'react-router-dom'

const InicioPage = (props) => {
    const handleSalir=(e)=>{
        e.preventDefault();
        if (localStorage.getItem('Token2')) {
            localStorage.removeItem('Token2');
            props.setToken(false);
         }
    }
  return (
    <>
    {props.token==false && <Navigate to={'/'}/>}
  <div>
   INICIO
  </div>
 <Link to={'/altas'}><button>Altas</button></Link>
 <Link to={'/login'}><button onClick={handleSalir}>Salir</button></Link>
  
 </>
  )
}

export default InicioPage