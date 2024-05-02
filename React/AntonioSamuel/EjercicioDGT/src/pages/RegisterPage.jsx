import { useState } from "react"
import verificarDuplicadosApi from "../helpers/verificarDuplicadosApi";
import { addUserApi } from "../helpers/addUserApi";
import Swal from "sweetalert2";

const RegisterPage = () => {
  const [dni, setDni] = useState("");
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [fechaNacimiento, setFechaNacimiento] = useState("")

  const handleAddUser = async (e) => {
    e.preventDefault();
    try {
      const newUser = {
        dni : dni,
        username : username,
        password : password,
        fecha_nacimiento : fechaNacimiento
      }
      const dniDuplicado = await verificarDuplicadosApi('usuarios', 'dni', newUser.dni)
      const usernameDuplicado = await verificarDuplicadosApi('usuarios', 'username', newUser.username)

      if (!dniDuplicado && !usernameDuplicado) {
        Swal.fire({
          title: 'Confirmar Datos',
          html: `
            <p className="font-md font-semibold text-center">Revisa tus datos</p>
            <p className="font-md text-center">DNI: ${newUser.dni}</p>
            <p className="font-md text-center">Username: ${newUser.username}</p>
            <p className="font-md text-center">Fecha de Nacimiento: ${newUser.fecha_nacimiento}</p>
          `,
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Registrar',
          cancelButtonText: 'Cancelar',
        }).then((result) => {
          if (result.isConfirmed) {
            addUserApi('http://localhost:4000/usuarios', newUser, () =>{})
            setDni("")
            setUsername("")
            setPassword("")
            setFechaNacimiento("")
          }
        })
      } else {
        Swal.fire({
          title: 'Informacion duplicada',
          icon: 'error',
          text: 'El DNI o el Username introducidos ya están registrados',
        })
      }

    } catch (error) {
      console.error("Error al registrar un usuario: ", error)
    }
  }

  return (
    <div className="w-full mx-auto">
      <form action="" className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl text-center font-semibold mb-4">REGISTER</h2>
          <div className="mb-4">
            <label htmlFor="dni" className="block text-gray-800 text-sm font-bold mb-2">DNI</label>
            <div className="flex flex-row">
              <input 
                  type="text" 
                  id="dni" 
                  placeholder="DNI"
                  value={dni} 
                  required
                  onChange={(e) => setDni(e.target.value)} 
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-800 text-sm font-bold mb-2">Username</label>
            <div className="flex flex-row">
              <input 
                  type="text" 
                  id="username2" 
                  placeholder="Username"
                  value={username} 
                  required
                  onChange={(e) => setUsername(e.target.value)} 
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800 text-sm font-bold mb-2">Password</label>
            <div className="flex flex-row">
              <input 
                  type="text" 
                  id="password2" 
                  placeholder="Contraseña"
                  value={password} 
                  required
                  onChange={(e) => setPassword(e.target.value)} 
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="fecha_nacimiento" className="block text-gray-800 text-sm font-bold mb-2">Fecha Nacimiento</label>
            <div className="flex flex-row">
              <input 
                  type="date" 
                  id="fecha_nacimiento" 
                  placeholder="Fecha Nacimiento"
                  value={fechaNacimiento} 
                  required
                  onChange={(e) => setFechaNacimiento(e.target.value)} 
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
              />
            </div>
          </div>
          <div className="text-center mt-8 flex flex-row justify-center">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 mx-5 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
              onClick={handleAddUser}
            >
              Registrar
            </button>
          </div>
        </form>
    </div>
  )
}

export default RegisterPage
