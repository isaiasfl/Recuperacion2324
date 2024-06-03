// importación de createContext para la creación de contexto.
import { createContext, useState} from "react";

// creacion y exportación del contexto
export const ProductContext = createContext();


// proveedor (provider) del contexto y exportación
export const ProductProvider = ({ children }) => {
     const [products, setProducts] = useState([]);

  const addProduct = (product) => {
    setProducts([...products, product]);
  };
  const deleteProduct = (productId) => {
    setProducts(products.filter(product => product.id !== productId));
  };


    return(
        <ProductContext.Provider value={{ products, addProduct, deleteProduct  }}>
      {children}
        </ProductContext.Provider>
    )

}

export default ProductContext;
