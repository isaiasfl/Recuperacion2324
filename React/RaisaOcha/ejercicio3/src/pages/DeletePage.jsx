import useProduct from "../hooks/useProduct";
import ProductCard from '../helpers/productCard';
import ProductCounter from "../helpers/productCounteer";
import { useTheme } from "../hooks/useTheme";

const DeletePage = () => {
  const { products, deleteProduct } = useProduct();
      const { theme } = useTheme();

  return (
    
   <div style={{ backgroundColor: theme.backgroundColor, textColor: theme.color, fontFamily: theme.fontFamily }}>
    <div className="p-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Productos Almacenados</h2>
      {products.map((product) => (
        <div key={product.id} className="flex items-center mb-4">
          <ProductCard product={product} />
          <button
            onClick={() => deleteProduct(product.id)}
            className="ml-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-700"
          >
            Eliminar
          </button>
        </div>
      ))}
    </div>
    <ProductCounter count={products.length} />
    </div>
  );
}

export default DeletePage;
