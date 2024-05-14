import { useContext, useState } from 'react';
import { ProductContext } from '../context/productContext';
import ConfigButton from '../helpers/configButton';

const EditPage = () => {
    const { products, updateProduct } = useContext(ProductContext);
    const [search, setSearch] = useState('');
    const [product, setProduct] = useState(null);

    const handleSearch = () => {
        const foundProduct = products.find(p => p.name === search);
        setProduct(foundProduct);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (product) {
            updateProduct(product);
        }
    };

    return (
        <div className="p-4">
            <header className="flex justify-between items-center mb-4">
                <ConfigButton />
            </header>
            <div className="mb-4">
                <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Buscar producto"
                    className="p-2 border rounded"
                />
                <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                    Buscar
                </button>
            </div>
            {product && (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        value={product.name}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                        required
                    />
                    <input
                        type="number"
                        name="stock"
                        value={product.stock}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                        required
                    />
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleChange}
                        className="p-2 border rounded w-full"
                        required
                    />
                    <button type="submit" className="p-2 bg-green-500 text-white rounded">
                        Actualizar
                    </button>
                </form>
            )}
        </div>
    );
};

export default EditPage;