import { useEffect, useState } from "react"
import Swal from "sweetalert2"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useState({})

  useEffect(() => {
    const getUserData = async (name, pass) => {
      try {
        const response = await fetch(`http://localhost:4000/usuarios?username=${name}&password=${pass}`);
  
        if (!response.ok) {
        throw new Error("Error");
        }
  
        const data = await response.json();
        // console.log(data[0])
        setUser(data[0])
      } catch (error) {
          console.error(error);
      }
    }
    getUserData(username, password)
  }, [username, password])
  

  const handleLogin = async (e) => {
    e.preventDefault();
    // console.log(user)

    if (user) {
      Swal.fire({
        title: 'Acceso correcto',
        icon: 'success',
        text: `El usuario ${user.username} ha iniciado sesion`,
      })
      // setUsername("")
      // setPassword("")
    } else {
      Swal.fire({
        title: 'Acceso denegado',
        icon: 'error',
        text: 'El usuario no existe',
      })
    }

  }

  return (
    <div className="w-full mx-auto">
      <form action="" className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl text-center font-semibold mb-4">LOGIN</h2>
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-800 text-sm font-bold mb-2">Username</label>
            <div className="flex flex-row">
              <input 
                  type="text" 
                  id="username" 
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
                  type="password" 
                  id="password" 
                  placeholder="Contraseña"
                  value={password} 
                  required
                  onChange={(e) => setPassword(e.target.value)} 
                  className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
              />
            </div>
          </div>
          <div className="text-center mt-8 flex flex-row justify-center">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 mx-5 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
            //   onClick={handleAddVehiculo}
            >
              Registrarse
            </button>
          
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 mx-5 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
              onClick={handleLogin}
            >
              Login
            </button>
          </div>
        </form>
    </div>
  )
}

export default LoginPage
