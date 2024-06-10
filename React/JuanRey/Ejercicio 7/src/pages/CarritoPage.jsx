import { useContext } from "react";
import { ProductosContext } from "../context/ProductosProvider";
import { addCompra } from "../firebase/compras";
import Swal from 'sweetalert2';

const CarritoPage = () => {
    const { productos, setProductos, carrito, setCarrito } = useContext(ProductosContext);

    const handleBorrar = (index) => {
        const productoEliminado = carrito[index];
        const nuevoCarrito = carrito.filter((_, i) => i !== index);
        const productosActualizados = productos.map(producto => {
            if (productoEliminado && producto.id === productoEliminado.id) {
                return { ...producto, stock: producto.stock + 1 };
            }
            return producto;
        });

        setCarrito(nuevoCarrito);
        setProductos(productosActualizados);
        localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
    };

    const handleComprar = async () => {
        let precioTotal = 0;
        carrito.forEach((producto) => {
            precioTotal += producto.precio;
        });

        try {
            await addCompra(carrito, precioTotal);
            setCarrito([]);  // Vacía el carrito después de la compra
            localStorage.removeItem('carrito');  // Elimina el carrito del localStorage

            Swal.fire({
                icon: 'success',
                title: 'Compra realizada',
                text: `Tu compra ha sido realizada con éxito. Total: ${precioTotal}€`
            });
        } catch (error) {
            console.error("Error al realizar compra: ", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al realizar la compra. Inténtalo de nuevo.'
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4">Carrito de Compras</h1>
                {carrito.length === 0 ? (
                    <p className="text-center text-gray-500">El carrito está vacío</p>
                ) : (
                    carrito.map((carro, index) => (
                        <div key={index} className="flex justify-between items-center mb-4 p-4 bg-gray-50 rounded-md">
                            <div>
                                <p className="text-lg font-medium">{carro.nombre}</p>
                                <p className="text-gray-600">{carro.precio}€</p>
                            </div>
                            <button 
                                onClick={() => handleBorrar(index)} 
                                className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
                            >
                                Borrar
                            </button>
                        </div>
                    ))
                )}
                {carrito.length > 0 && (
                    <button 
                        onClick={handleComprar} 
                        className="w-full bg-green-500 text-white py-3 px-6 rounded-md hover:bg-green-600 transition duration-300"
                    >
                        Comprar
                    </button>
                )}
            </div>
        </div>
    );
};

export default CarritoPage;
