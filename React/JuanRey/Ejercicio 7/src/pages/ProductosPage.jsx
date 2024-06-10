import { useContext } from "react";
import { ProductosContext } from "../context/ProductosProvider";
import Swal from "sweetalert2";

const Productos = () => {
    const { productos, setProductos, carrito, setCarrito } = useContext(ProductosContext);

    const handleAdd = (producto) => {
        if (producto.stock > 0) {
            const carro = [...carrito];
            carro.push(producto);
            const productosActualizados = productos.map(prod => {
                if (prod.id === producto.id) {
                    return { ...prod, stock: prod.stock - 1 };
                }
                return prod;
            });
            setProductos(productosActualizados);
            setCarrito(carro);
            localStorage.setItem("carrito", JSON.stringify(carro));
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Fuera de stock',
                text: 'El producto está fuera de stock',
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Productos</h1>
                {productos.length === 0 ? (
                    <p className="text-center text-gray-500">Sin productos</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {productos.map((producto, index) => (
                            <div key={index} className="p-4 bg-gray-50 rounded-md shadow-md">
                                <p className="text-lg font-medium">{producto.nombre}</p>
                                <p className="text-gray-600">{producto.precio}€</p>
                                <p className="text-gray-600">{producto.categoria}</p>
                                <p className="text-gray-600">Stock: {producto.stock}</p>
                                <button
                                    onClick={() => handleAdd(producto)}
                                    disabled={producto.stock <= 0}
                                    className={`mt-4 w-full py-2 px-4 rounded-md transition duration-300 ${
                                        producto.stock > 0 ? 'bg-blue-500 hover:bg-blue-600 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                    }`}
                                >
                                    Añadir
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Productos;
