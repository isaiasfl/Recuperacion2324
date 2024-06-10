import { useState } from "react";
import Swal from 'sweetalert2';

const Insertar = () => {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);
    const handleSubmit = (e) =>{
        e.preventDefault();
        const producto = {
            nombre,
            categoria,
            precio: parseFloat(precio),
            stock: parseInt(stock),
        }
        fetch('http://localhost:4000/productos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        .then(response => {
            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Producto insertado',
                    text: `Producto insertado correctamente`,
                    });
                    setNombre("");
                    setCategoria("");
                    setPrecio(0);
                    setStock(0);
                } else {
                    throw new Error('Error en la inserción del producto');
                }
            })
            .catch(error => {
                console.error('Error:', error);
                Swal.fire({
                    icon: 'error',
                    title: 'Error al insertar',
                    text: `Se ha producido un error a la hora de insertar el producto`,
                });
            });
        }

        const handleNombreChange = (e) => {
        setNombre(e.target.value);
        };

        const handleCategoriaChange = (e) => {
        setCategoria(e.target.value);
        };

        const handlePrecioChange = (e) => {
        setPrecio(e.target.value);
        };

        const handleStockChange = (e) => {
        setStock(e.target.value);
        };
        

    return (
        <div>
            <form>
            <input 
            type="text"
            value={nombre}
            onChange={handleNombreChange}
            placeholder="nombre"
            name="nombre" />
        <input 
            type="text"
            value={categoria}
            onChange={handleCategoriaChange}
            placeholder="categoria"
            name="categoria" />
        <input 
            type="number"
            value={precio}
            onChange={handlePrecioChange}
            name="precio" />
        <input 
            type="number"
            value={stock}
            onChange={handleStockChange}
            name="stock" />

            </form>
            <button onClick={handleSubmit}>Comprar</button>
        </div>
    )
}

export default Insertar