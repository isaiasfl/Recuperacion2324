import  { useContext } from 'react'
import ProductContext from './context/ProductContext';

const TablaProducts = () => {
    const { products, setProducts } = useContext(ProductContext);

    const handleDelete = (id) => {
      const updatedProducts = products.filter(product => product.id !== id);
      setProducts(updatedProducts);
    };
  
    return (
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.stock}</td>
              <td>{product.price}</td>
              <td><button onClick={() => handleDelete(product.id)}>Borrar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };


export default TablaProducts