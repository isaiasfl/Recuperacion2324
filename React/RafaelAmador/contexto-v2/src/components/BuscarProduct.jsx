import  { useContext, useState } from 'react'
import ProductContext from './context/ProductContext';
import Swal from 'sweetalert2';
import { actualizarProducto } from '../firebase/products';

const BuscarProduct = () => {
 
  const { products, setProducts } = useContext(ProductContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    const result = products.find(product => product.nombre.toLowerCase() === searchTerm.toLowerCase());
    setSearchResult(result);
  };

  const handleSaveChanges = async () => {
    if (!searchResult) return;
    try {
      await actualizarProducto(searchResult.id, {
        nombre: searchResult.nombre,
        stock: searchResult.stock,
        precio: searchResult.precio
      });

      const updatedProducts = products.map(product => {
        if (product.id === searchResult.id) {
          Swal.fire({
            icon: 'success',
            title: 'Cambios efectuados!',
            text: 'Los cambios se han efectuado correctamente.',
          });
          return searchResult;
        } else {
          return product;
        }
      });
      setProducts(updatedProducts);
      setSearchResult(null);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al actualizar el producto. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={handleSearch} style={{ backgroundColor: '#198754', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer' }}>Buscar</button>
      {searchResult && (
        <form>
          <input type="text" value={searchResult.nombre} readOnly />
          <input type="number" value={searchResult.stock} onChange={(e) => setSearchResult({ ...searchResult, stock: parseInt(e.target.value) })} />
          <input type="number" value={searchResult.precio} onChange={(e) => setSearchResult({ ...searchResult, precio: parseFloat(e.target.value) })} />
          <button type="button" onClick={handleSaveChanges} style={{ backgroundColor: '#198754', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer' }}>Guardar Cambios</button>
        </form>
      )}
    </div>
  );
};

export default BuscarProduct