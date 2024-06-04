import { useVentas } from '../context/VentasContext';


const Ventas = () => {
    const { resumen } = useVentas();

    return (
        <div className="mt-4">
            <h2 className="text-xl font-bold mb-2">Resumen de Ventas</h2>
            <div className="bg-white p-4 border border-gray-200 rounded">
                <h3 className="font-semibold">Ventas por Producto:</h3>
                <ul className="list-disc list-inside">
                {Object.entries(resumen.totalVentasPorProducto).map(([producto, total]) => (
                    <li key={producto}>{producto}: ${total}</li>
                ))}
                </ul>
                <h3 className="font-semibold mt-2">Ventas por Categoría:</h3>
                <ul className="list-disc list-inside">
                {Object.entries(resumen.totalVentasPorCategoria).map(([categoria, total]) => (
                    <li key={categoria}>{categoria}: ${total}</li>
                ))}
                </ul>
                <h3 className="font-semibold mt-2">Producto más vendido:</h3>
                <p>{resumen.productoMasVendido}</p>
                <h3 className="font-semibold mt-2">Categoría más vendida:</h3>
                <p>{resumen.categoriaMasVendida}</p>
            </div>
        </div>
    );
};

export default Ventas;
