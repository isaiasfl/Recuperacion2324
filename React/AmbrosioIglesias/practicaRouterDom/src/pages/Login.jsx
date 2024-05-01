import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Login = () => {
  const [numeroAleatorio, setNumeroAleatorio] = useState('');

  const handleCliclEntrar = () => {
    const numero = Math.floor(Math.random() * 1000000000000).toString().padStart(12, '0');
    setNumeroAleatorio(numero);
    localStorage.setItem('numeroAleatorio', numero);
  };

  return (
    <>
      <h1>Login</h1>
      <button onClick={handleCliclEntrar}>Entrar</button>
      {numeroAleatorio && <Navigate to="/inicio" />}
    </>
  );
}

export default Login;

