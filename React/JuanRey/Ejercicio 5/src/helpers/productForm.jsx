import { useState, useContext } from 'react';
import { ProductContext } from '../context/productContext';

const ProductForm = () => {
    const { addProduct } = useContext(ProductContext);
    const [product, setProduct] = useState({ id: '', name: '', stock: 0, price: 0 });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addProduct(product);
        setProduct({ id: '', name: '', stock: 0, price: 0 });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                value={product.name}
                onChange={handleChange}
                placeholder="Nombre del producto"
                className="p-2 border rounded w-full"
                required
            />
            <input
                type="number"
                name="stock"
                value={product.stock}
                onChange={handleChange}
                placeholder="Stock"
                className="p-2 border rounded w-full"
                required
            />
            <input
                type="number"
                name="price"
                value={product.price}
                onChange={handleChange}
                placeholder="Precio"
                className="p-2 border rounded w-full"
                required
            />
            <button type="submit" className="p-2 bg-green-500 text-white rounded">
                Añadir Producto
            </button>
        </form>
    );
};

export default ProductForm;
