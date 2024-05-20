import { useContext } from "react";
import ProductContext from "./context/ProductContext";

const Contador = () => {
  const { products } = useContext(ProductContext);

  return <p>Número de productos: {products.length}</p>;
}

export default Contador