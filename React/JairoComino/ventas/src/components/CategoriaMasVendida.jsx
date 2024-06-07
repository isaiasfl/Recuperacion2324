import { useContext, useEffect, useState } from 'react';
import SalesContext from './context/VentasContext';

const CategoriaMasVendida = () => {
  const { ventas } = useContext(SalesContext);
  const [categoriaMasVendida, setCategoriaMasVendida] = useState(null);

  useEffect(() => {
    const totalPorCategoria = {};

    ventas.forEach(({ category, quantity }) => {
      if (!totalPorCategoria[category]) {
        totalPorCategoria[category] = 0;
      }
      totalPorCategoria[category] += quantity;
    });

    let mayor = 0;
    let categoriaMV = '';

    for (const category in totalPorCategoria) {
      if (totalPorCategoria[category] > mayor) {
        mayor = totalPorCategoria[category];
        categoriaMV = category;
      }
    }

    setCategoriaMasVendida(categoriaMV);
  }, [ventas]);

  return (
    <div>
      <h2>Categoría Más Vendida</h2>
      {categoriaMasVendida && <p>La categoría más vendida es: {categoriaMasVendida}</p>}
    </div>
  );
};

export default CategoriaMasVendida;