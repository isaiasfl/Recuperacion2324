import { useState } from "react";
import addVehicle from "../helpers/addVehicle";
import Swal from 'sweetalert2';


const Register = () => {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [dni, setDni] = useState("");
const [fechaNacimiento, setFechaNacimiento] = useState("");
    



    const handleAddUser = (e) => {
      e.preventDefault();
      const newUser = {
        username : username,
        password: password,
        dni: dni,
        fechaNacimiento: fechaNacimiento,
        
      };
  
      addVehicle('http://localhost:4000/usuarios', newUser, (info) => {
          if (info) {
            Swal.fire({
              icon: "success",
              title: "¡Inserción correcta!",
              text: `Usuario añadido correctamente con el dni ${newUser.dni}`,
            })


          } else {
            Swal.fire({
              icon: "error",
              title: "Error al insertar!",
              text: "Usuario no añadido",
            });
          }
      });

     
  }
  


    return (
<div className=" flex flex-col items-start">
    <h2 className=" text-xl ">Registro de Usuario</h2>
    
    <form type="submit" className="flex flex-col items-start">

      <label htmlFor="username">Username:</label>
      <div className="flex items-center mb-4">
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
          required
        />
      </div>

      <label htmlFor="password">Password:</label>
      <div className="flex items-center mb-4">
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
          required
        />
      </div>

      <label htmlFor="dni">Dni:</label>
      <div className="flex items-center mb-4">
        <input
          type="text"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
          required
        />
      </div>

      
      <label htmlFor="fechaNacimiento">Fecha de Nacimiento:</label>
      <div className="flex items-center mb-4">
        <input
          type="date"
          id="fechaNacimiento"
          value={fechaNacimiento}
          onChange={(e) => setFechaNacimiento(e.target.value)}
          className="border border-gray-300 rounded-md p-2 mr-2"
          required
        />
      </div>



      <button onClick={handleAddUser} >Registrar</button>
      
    </form>
    
</div>

    );
}

export default Register;
