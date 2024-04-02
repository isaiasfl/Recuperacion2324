import { useState } from "react"
import Swal from "sweetalert2";
import getdata from "../helpers/getdata";
// nºvastidor,marca,modelo ,tipo(motocicleta,coche,camion),color,fecha de alta

const FormAltas = () => {
    const [nbastidor, setNBastidor] = useState("");
    const [marca, setMarca] = useState("");
    const [tipo, setTipo] = useState("");
    const [color, setColor] = useState("");




    ///logica
    const handleSubmit=()=>{
            const data=getdata("http://localhost:4000/altas");
        const newALta={
            id:data.lenght
        }

        Swal.fire({
            icon: "success",
            title: "¡Inserción correcta!",
            text: "Datos del veiculo insertados correctamente",
          });
    }
  return (
    <>
    <div className="max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
  <form onSubmit={handleSubmit}>
    <div className="mb-4">
      <label htmlFor="Bastidor" className="block text-gray-700 text-sm font-bold mb-2">Bastidor:</label>
      <input type="text" id="Bastidor" name="Bastidor" value={nbastidor} onChange={(e) => setNBastidor(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="marca" className="block text-gray-700 text-sm font-bold mb-2">Marca:</label>
      <input type="marca" id="marca" name="marca" value={marca} onChange={(e) => setMarca(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div className="mb-4">
      <label htmlFor="tipo" className="block text-gray-700 text-sm font-bold mb-2">Tipo:</label>
      <select id="motivo" name="motivo" value={tipo} onChange={(e) => setTipo(e.target.value)} className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${tipo === 'motocicleta' ? 'text-gray-500' : tipo === 'coche' ? 'text-blue-500' : 'text-amber-900'}`}>
        <option className="text-gray-800 " value="motocicleta">motocicleta</option>
        <option className="text-blue-800 "  value="coche">coche</option>
        <option className="text-amber-900 "  value="camion">camion</option>
      </select>
    </div>
    <div className="mb-4">
      <label htmlFor="color" className="block text-gray-700 text-sm font-bold mb-2">Color:</label>
      <input type="text" id="color" name="color" value={color} onChange={(e) => setColor(e.target.value)} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    
    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
  </form>
</div>

  </>
  )
}

export default FormAltas