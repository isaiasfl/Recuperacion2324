// import { useState } from "react";
// import { getUserByUsernamePassword } from "../firebase/userApi";

const LoginPage = () => {
  // const [error, setError] = useState(null);

  // const handleSignIn = async () => {
  //   try {
  //     const username = document.getElementById('username').value;
  //     const password = document.getElementById('password').value;
  //     const userData = await getUserByUsernamePassword(username, password);

  //     if (userData) {
        
  //     }
      
  //   } catch (error) {
  //     console.error("Error al iniciar sesión:", error);
  //     setError("Error al iniciar sesión")
  //   }
    
  // }

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800">
      <div className="bg-cyan-100 w-96 p-6 rounded-lg shadow-xl">
        <h2 className="text-center text-3xl font-bold mb-6">Login</h2>
        <div className="mb-6">
          <label htmlFor="username" className="block text-gray-800 text-xl font-bold mb-2">Username</label>
          <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500" id="username" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-800 text-xl font-bold mb-2">Password</label>
          <input type="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500" id="password" />
        </div>
        <div className="text-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
            Iniciar Sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
