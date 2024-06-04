import { useVentas } from '../context/VentasContext';


const TablaDeVentas = () => {

    const { ventas } = useVentas();

    return (
        <table className="min-w-full bg-white border border-gray-200">
            <thead>
                <tr>
                <th className="px-4 py-2 border">Producto</th>
                <th className="px-4 py-2 border">Categoría</th>
                <th className="px-4 py-2 border">Cantidad</th>
                <th className="px-4 py-2 border">Precio</th>
                <th className="px-4 py-2 border">Total</th>
                </tr>
            </thead>
            <tbody>
                {ventas.map((venta, index) => (
                <tr key={index}>
                    <td className="px-4 py-2 border">{venta.product}</td>
                    <td className="px-4 py-2 border">{venta.category}</td>
                    <td className="px-4 py-2 border">{venta.quantity}</td>
                    <td className="px-4 py-2 border">{venta.price}</td>
                    <td className="px-4 py-2 border">{venta.quantity * venta.price}</td>
                </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TablaDeVentas;
