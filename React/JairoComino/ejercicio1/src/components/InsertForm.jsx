import { useState } from "react"
import Swal from "sweetalert2"
import { addProduct } from "../firebase/productosApi"

const InsertForm = () => {
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState(0)
  const [stock, setStock] = useState(0)
  const [categoria, setCategoria] = useState("")


  const handleAddObject = (e) => {
    e.preventDefault();

    try {
      const newProduct = {
        nombre,
        precio,
        stock,
        categoria
      }
      Swal.fire({
        title: 'Confirmar Datos',
        html: `
          <p className="font-md font-semibold text-center">¿Estás seguro de añadir el objeto?</p>
          <p className="font-md text-center">Nombre: ${newProduct.nombre}</p>
          <p className="font-md text-center">Precio: ${newProduct.precio}</p>
          <p className="font-md text-center">Stock: ${newProduct.stock}</p>
          <p className="font-md text-center">Categoria: ${newProduct.categoria}</p>
        `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Añadir',
        cancelButtonText: 'Cancelar',
      }).then((result) => {
        if (result.isConfirmed) {
          addProduct(newProduct)
          setNombre("")
          setStock(0)
          setPrecio(0)
          setCategoria("")
        }
      })
    } catch (error) {
        console.error("Error al añadir el objeto: ", error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-12 rounded-lg shadow-lg w-full max-w-2xl">
        <form action="" className="shadow-md rounded px-12 pt-10 pb-12 mb-4">
          <h2 className="text-4xl text-center font-semibold mb-6">Nuevo Producto</h2>
          
          <div className="mb-6 flex items-center">
            <label htmlFor="nombre" className="block text-lg font-bold mb-2 w-1/3">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              placeholder="Nombre"
              value={nombre} 
              required
              onChange={(e) => setNombre(e.target.value)} 
              className="shadow appearance-none border rounded w-2/3 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500" 
            />
          </div>
          
          <div className="mb-6 flex items-center">
            <label htmlFor="precio" className="block text-lg font-bold mb-2 w-1/3">Precio</label>
            <input 
              type="number" 
              id="precio" 
              placeholder="Precio"
              value={precio} 
              required 
              onChange={(e) => setPrecio(e.target.value)} 
              className="shadow appearance-none border rounded w-2/3 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500" 
            />
          </div>
          
          <div className="mb-6 flex items-center">
            <label htmlFor="stock" className="block text-lg font-bold mb-2 w-1/3">Stock</label>
            <input 
              type="number" 
              id="stock" 
              placeholder="Stock"
              value={stock} 
              required 
              onChange={(e) => setStock(e.target.value)} 
              className="shadow appearance-none border rounded w-2/3 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500" 
            />
          </div>
          
          <div className="mb-6 flex items-center">
            <label htmlFor="categoria" className="block text-lg font-bold mb-2 w-1/3">Categoria</label>
            <input 
              type="text" 
              id="categoria" 
              placeholder="Categoria"
              value={categoria} 
              required 
              onChange={(e) => setCategoria(e.target.value)} 
              className="shadow appearance-none border rounded w-2/3 py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500" 
            />
          </div>
          
          <div className="text-center mt-10">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 
              px-6 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
              onClick={handleAddObject}
            >
              Guardar
            </button>
          </div>
        </form>
      </div>
    </div>


  )
}

export default InsertForm