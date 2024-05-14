import { createContext, useState } from "react";


const ProductContext = createContext();

const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    const addProduct = (product) => {
        setProducts([...products, product]);
    };

    const updateProduct = (updatedProduct) => {
        setProducts(products.map(product => product.id === updatedProduct.id ? updatedProduct : product));
    };

    const removeProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    const productContextValue = {
        products,
        addProduct,
        updateProduct,
        removeProduct,
    };

    return (
        <ProductContext.Provider value={productContextValue}>
            {children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };
