
import { useTheme } from '../hooks/useTheme';

const ProductCard = ({ product }) => {
  const { theme } = useTheme();

  const cardClasses = `${theme.backgroundColor} ${theme.textColor} ${theme.fontFamily} shadow-lg rounded-lg p-6 mb-4 transform transition duration-300 hover:scale-105`;

  return (
    <div className={cardClasses}>
      <h3 className="text-lg font-bold mb-2">{product.name}</h3>
      <p>ID: {product.id}</p>
      <p>Stock: {product.stock}</p>
      <p>Precio: {product.price}</p>
    </div>
  );
};

export default ProductCard;

