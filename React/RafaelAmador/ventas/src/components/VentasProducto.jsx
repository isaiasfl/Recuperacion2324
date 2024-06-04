import { useContext, useState } from 'react';
import SalesContext from './context/VentasContext';

const VentasProducto = () => {
  const { ventas } = useContext(SalesContext);
  const [producto, setProducto] = useState('');
  const [ventasProducto, setVentasProducto] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalVentas = 0;

    ventas.forEach((venta) => {
      if (venta.product === producto) {
        totalVentas += venta.quantity * venta.price;
      }
    });

    setVentasProducto(totalVentas);
  };

  return (
    <div>
      <h2>Ventas por Producto</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={producto}
          onChange={(e) => setProducto(e.target.value)}
          placeholder="Nombre del Producto"
        />
        <button type="submit">Calcular Ventas</button>
      </form>
      {ventasProducto !== null && (
        <p>Ventas totales para {producto}: {ventasProducto}€</p>
      )}
    </div>
  );
};

export default VentasProducto;