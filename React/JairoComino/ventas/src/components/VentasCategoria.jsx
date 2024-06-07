import { useContext, useState } from 'react';
import SalesContext from './context/VentasContext';

const VentasCategoria = () => {
  const { ventas } = useContext(SalesContext);
  const [categoria, setCategoria] = useState('');
  const [ventasCategoria, setVentasCategoria] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    let totalVentas = 0;

    ventas.forEach((venta) => {
      if (venta.category === categoria) {
        totalVentas += venta.quantity * venta.price;
      }
    });

    setVentasCategoria(totalVentas);
  };

  return (
    <div>
      <h2>Ventas por Categoría</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder="Nombre de la Categoría"
        />
        <button type="submit">Calcular Ventas</button>
      </form>
      {ventasCategoria !== null && (
        <p>Ventas totales para la categoría {categoria}: {ventasCategoria}€</p>
      )}
    </div>
  );
};

export default VentasCategoria;