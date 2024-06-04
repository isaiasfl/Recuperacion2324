import { useState } from 'react';
import { useEffect } from 'react';
import { obtenerProductosOrdenadosPorPrecio } from '../firebase/products';

const ProductosPorPrecio = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProductos = async () => {
            try {
                const productos = await obtenerProductosOrdenadosPorPrecio();
                setProductos(productos);
                setLoading(false);
            } catch (error) {
                console.error("Error al obtener los productos ordenados por precio:", error);
                setLoading(false);
            }
        };

        fetchProductos();
    }, []);

    if (loading) {
        return <p>Cargando productos...</p>;
    }

    return (
        <div>
            <h2>Productos Ordenados por Precio</h2>
            <div style={{ marginTop: '20px' }}>
                {productos.length > 0 ? (
                    productos.map((producto) => (
                        <div key={producto.id} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd' }}>
                            <h3>{producto.nombre}</h3>
                            <p>Precio: ${producto.precio}</p>
                            <p>Stock: {producto.stock}</p>
                            <p>Categoría: {producto.categoria}</p>
                        </div>
                    ))
                ) : (
                    <p>No hay productos disponibles.</p>
                )}
            </div>
        </div>
    );
};

export default ProductosPorPrecio