import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../context/productContext';
import ProductForm from '../helpers/productForm';
import ProductCounter from '../helpers/productCounter';
import ConfigButton from '../helpers/configButton';

const MainPage = () => {
    const { products } = useContext(ProductContext);

    return (
        <div className="p-4">
        <h1 className="text-2xl mb-4">Productos</h1>
            <header className="flex justify-between items-center mb-4">
                <div>
                    <ConfigButton />
                    <Link to="/edit" className="mr-2">
                        <button className="p-2 bg-blue-500 text-white rounded">Editar</button>
                    </Link>
                    <Link to="/delete">
                        <button className="p-2 bg-red-500 text-white rounded">Borrar</button>
                    </Link>
                </div>
            </header>
            <ProductForm />
            <ProductCounter count={products.length} />
        </div>
    );
};

export default MainPage;