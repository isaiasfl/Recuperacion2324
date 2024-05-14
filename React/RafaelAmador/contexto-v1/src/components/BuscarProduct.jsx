import  { useContext, useState } from 'react'
import ProductContext from './context/ProductContext';
import Swal from 'sweetalert2';

const BuscarProduct = () => {
 
    const { products, setProducts } = useContext(ProductContext);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResult, setSearchResult] = useState(null);
  
    const handleSearch = () => {
      const result = products.find(product => product.name.toLowerCase() === searchTerm.toLowerCase());
      setSearchResult(result);
    };
    const handleSaveChanges = () => {
        if (!searchResult) return; 
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
        setSearchResult(false);
    };
    return (
      <div>
        <input type="text" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button onClick={handleSearch}style={{ backgroundColor: '#198754' }}>Buscar</button>
        {searchResult && (
          <form>
            <input type="text" value={searchResult.name} readOnly />
            <input type="number" value={searchResult.stock} onChange={(e) => setSearchResult({...searchResult, stock: e.target.value})} />
            <input type="number" value={searchResult.price} onChange={(e) => setSearchResult({...searchResult, price: e.target.value})} />
            <button type="button" onClick={handleSaveChanges} style={{ backgroundColor: '#198754' }}>Guardar Cambios</button>
          </form>
        )}
      </div>
    );
  };

export default BuscarProduct