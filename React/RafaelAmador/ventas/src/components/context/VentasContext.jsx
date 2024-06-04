import { createContext } from "react";
import { useState } from "react";

const SalesContext = createContext();

export const VentasContext = ({ children }) => {
    const [ventas, setVentas] = useState([
        { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
        { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
        { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
        { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
        { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
    ])
  return (
    <SalesContext.Provider value={{ ventas, setVentas}} >
        {children}
    </SalesContext.Provider>
)}

export default SalesContext