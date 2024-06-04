import { useState } from "react"

const Buscador = () => {
    const [filtro, setFiltro] = useState("")
    const [id, setId] = useState(0)
    const [nombre, setNombre] = useState("")
    const [stock, setStock] = useState(0)
    const [precio, setPrecio] = useState(0)
  return (
    <div className="">
        <div className="flex flex-row justify-center p-2">
            <div className="">
                <input 
                    type="text" 
                    id="nombre" 
                    placeholder="Nombre"
                    value={filtro} 
                    required
                    onChange={(e) => setFiltro(e.target.value)} 
                    className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
                />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
            px-4 w-52 mx-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700">
                🔎
            </button>
        </div>

        <div className="w-full mx-auto">
            <form action="" className="shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h2 className="text-3xl text-center font-semibold mb-4">Editar Producto</h2>
                <div className="mb-4">
                    <label htmlFor="id" className="block text-sm font-bold mb-2">ID</label>
                    <input 
                        type="text" 
                        id="id" 
                        placeholder="Id"
                        // value={id} 
                        required
                        readOnly
                        // onChange={(e) => setId(e.target.value)} 
                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="nombre" className="block text-sm font-bold mb-2">Nombre</label>
                    <input 
                        type="text" 
                        id="nombre" 
                        placeholder="Nombre"
                        // value={nombre} 
                        required
                        // onChange={(e) => setNombre(e.target.value)} 
                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="stock" className="block text-sm font-bold mb-2">Stock</label>
                    <input 
                        type="number" 
                        id="stock" 
                        placeholder="Stock"
                        // value={stock} required 
                        // onChange={(e) => setStock(e.target.value)} 
                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="precio" className="block text-sm font-bold mb-2">Precio</label>
                    <input 
                        type="number" 
                        id="precio" 
                        placeholder="Precio"
                        // value={precio} required 
                        // onChange={(e) => setPrecio(e.target.value)} 
                        className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500 " 
                    />
                </div>
                <div className="text-center mt-8">
                    <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                    px-4 rounded focus:outline-none focus:shadow-lg focus:shadow-slate-700"
                    // onClick={handleAddObject}
                    >
                        Editar
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Buscador