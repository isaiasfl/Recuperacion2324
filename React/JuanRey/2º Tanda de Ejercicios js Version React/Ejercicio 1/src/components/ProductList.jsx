import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import { deleteProducto } from "../firebase/InventoryFirebase";
import { useState } from "react";
import SearchForm from "./SearchForm";

const ShowProducts = ({productos}) => {
  const [filter, setFilter] = useState("")
  const [productosFiltrados, setProductosFiltrados] = useState(productos)

  const handleDelete = async (id) => {
    try {
      Swal.fire({
        icon: "warning",
        title: "¿Estas seguro?",
        text: "Esta accion no se puede revertir",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
          deleteProducto(id)
          Swal.fire({
            icon: "success",
            title: "Borrado",
            text: "El producto se ha borrado con exito"
          })
          setProductosFiltrados(productos => productos.filter(producto => producto.id !== id));
        }
      })

    } catch (error) {
      Swal.fire({
          icon: "warning",
          title: "Error",
          text: "Error al eliminar el producto",
      })
    }
  }

  const handleSearch = (category) => {
    if (category.trim() === '') {
      setProductosFiltrados(productos);
    } else {
      const filtered = productos.filter((producto) => producto.categoria.toLowerCase() === category.toLowerCase());
      setProductosFiltrados(filtered);
    }
  };

  const handleOrderByPrice = () => {
    setProductosFiltrados([...productosFiltrados].sort((a,b) => a.precio - b.precio))
  }
  
  return (
    <div className="container w-full mx-auto mt-5">
      <div className="">
        <SearchForm filter={filter} setFilter={setFilter} handleSearch={handleSearch}/>
      </div>
      <h2 className="text-2xl text-center font-semibold text-gray-900 mb-4">
        Lista de Productos
      </h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-200">
          <tr>
          <th
              scope="col"
              className="px-6 py-3 text-center font-semibold text-gray-900"
            >
              ID
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center font-semibold text-gray-900"
            >
              Nombre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center font-semibold text-gray-900 hover:bg-gray-400"
              onClick={handleOrderByPrice}
            >
              Precio
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center font-semibold text-gray-900"
            >
              Stock
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center font-semibold text-gray-900"
            >
              Categoria
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {productosFiltrados &&
            productosFiltrados.map((producto) => (
              <tr key={producto.id}>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md font-normal text-gray-900">
                        {producto.id}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md font-normal text-gray-900">
                        {producto.nombre}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md font-normal text-gray-900">
                        {producto.precio}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md font-normal text-gray-900">
                        {producto.stock}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md font-normal text-gray-900">
                        {producto.categoria}
                    </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-md font-normal text-gray-900">
                      <Link to={`/edit/${producto.id}`}>
                        <button 
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                        px-4 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
                            Editar
                        </button>
                      </Link>
                      <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none hover:shadow-grey-400" onClick={() => handleDelete(producto.id)}>Eliminar</button>
                    </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ShowProducts