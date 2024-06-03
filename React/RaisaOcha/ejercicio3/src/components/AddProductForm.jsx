import { useState } from 'react';
import useProduct from '../hooks/useProduct';
import { useTheme } from '../hooks/useTheme';
// import ProductContext from '../contexts/ProductContext';

const AddProductForm = () => {
  const [productName, setProductName] = useState('');
  const [productStock, setProductStock] = useState('');
  const [productPrice, setProductPrice] = useState('');
  
  const { theme } = useTheme();
  const { addProduct } = useProduct();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newProduct = {
      id: Math.floor(Math.random() * 1000), 
      name: productName,
      stock: parseInt(productStock),
      price: parseFloat(productPrice),
    };
    addProduct(newProduct);

    setProductName('');
    setProductStock('');
    setProductPrice('');
  };

  return (

    <form onSubmit={handleSubmit}  style={{ backgroundColor: theme.backgroundColor, textColor: theme.color, fontFamily: theme.fontFamily }}>
      <div className="mb-4">
        <label htmlFor="productName" className="block text-gray-700 font-bold mb-2">Nombre del Producto:</label>
        <input
          type="text"
          id="productName"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          required
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productStock" className="block text-gray-700 font-bold mb-2">Stock:</label>
        <input
          type="number"
          id="productStock"
          value={productStock}
          onChange={(e) => setProductStock(e.target.value)}
          required
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="productPrice" className="block text-gray-700 font-bold mb-2">Precio:</label>
        <input
          type="number"
          step="0.01"
          id="productPrice"
          value={productPrice}
          onChange={(e) => setProductPrice(e.target.value)}
          required
          className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Añadir Producto
      </button>
    </form>
  );
};

export default AddProductForm;