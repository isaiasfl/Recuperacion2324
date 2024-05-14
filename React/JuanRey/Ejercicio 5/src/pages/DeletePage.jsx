import { useContext } from 'react';
import { ProductContext } from '../context/productContext';
import ConfigButton from '../helpers/configButton';

const DeletePage = () => {
    const { products, removeProduct } = useContext(ProductContext);

    return (
        <div className="p-4">
            <header className="flex justify-between items-center mb-4">
                <ConfigButton />
            </header>
            <table className="w-full border-collapse border border-gray-200">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">ID</th>
                        <th className="border border-gray-300 p-2">Nombre</th>
                        <th className="border border-gray-300 p-2">Stock</th>
                        <th className="border border-gray-300 p-2">Precio</th>
                        <th className="border border-gray-300 p-2">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product => (
                        <tr key={product.id}>
                            <td className="border border-gray-300 p-2">{product.id}</td>
                            <td className="border border-gray-300 p-2">{product.name}</td>
                            <td className="border border-gray-300 p-2">{product.stock}</td>
                            <td className="border border-gray-300 p-2">{product.price}</td>
                            <td className="border border-gray-300 p-2">
                                <button onClick={() => removeProduct(product.id)} className="p-2 bg-red-500 text-white rounded">
                                    Eliminar
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DeletePage;
