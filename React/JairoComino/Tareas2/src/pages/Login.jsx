import { useState } from "react";
import { addUsuario, findUser } from "../firebase/productosApi";
import Swal from "sweetalert2";
import { useNavigate  } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const nuevoUsuari={
        password,
        name: username,
      };
      console.log(nuevoUsuari);

    if ( await findUser(nuevoUsuari)==true) {
      navigate("/home");
      console.log("el usuario ya estaba  registrado");  
    } else {
      const nuevoUsuario = await addUsuario(nuevoUsuari);
          console.log("id nuevo usu", nuevoUsuario); 
          // ventana indicando si todo ok
        Swal.fire({
          icon: "success",
          title: "¡Inserción correcta!",
          text: "Datos del usuario insertados correctamente",
        });
        navigate("/home");
    }
      // seteamos al inicial
      setPassword("");
      setUsername("");
    } catch (error) {
      console.error("Error al añadir un usuario", error);
      Swal.fire({
        title: 'Error!',
        text: 'ERROR AL INSERTAR USUARIO ',
        icon: 'error',
        confirmButtonText: 'Cool'
      });
    }
    // Aquí puedes agregar lógica para manejar el envío del formulario, como enviar los datos a un servidor

    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                username{" "}
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
