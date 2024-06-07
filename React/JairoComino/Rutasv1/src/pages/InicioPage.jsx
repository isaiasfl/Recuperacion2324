import React from 'react'
import { Link, Navigate } from 'react-router-dom';

const InicioPage = () => {

  const handleSalir=()=>{
    if (localStorage.getItem('Token2')) {
       localStorage.removeItem('Token2');
    }
   
  }
  return (
    <>
     <div>
      INICIO
     </div>
    <Link to={'/about'}><button>About</button></Link>
    <Link to={'/login'}><button onClick={handleSalir}>Salir</button></Link>
     
    </>
    
  )
}

export default InicioPage