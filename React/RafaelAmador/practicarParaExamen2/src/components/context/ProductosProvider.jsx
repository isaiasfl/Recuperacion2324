import { createContext, useEffect, useState } from "react"
import { getProductos } from "../../helper/productos"

export const ProductosContext = createContext();
const ProductosProvider = ({ children }) => {
  
const [productos, setProductos] = useState([])
const [carrito, setCarrito] = useState([])

useEffect(() => {
  const carritoString = localStorage.getItem("carrito");
  const carrito = carritoString ? JSON.parse(carritoString) : [];
  setCarrito(carrito);
}, []);
  

  useEffect(() => {
    const fetchData = async () =>{
      const productos = await getProductos();
      setProductos(productos);
    }
    fetchData()
  }, [])

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
}, [carrito]);
  
  return (
    <ProductosContext.Provider value={{productos, setProductos, carrito, setCarrito}}>
      {children}
    </ProductosContext.Provider>
   
  )
}

export default ProductosProvider