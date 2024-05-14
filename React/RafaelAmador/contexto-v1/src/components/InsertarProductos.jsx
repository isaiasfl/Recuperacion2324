import { useContext, useState } from "react"
import ProductContext from "./context/ProductContext";
import Swal from "sweetalert2";

const InsertarProductos = () => {
  const { products, setProducts } = useContext(ProductContext);
  const [name, setName] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      id: Date.now(),
      name,
      stock: parseInt(stock),
      price: parseFloat(price),
    };
    setProducts([...products, newProduct]);
    Swal.fire({
      icon: 'success',
      title: 'Cambios efectuados!',
      text: 'Los cambios se han efectuado correctamente.',
    });
    setName('');
    setStock('');
    setPrice('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px', margin: '0 auto' }}>
      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Nombre del producto" 
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
        style={{ backgroundColor: '#198754', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer' }}
      >
        Agregar Producto
      </button>
    </form>
  
  )
}

export default InsertarProductos