import React, { useState } from 'react'
import Swal from "sweetalert2";
import getdata from '../helpers/getdata';

export const FormRegister = () => {
const [username, setUsername] = useState("")
const [password, setPassword] = useState("")
const [DNI, setDNI] = useState("");

  // Función para comprobar si el número de bastidor está repetido en el array
  function tieneRepetidosDni(array,DNI ) {
    const ndNI = array && array.map(item => item.DNI);
    console.log(ndNI);
    console.log(ndNI.includes(DNI));
    return ndNI.includes(DNI);
    }
    function tieneRepetidosUSERNAME(array, username) {
        const nusername = array && array.map(item => item.username);
        console.log(nusername);
        console.log(nusername.includes(username));
        return nusername.includes(username);
        }


const handleSubmit=async(e)=>{
    e.preventDefault();
      try {    
    const data=await getdata("http://localhost:4000/usuarios");
  console.log(data);
    if (tieneRepetidosDni(data, DNI)==true  ) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Usuario ya reguistrado con ese DNI",
          
          });
      console.log("El DNI ya ESTA REGUISTRADO.");
    } else {
        if (tieneRepetidosUSERNAME(data,username)==true) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "USuario ya reguistrado con ese username",
              
              });
                console.log("El Username ya ESTA REGUISTRADO.");
        }
        else{

       if (username==""&& password==""&&DNI=="") { 
         console.log("campos vacios");
       }else{
        const newUSer={ 
            username:username,
            password:password,
            DNI:DNI
            };
        console.log(newUSer);
        
  
      // Realizar la solicitud POST al endpoint "usuarios"
      fetch('http://localhost:4000/usuarios', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newUSer)
      })
      .then(response => {
        if (response.ok) {
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Reguistro EXITOSO",
                showConfirmButton: false,
                timer: 1500
              });      
          // Limpiar el estado del formulario si la solicitud es exitosa
          setDNI("");
          setPassword("");
          setUsername("");
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "USuario ya reguistrado",
              
              });
          console.log("Error fech");
          throw new Error('Error al agregar objeto');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Error al agregar objeto');
      });
    } 
}
}
  } catch (error) {
          console.log(error);
      }
  }

/////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

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
            <div>
                <label htmlFor="text" className="block text-sm font-medium text-gray-700">DNI</label>
                <input 
                    type="text" 
                    id="DNI" 
                    name="DNI" 
                    value={DNI}
                    onChange={(e) => setDNI(e.target.value)} 
                    className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:border-blue-500" 
                    placeholder="DNI" 
                    required 
                />
            </div>

            <div className="flex justify-between">
                <button 
                    type="submit" 
                    onClick={handleSubmit} 
                    className="w-1/2 bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                    Logearse
                </button>
                
                
            </div>
        </form>
    </div>
</div>

    </>
  )
}
