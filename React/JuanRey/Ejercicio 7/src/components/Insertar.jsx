import { useContext, useState } from "react";
import { ProductosContext } from "../context/ProductosProvider";
import Swal from "sweetalert2";

const Insertar = () => {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const { productos, setProductos } = useContext(ProductosContext);

    const handleClick = (e) => {
        e.preventDefault();

        Swal.fire({
            icon: 'warning',
            title: '¿Estás seguro?',
            text: '¿Deseas insertar el producto?',
            showCancelButton: true,
            confirmButtonText: 'Sí, insertar',
            cancelButtonText: 'No, cancelar',
        }).then((result) => {
            if (result.isConfirmed) {
                const nuevoProducto = [...productos];
                const producto = {
                    nombre,
                    categoria,
                    precio,
                    stock,
                };
                nuevoProducto.push(producto);
                setProductos(nuevoProducto);
                setNombre("");
                setCategoria("");
                setPrecio(0);
                setStock(0);

                Swal.fire({
                    icon: 'success',
                    title: 'Producto Insertado',
                    text: 'El producto fue insertado correctamente',
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Cancelado',
                    text: 'El producto no fue insertado',
                });
            }
        });
    };

    const handleChangeName = (e) => {
        setNombre(e.target.value);
    };
    const handleChangeCategoria = (e) => {
        setCategoria(e.target.value);
    };
    const handleChangePrecio = (e) => {
        setPrecio(parseFloat(e.target.value));
    };
    const handleChangeStock = (e) => {
        setStock(parseInt(e.target.value));
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-center">Insertar Producto</h2>
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Nombre" 
                        value={nombre} 
                        onChange={handleChangeName} 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="text" 
                        placeholder="Categoría" 
                        value={categoria} 
                        onChange={handleChangeCategoria} 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="number" 
                        placeholder="Precio" 
                        value={precio} 
                        onChange={handleChangePrecio} 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <div className="mb-4">
                    <input 
                        type="number" 
                        placeholder="Stock" 
                        value={stock} 
                        onChange={handleChangeStock} 
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                    />
                </div>
                <button 
                    onClick={handleClick} 
                    className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Insertar
                </button>
            </form>
        </div>
    );
};

export default Insertar;
