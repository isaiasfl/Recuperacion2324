import { useContext, useState } from "react";
import Swal from 'sweetalert2';
import { insertarProducto } from "../firebase/products";
import ProductContext from "./context/ProductContext";

const InsertarProducto = () => {
    const { products, setProducts } = useContext(ProductContext);
    const [name, setName] = useState('');
    const [stock, setStock] = useState('');
    const [categoria, setCategoria] = useState('');
    const [price, setPrice] = useState('');

    const handleSubmit = async (e) => {
      e.preventDefault();
   

      if (!name || !stock || !categoria || !price) {
        Swal.fire({
          icon: 'error',
          title: 'Campos incompletos',
          text: 'Por favor, completa todos los campos.',
        });
        return;
      }

      const newProduct = {
        nombre: name,
        stock: parseInt(stock),
        categoria: categoria,
        precio: parseFloat(price),
      };
      console.log(newProduct);

      try {
        
        const productId = await insertarProducto(newProduct);
        console.log("dsf");
        setProducts([...products, { id: productId, ...newProduct }]);
        Swal.fire({
          icon: 'success',
          title: 'Producto insertado',
          text: 'El producto ha sido insertado correctamente.',
        });
        setCategoria('');
        setName('');
        setStock('');
        setPrice('');
      } catch (error) {
        console.error('Error al insertar el producto:', error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al insertar el producto. Por favor, inténtalo de nuevo más tarde.',
        });
      }
    };

    return (
      <form
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}
      >
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre del producto"
          style={{ marginBottom: '20px', padding: '8px', fontSize: '16px' }}
        />
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Categoría del producto"
          style={{ marginBottom: '20px', padding: '8px', fontSize: '16px' }}
        />
        <input
          type="number"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          placeholder="Stock"
          style={{ marginBottom: '20px', padding: '8px', fontSize: '16px' }}
        />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio"
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
          Agregar Producto
        </button>
      </form>
    );
}

export default InsertarProducto;