
import React, { useState } from 'react'
import Swal from 'sweetalert2';
const ProductoForm = () => {
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [precio, setPrecio] = useState(0);
    const [stock, setStock] = useState(0);

    const handleSubmit=(e)=>{
        e.preventDefault()
        let producto={
            nombre,
            categoria,
            precio:parseFloat(precio),
            stock:parseInt(stock),
        }
        ///añadismos ala db 
        fetch('http://localhost:4000/productos',{
            method:'POST',
            headers:{
                 'Content-Type': 'application/json'
            },
            body: JSON.stringify(producto)
        })
        .then(response=> { 
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
    }


        )
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: 'error',
                title: 'Error al insertar',
                text: `Se ha producido un error a la hora de insertar el producto`,
              });
        });
    }
  return (
    <div>
        <form>
        <input 
        type="text"
        value={nombre}
        onChange={(e)=>{setNombre(e.target.value)}}
        placeholder="nombre"
        name="nombre" />
      <input 
        type="text"
        value={categoria}
        onChange={(e)=>{setCategoria(e.target.value)}}
        placeholder="categoria"
        name="categoria" />
      <input 
        type="number"
        value={precio}
        onChange={(e)=>{setPrecio(e.target.value)}}
        name="precio" />
      <input 
        type="number"
        value={stock}
        onChange={(e)=>{setStock(e.target.value)}}
        name="stock" />

        </form>
        <button onClick={handleSubmit}>Añadir Producto</button>
    </div>
  )
}

export default ProductoForm