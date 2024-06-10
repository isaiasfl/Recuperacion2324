import { useState } from 'react'
import { register } from '../helper/register'
import Swal from 'sweetalert2'


const RegisterPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [DNI, setDNI] = useState("")
    const [fecha, setFecha] = useState()
    const handleSubmitRegister = (e) => {
        e.preventDefault();
        register(username, password, DNI, fecha)
        .then(() => {
            Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Usuario registrado correctamente!'
            });
            setUsername('');
            setPassword('');
            setDNI('');
            setFecha('');
        })
        .catch(error => {
            Swal.fire({
            icon: 'error',
            title: 'Error en el registro',
            text: error.message
            });
            setUsername('');
            setPassword('');
            setDNI('');
            setFecha('');
        });
    };
    return (
        <div> 
            <form onSubmit={handleSubmitRegister}>
                <label>Username:</label>
                <input type='text' id='username'
                value={username}
                onChange={(e)=>setUsername(e.target.value)}
                />
                <label>Password</label>
                <input type='password' id='password'
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
                <label>DNI:</label>
                <input type='text' id='dni'
                value={DNI}
                onChange={(e)=>setDNI(e.target.value)}
                />
                <label>Fecha de nacimiento:</label>
                <input type='date' id='fecha'
                value={fecha}
                onChange={(e)=>setFecha(e.target.value)}
                />
                <input type='submit' value='Register' />
            </form>
        </div>
    )
}

export default RegisterPage