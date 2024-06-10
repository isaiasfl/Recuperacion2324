import React, { useEffect, useState } from 'react'

import { Navigate } from 'react-router-dom'
import createToken from '../helpers/createToken'

const LoginPage = (props) => {

  const handleEntrar=(e)=>{
    e.preventDefault();
      const token=createToken()
      localStorage.setItem('Token2', JSON.stringify(token));
      if (localStorage.getItem('Token2')) {
        props.setToken(true)
      }
     
  }
  return (
    <>
      <h2>RUTAS V2</h2>

        {props.token && <Navigate to={'/inicio'}/>}
    <div>LoginPage</div>
    
    <button onClick={handleEntrar}>Entrar</button>
    </>
    
  )
}

export default LoginPage