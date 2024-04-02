import { useState } from "react";
import { singInWithGoogle } from "../firebase/usuarios"; // Aquí debería ser signInWithGoogle
import Swal from 'sweetalert2';
import { useAuth } from '../context/authContextProduct';
import { navigate } from "react-router-dom";

const Login = () => {
  const { signInFirebase, setError } = useAuth(); 
  const [isLoading, setIsLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    try {
      // Aquí debería ser signInWithGoogle, no singWithGoogle
      await singInWithGoogle(signInFirebase, setError, navigate); 
    } catch (error) {
      setError(`Error al iniciar sesión: ${error}`);
      // Mostrar un mensaje de error con SweetAlert
      Swal.fire({
        icon: 'error',
        title: 'Error al iniciar sesión',
        text: `Ocurrió un error al intentar iniciar sesión: ${error.message}`,
      });
    }
  };

  return (
    <div>
    <h2>Iniciar sesión con Google</h2>
    <button onClick={handleGoogleLogin} disabled={isLoading}>
      {isLoading ? 'Iniciando sesión...' : 'Iniciar sesión con Google'}
    </button>
  </div>
  );
};

export default Login;
