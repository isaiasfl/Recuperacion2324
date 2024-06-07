import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"
import { editProduct } from "../firebase/productosApi";

const EditForm = ({ producto }) => {
  const [editProducto, setEditProducto] = useState(producto)
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEditProducto({ ...editProducto, [e.target.name]:e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(editProducto);
    try {
      await editProduct(producto.id, editProducto)
      Swal.fire({
        icon: "success",
        title: "¡Actualizacion correcta!",
        text: "Los datos se han actualizado correctamente"
      })
    } catch (error) {
      console.error("Error al actualizar el producto", error)
    } finally {
      navigate(-1);
    }
    
  }
  
  return (
    <div className="w-full mx-auto">
      <form action="" className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h2 className="text-3xl text-center font-semibold mb-4">Editar Producto</h2>
          <div className="mb-4">
            <label htmlFor="nombre" className="block text-sm font-bold mb-2">Nombre</label>
            <input 
                type="text" 
                id="nombre" 
                name="nombre"
                value={editProducto.nombre} 
                required
                onChange={handleChange} 
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="precio" className="block text-sm font-bold mb-2">Precio</label>
            <input 
                type="number" 
                id="precio" 
                name="precio"
                value={editProducto.precio} required 
                onChange={handleChange} 
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="stock" className="block text-sm font-bold mb-2">Stock</label>
            <input 
                type="number" 
                id="stock" 
                name="stock"
                value={editProducto.stock} required 
                onChange={handleChange} 
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="mb-4">
            <label htmlFor="categoria" className="block text-sm font-bold mb-2">Categoria</label>
            <input 
                type="text" 
                id="categoria" 
                name="categoria"
                value={editProducto.categoria} required 
                onChange={handleChange} 
                className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
            />
          </div>
          <div className="flex items-center justify-between mt-8">
            <button 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
              px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
              onClick={handleSubmit}
            >
              Editar
            </button>
            <button className="bg-gray-500 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md focus:outline-none" type="button" onClick={() => navigate(-1)}>Volver</button>
          </div>
      </form>
    </div>
  )
}

export default EditForm