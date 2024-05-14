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
    <form onSubmit={handleSubmit}>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Nombre del producto" />
      <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} placeholder="Stock" />
      <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} placeholder="Precio" />
      <button type="submit" style={{ backgroundColor: '#198754' }}>Agregar Producto</button>
    </form>
  )
}

export default InsertarProductos