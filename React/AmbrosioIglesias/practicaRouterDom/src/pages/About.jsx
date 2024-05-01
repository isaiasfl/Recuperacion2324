import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const About = () => {
  const [volver, setVolver] = useState(false);

  const handleCliclVolver = () => {
    setVolver(true);
  };
  if (volver) {
    return <Navigate to="/inicio" />;
  }

  return (
    <>
      <h1>about</h1>
      <button onClick={handleCliclVolver}>Volver</button>
    </>
  );
};

export default About;
