import { useState } from "react"
import Swal from 'sweetalert2';
import { generarFechaActual } from "../helper/generateFecha";
import { generarMatricula } from "../helper/generateMatricula";
import { postVehiculo } from "../helper/postVehiculos";
import { generarBastidor } from "../helper/generateBastidor";

const Form = () => {
    const [bastidor, setBastidor] = useState("")
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [color, setColor] = useState("")
    const [vehiculo, setVehiculo] = useState("Coche")
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (!marca || !modelo || !color || !bastidor) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Por favor, completa todos los campos.',
            });
    
            return;
        } else {
            const fecha = generarFechaActual();
            try {
                const matricula = await generarMatricula();
                const result = await Swal.fire({
                    icon: 'question',
                    title: '¿Estás seguro?',
                    html: `Confirmar vehículo: ${vehiculo} con marca: ${marca}, modelo: ${modelo}, color: ${color}, bastidor: ${bastidor} tiene matrícula: <span style="color: red; font-weight: bold;">${matricula}</span>`,
                    showCancelButton: true,
                    confirmButtonText: 'Confirmar',
                    cancelButtonText: 'Cancelar',
                });
                if (result.isConfirmed) {
                    await postVehiculo(bastidor, vehiculo, marca, modelo, color, matricula, fecha);
                    Swal.fire({
                        icon: 'success',
                        title: 'Formulario enviado!',
                        text: 'Los datos se han enviado correctamente.',
                    });
                }
            } catch (error) {
                console.error('Error al generar matrícula o enviar datos:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.',
                });
            }
        }
    
        setMarca("");
        setModelo("");
        setColor("");
        setBastidor("");
        setVehiculo("Coche");
    }
            

    return (
        <>
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'center' }}>
        <label style={{ display: 'block', marginBottom: '5px' }}>Bastidor</label>
        <input
            type="text"
            name="bastidor"
            value={bastidor}
            readOnly
            onChange={(e) => setBastidor(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
        <input 
            type="button" 
            value="generar bastidor"
            onClick={async () => {
                const nuevoBastidor = await generarBastidor();
                setBastidor(nuevoBastidor);
            }} 
            style={{ backgroundColor: '#007bff', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
        />
            <label style={{ display: 'block', marginBottom: '5px' }}>Marca del vehículo</label>
            <input
            type="text"
            name="marca"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label style={{ display: 'block', marginBottom: '5px' }}>Modelo del vehículo</label>
            <input
            type="text"
            name="modelo"
            value={modelo}
            onChange={(e) => setModelo(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label style={{ display: 'block', marginBottom: '5px' }}>Color</label>
            <input
            type="text"
            name="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <label style={{ display: 'block', marginBottom: '5px' }}>Tipo de vehículo</label>
            <select
            name="vehiculo"
            id="vehiculo"
            value={vehiculo}
            onChange={(e) => setVehiculo(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
            >
            <option value="Coche">Coche</option>
            <option value="Moto">Moto</option>
            <option value="Camion">Camión</option>
            </select>
            <input
            type="submit"
            value="Validar"
            style={{ backgroundColor: '#007bff', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }}
            />
        </form>
        </>
        
    )
}

export default Form;