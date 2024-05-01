import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';

const Inicio = () => {
  const [redireccionar, setRedireccionar] = useState(false);
  const [exit, setExit] = useState(false)

  const handleClickAbout = () => {
    setRedireccionar(true);
  };

  const handleClickExit = () => {
    setExit(true)
  }

  if (redireccionar) {

    return <Navigate to="/about" />;
  }

  if(exit){
    localStorage.clear();
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div>inicio</div>
      <button onClick={handleClickAbout}>About</button>
      <button onClick={handleClickExit}>Salir</button>
    </>
  );
};

export default Inicio;


