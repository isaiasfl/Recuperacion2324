import { useState } from 'react';
import { useVentas } from '../context/VentasContext';

const RemoveVentaForm = () => {
    const { ventas, removeVenta } = useVentas();
    const [index, setIndex] = useState('');

    const handleRemove = (e) => {
        e.preventDefault();
        removeVenta(parseInt(index));
        setIndex('');
    };

    return (
        <form onSubmit={handleRemove} className="mb-4">
        <div className="mb-2">
            <select
            value={index}
            onChange={(e) => setIndex(e.target.value)}
            className="border px-2 py-1"
            >
            <option value="">Selecciona una venta para eliminar</option>
            {ventas.map((venta, idx) => (
                <option key={idx} value={idx}>{venta.product} - {venta.category}</option>
            ))}
            </select>
        </div>
        <button type="submit" className="bg-red-500 text-white px-4 py-2">Eliminar Venta</button>
        </form>
    );
};

export default RemoveVentaForm;
