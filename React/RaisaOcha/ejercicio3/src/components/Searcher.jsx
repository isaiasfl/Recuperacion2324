import { useState } from "react";
import useProduct from "../hooks/useProduct";
import ProductCard from "../helpers/productCard";

const Searcher = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { products } = useProduct();
  const [foundProduct, setFoundProduct] = useState(null);

  const handleSearch = () => {
    const product = products.find((product) => product.name === searchTerm);
    setFoundProduct(product);
  };

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Nombre de la pieza"
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Buscar
        </button>
      </div>
      {foundProduct ? (
        <ProductCard product={foundProduct} />
      ) : (
        searchTerm && <p className="text-gray-500">No se encontró el producto</p>
      )}
    </div>
  );
}

export default Searcher;
