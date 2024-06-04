import { useState } from 'react';
import { db } from '../firebase';

const AddProductForm = () => {
  const [product, setProduct] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);
  const [type, setType] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await db.collection('inventory').add({
      product,
      quantity: parseInt(quantity),
      price: parseFloat(price),
      type
    });
    setProduct('');
    setQuantity(0);
    setPrice(0);
    setType('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="mb-2">
        <input
          type="text"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          placeholder="Producto"
          className="border px-2 py-1"
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Cantidad"
          className="border px-2 py-1"
        />
      </div>
      <div className="mb-2">
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Precio"
          className="border px-2 py-1"
        />
      </div>
      <div className="mb-2">
        <input
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="Tipo"
          className="border px-2 py-1"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Añadir Producto</button>
    </form>
  );
};

export default AddProductForm;
