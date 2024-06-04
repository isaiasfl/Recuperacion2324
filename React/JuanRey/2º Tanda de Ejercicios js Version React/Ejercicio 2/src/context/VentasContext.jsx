import { createContext, useState, useContext } from 'react';
import { totalProductosVendidos as calcularResumen } from '../utils/Funciones';

const VentasContext = createContext();

export const VentasProvider = ({ children }) => {
    const [ventas, setVentas] = useState([
        { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
        { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
        { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
        { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
        { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
    ]);

    const addVenta = (nuevaVenta) => {
        setVentas([...ventas, nuevaVenta]);
    };

    const removeVenta = (index) => {
        setVentas(ventas.filter((_, i) => i !== index));
    };

    const resumen = calcularResumen(ventas);

    return (
        <VentasContext.Provider value={{ ventas, addVenta, removeVenta, resumen }}>
        {children}
        </VentasContext.Provider>
    );
};

export const useVentas = () => {
    return useContext(VentasContext);
};
