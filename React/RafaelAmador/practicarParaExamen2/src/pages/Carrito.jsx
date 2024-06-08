import { useContext } from "react";
import { ProductosContext } from "../components/context/ProductosProvider";
import { addCompra } from "../firebase/compras";
import Swal from 'sweetalert2';

const Carrito = () => {
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
        <>
            {carrito.length === 0 ? (
                <p>El carrito está vacío</p>
            ) : (
                carrito.map((carro, index) => (
                    <div key={index} style={{ marginBottom: "10px"}}>
                        <p>{carro.nombre}</p>
                        <p>{carro.precio}€</p>
                        <button onClick={() => handleBorrar(index)} style={{ backgroundColor: '#dc3545', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Borrar</button>
                    </div>
                ))
            )}
            <button onClick={handleComprar} style={{backgroundColor: '#28a745', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px'}}>Comprar</button>
        </>
    );
};

export default Carrito;
