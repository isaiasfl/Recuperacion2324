import { useState } from "react"
import Swal from 'sweetalert2';
import { generarFechaActual } from "../helper/generateFecha";
import { generarMatricula } from "../helper/generateMatricula";
import { postVehiculo } from "../helper/postVehiculo";

const Form = () => {
    const [bastidor, setBastidor] = useState("")
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [color, setColor] = useState("")
    const [vehiculo, setVehiculo] = useState("Coche")

    const handleSubmit = async (event) => {
        event.preventDefault();
    
  
        if (!bastidor || !marca || !modelo || !color) {
           
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos.',
          });
          
          return;
        }else {
          const fecha = generarFechaActual();
          try {
              const matricula = await generarMatricula(); // Espera a que se genere la matrícula
              await postVehiculo(bastidor, vehiculo, marca, modelo, color, matricula, fecha);
              Swal.fire({
                  icon: 'success',
                  title: 'Formulario enviado!',
                  text: 'Los datos se han enviado correctamente.',
              });
          } catch (error) {
              console.error('Error al generar matrícula o enviar datos:', error);
              Swal.fire({
                  icon: 'error',
                  title: 'Error',
                  text: 'Ha ocurrido un error al enviar el formulario. Por favor, inténtalo de nuevo.',
              });
          }
      }
        setBastidor("")
        setMarca("")
        setModelo("")
        setColor("")
        setVehiculo("Coche")
    }
        

  return (
    <>
        <form onSubmit={handleSubmit}  >
            <label> Numero de bastidor:</label><br />
            <input
        type="text"
        name="bastidor"
        value={bastidor}
        onChange={(e) => setBastidor(e.target.value)}
      /><br />
      <label>Marca del vehiculo</label><br />
      <input
        type="text"
        name="marca"
        value={marca}
        onChange={(e) => setMarca(e.target.value)}
      /><br />
       <label>Modelo del vehiculo</label><br />
      <input
        type="text"
        name="modelo"
        value={modelo}
        onChange={(e) => setModelo(e.target.value)}
      /><br />
      <label>Color</label><br />
      <input
        type="text"
        name="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      /><br />
      <label>Tipo de vehiculo</label><br />
      <select
        name="vehiculo"
        id="vehiculo"
        value={vehiculo}
        onChange={(e) => setVehiculo(e.target.value)}
      >
              <option value="coche">Coche</option>
              <option value="moto">Moto</option>
              <option value="camion">Camion</option>
            </select>
            <input type="submit" value="Validar"
            
            style={{ backgroundColor: '#007bff', color: 'white', padding: '12px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', width: '100%' }} />
        </form>
    </>
  )
}

export default Form