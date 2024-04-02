import { useState } from "react"

const FormAltas = () => {
    const [bastidor, setBastidor] = useState("")
    const [marca, setMarca] = useState("")
    const [modelo, setModelo] = useState("")
    const [tipo, setTipo] = useState("")
    const [color, setColor] = useState("")

  return (
    <div className="w-full mx-auto mt-5">
      <form action="" className="bg-blue-100 shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl text-center font-semibold mb-4">Nuevo Vehiculo</h2>
          <div className="mb-4">
            <label htmlFor="bastidor" className="block text-gray-800 text-sm font-bold mb-2">Nº Bastidor</label>
            <input 
            type="text" 
            id="bastidor" 
            placeholder="Nº Bastidor" 
            value={bastidor} required 
            onChange={(e) => setBastidor(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="marca" className="block text-gray-800 text-sm font-bold mb-2">Marca</label>
            <input 
                type="text" 
                id="marca" 
                placeholder="Marca Vehiculo"
                value={marca} required 
                onChange={(e) => setMarca(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="modelo" className="block text-gray-800 text-sm font-bold mb-2">Modelo</label>
            <input 
                type="text" 
                id="modelo" 
                placeholder="Modelo Vehiculo"
                value={modelo} required 
                onChange={(e) => setModelo(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="tipo" className="block text-gray-800 text-sm font-bold mb-2">Tipo</label>
            <select 
            name="tipo" 
            id="tipo" 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            required
            >
                <option value="coche">Coche</option>
                <option value="moto">Moto</option>
                <option value="camion">Camion</option>
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="color" className="block text-gray-800 text-sm font-bold mb-2">Color</label>
            <input 
                type="color" 
                id="color"
                value={color} required 
                onChange={(e) => setColor(e.target.value)} 
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="text-center mt-8">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
            //   onClick={handleAddTask}
            >
              Guardar
            </button>
          </div>
      </form>
    </div>
  )
}

export default FormAltas
