import { useEffect, useState } from "react";
import ProductoContext from "./ProductoContext"
import { getProductos } from "../firebase/productosApi";

const ProductoProvider = ({children}) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const productosFetched = await getProductos();
                setProductos(productosFetched);
            } catch (error) {
                console.error("Error al obtener los productos: ", error);
            }
        };

        fetchData();
    }, [productos]);

    

  return (
    <div>
        <ProductoContext.Provider value={{productos}}>
            {children}
        </ProductoContext.Provider>
    </div>
  )
}

export default ProductoProvider