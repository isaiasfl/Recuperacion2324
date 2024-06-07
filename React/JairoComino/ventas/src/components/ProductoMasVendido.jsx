import { useContext, useEffect, useState } from 'react';
import SalesContext from './context/VentasContext';

const ProductoMasVendido = () => {
  const { ventas } = useContext(SalesContext);
  const [productoMasVendido, setProductoMasVendido] = useState(null);

  useEffect(() => {
    const totalPorProducto = {};

    ventas.forEach(({ product, quantity }) => {
      if (!totalPorProducto[product]) {
        totalPorProducto[product] = 0;
      }
      totalPorProducto[product] += quantity;
    });

    let mayor = 0;
    let productoMV = '';

    for (const product in totalPorProducto) {
      if (totalPorProducto[product] > mayor) {
        mayor = totalPorProducto[product];
        productoMV = product;
      }
    }

    setProductoMasVendido(productoMV);
  }, [ventas]);

  return (
    <div>
      <h2>Producto Más Vendido</h2>
      {productoMasVendido && <p>El producto más vendido es: {productoMasVendido}</p>}
    </div>
  );
};

export default ProductoMasVendido;