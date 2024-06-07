import React, { useEffect, useState } from 'react'
import createToken from '../helpers/createToken'
import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  const [token, setToken] = useState(false)


  useEffect(() => {
    if (localStorage.getItem('Token')) {
        setToken(true);
    }else{
      setToken(false);
    }
    console.log("hola",token);
  },[])
  

  const handleEntrar=()=>{
      const token=createToken()
      localStorage.setItem('Token', JSON.stringify(token));
      if (localStorage.getItem('Token')) {
        setToken(true)
      }
     
  }
  return (
    <>
      <h2>RUTAS V1</h2>
    {token && <Navigate to={'/inicio'}/>}
    <div>LoginPage</div>

    <button onClick={handleEntrar}>Entrar</button>
    </>
    
  )
}

export default LoginPage