import React, { useEffect, useState } from 'react'
import createToken from '../helpers/createToken'
import { Navigate } from 'react-router-dom'

const LoginPage = (props) => {

  const handleEntrar=()=>{
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