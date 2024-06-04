import { useState } from "react"
import Swal from "sweetalert2"

const InsertForm = ({ añadirObjeto}) => {
  const [nombre, setNombre] = useState("")
  const [stock, setStock] = useState(0)
  const [precio, setPrecio] = useState(0)


  const handleAddObject = (e) => {
    e.preventDefault();

    try {
      const newObject = {
        id : 4,
        nombre : nombre,
        stock : stock,
        precio : precio
      }
      Swal.fire({
        title: 'Confirmar Datos',
        html: `
          <p className="font-md font-semibold text-center">¿Estás seguro de añadir el objeto?</p>
          <p className="font-md text-center">Nombre: ${newObject.nombre}</p>
          <p className="font-md text-center">Stock: ${newObject.stock}</p>
          <p className="font-md text-center">Precio: ${newObject.precio}</p>
        `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Añadir',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          añadirObjeto(newObject)
          setNombre("")
          setStock(0)
          setPrecio(0)
        }
      })
    } catch (error) {
        console.error("Error al añadir el objeto: ", error)
    }
  }

  return (
    <div className="w-full mx-auto border border-black">
      <form action="" className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl text-center font-semibold mb-4">Nuevo Producto</h2>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-bold mb-2">Nombre</label>
            <input 
                type="text" 
                id="nombre" 
                placeholder="Nombre"
                value={nombre} 
                required
                onChange={(e) => setNombre(e.target.value)} 
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block text-sm font-bold mb-2">Stock</label>
            <input 
                type="number" 
                id="stock" 
                placeholder="Stock"
                value={stock} required 
                onChange={(e) => setStock(e.target.value)} 
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="precio" className="block text-sm font-bold mb-2">Precio</label>
            <input 
                type="number" 
                id="precio" 
                placeholder="Precio"
                value={precio} required 
                onChange={(e) => setPrecio(e.target.value)} 
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="text-center mt-8">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
              onClick={handleAddObject}
            >
              Guardar
            </button>
          </div>
      </form>
    </div>
  )
}

export default InsertForm