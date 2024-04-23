import React, { useState } from 'react'
import getdata from '../helpers/getdata';
import Swal from "sweetalert2";

const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function tieneUSER(data,username1,password1) {
        // Verifica si hay algún objeto en el array data que coincida con el username y password
        const user = data.find(item => item.username === username1 && item.password === password1);
        return !!user; // Devuelve true si hay coincidencia, false si no
    }
    
    
const handleSubmit=async (e)=>{
    e.preventDefault();

    try {
        const datauser=await getdata("http://localhost:4000/usuarios");
        if (tieneUSER(datauser,username,password)==true) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Usuario encontrado",
                showConfirmButton: false,
                timer: 1500
              });    
              setPassword("");
              setUsername("");
        }else{
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "username incorrecto o password",     
              });
        }

    } catch (error) {
        console.log(error);
    }
}
    const handleRegister=(e)=>{
        e.preventDefault()
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Renviara al formulario de registro",     
          });
    }
  return (
   <>
   <div className="flex justify-center items-center h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-center text-2xl font-semibold mb-6">Inicio de sesión</h2>
        
        <form className="space-y-4">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Nombre de usuario</label>
                <input 
                    type="text" 
                    id="username" 
                    name="username" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} 
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" 
                    placeholder="Nombre de usuario" 
                    required 
                />
            </div>
            
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Contraseña</label>
                <input 
                    type="password" 
                    id="password" 
                    name="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" 
                    placeholder="Contraseña" 
                    required 
                />
            </div>

            <div className="flex justify-between">
                <button 
                    type="submit" 
                    onClick={handleSubmit} 
                    className="w-1/2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Acceder
                </button>
                
                <button 
                    type="button" 
                    onClick={handleRegister} 
                    className="w-1/2 bg-gray-200 text-gray-700 p-2 rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                >
                    Registrarse
                </button>
            </div>
        </form>
    </div>
</div>

   </>
  )
}

export default LoginPage