import React, { useState } from 'react'
import { login } from '../helper/login'
import Swal from 'sweetalert2'

const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const handleSubmitLogin = (e) => {
      e.preventDefault();
      login(username, password)
        .then(() => {
          Swal.fire({
            icon: 'success',
            title: 'Inicio de sesión exitoso',
            text: '¡Bienvenido de nuevo!'
          });
          setUsername('');
          setPassword('');
        })
        .catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error en el inicio de sesión',
            text: error.message
          });
        });
    };
  return (
    <div>
        <form onSubmit={handleSubmitLogin}>
            <label>Username:</label>
            <input type='text' id='username'
            value={username}
            onChange={(e)=>setUsername(e.target.value)}
            />
            <label>Password</label>
            <input type='password' id='password'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <input type='submit' value='Login' />
        </form>
    </div>
  )
}

export default LoginPage