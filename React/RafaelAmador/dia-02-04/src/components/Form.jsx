import { useState } from "react"
import Swal from 'sweetalert2';

const Form = () => {
    const [bastidor, setBastidor] = useState("")
    const [marca, setMarca] = useState("")
    const [color, setColor] = useState("")
    const [vehiculo, setVehiculo] = useState("Coche")

    const handleSubmit = (event) => {
        event.preventDefault();
    
  
        if (!bastidor || !marca || !color) {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, completa todos los campos.',
          });
          
          return;
        }else{
            Swal.fire({
                icon: 'success',
                title: 'Formulario enviado!',
                text: 'Los datos se han enviado correctamente.',
            });
        }
        setBastidor("")
        setMarca("")
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