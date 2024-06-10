import Swal from "sweetalert2";

const ListaObjetos = ({objetos, eliminarObjeto}) => {

    const handleDelete = (id) => {
      Swal.fire({
          title: '¿Estás seguro?',
          text: "Esta acción no se puede deshacer",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Sí, borrar',
          cancelButtonText: 'Cancelar'
      }).then((result) => {
          if (result.isConfirmed) {
              // Eliminar el objeto
              eliminarObjeto(id)
              Swal.fire({
                  title: 'Borrado!',
                  text: 'El objeto ha sido eliminado.',
                  icon: 'success'
              });
          }
      });
    }
  return (
    <div className="container w-full mx-auto mt-5">
      <h2 className="text-2xl text-center font-semibold mb-4">
        Lista de Objetos
      </h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-center font-semibold hover:bg-gray-400"
            >
              Nombre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center font-semibold hover:bg-gray-400"
            >
              Stock
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-center font-semibold hover:bg-gray-400"
            >
              Precio
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {objetos.listaObjetos &&
            objetos.listaObjetos.map((objeto, id) => (
              <tr key={id}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-md font-normal">
                    {objeto.nombre}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-md font-normal">
                    {objeto.stock}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-md font-normal">
                    {objeto.precio}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-md font-normal">
                    <button className="bg-red-500 hover:bg-red-700 font-bold py-2 
                    px-4 mx-2 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
                    onClick={() => handleDelete(objeto.id)}
                    >
                        🗑
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListaObjetos