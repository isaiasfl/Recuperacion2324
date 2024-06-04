import { useState } from 'react';
import { useVentas } from '../context/VentasContext';

const AddVentasForm = () => {
    const { addVenta } = useVentas();
    const [product, setProduct] = useState('');
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [price, setPrice] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        addVenta({ product, category, quantity: parseInt(quantity), price: parseFloat(price) });
        setProduct('');
        setCategory('');
        setQuantity(0);
        setPrice(0);
    };

    return (
        <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-2">
            <input
            type="text"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            placeholder="Producto"
            className="border px-2 py-1"
            />
        </div>
        <div className="mb-2">
            <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Categoría"
            className="border px-2 py-1"
            />
        </div>
        <div className="mb-2">
            <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="Cantidad"
            className="border px-2 py-1"
            />
        </div>
        <div className="mb-2">
            <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Precio"
            className="border px-2 py-1"
            />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">Añadir Venta</button>
        </form>
    );
};

export default AddVentasForm;
