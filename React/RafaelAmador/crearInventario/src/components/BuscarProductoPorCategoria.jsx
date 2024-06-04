import {  useState } from "react";
import Swal from 'sweetalert2';
import { buscarProductosPorCategoria } from "../firebase/products";


const BuscarProductoPorCategoria = () => {
    const [categoria, setCategoria] = useState('');
    const [resultados, setResultados] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!categoria) {
            Swal.fire({
                icon: 'error',
                title: 'Campo vacío',
                text: 'Por favor, ingresa una categoría para buscar.',
            });
            return;
        }

        try {
            const productos = await buscarProductosPorCategoria(categoria);
            setResultados(productos);
        } catch (error) {
            console.error('Error al buscar productos:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un problema al buscar los productos. Por favor, inténtalo de nuevo más tarde.',
            });
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}
            >
                <input
                    type="text"
                    value={categoria}
                    onChange={(e) => setCategoria(e.target.value)}
                    placeholder="Categoría del producto"
                    style={{ marginBottom: '20px', padding: '8px', fontSize: '16px' }}
                />
                <button
                    type="submit"
                    style={{
                        backgroundColor: '#198754',
                        color: '#fff',
                        padding: '10px 20px',
                        fontSize: '16px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                >
                    Buscar Producto
                </button>
            </form>
            <div style={{ marginTop: '20px' }}>
                {resultados.length > 0 ? (
                    resultados.map((producto) => (
                        <div key={producto.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
                            <h3>{producto.nombre}</h3>
                            <p>Precio: {producto.precio}</p>
                            <p>Stock: {producto.stock}</p>
                            <p>Categoría: {producto.categoria}</p>
                        </div>
                    ))
                ) : (
                    <p>No se encontraron productos para la categoría especificada.</p>
                )}
            </div>
        </div>
    );
};

export default BuscarProductoPorCategoria;