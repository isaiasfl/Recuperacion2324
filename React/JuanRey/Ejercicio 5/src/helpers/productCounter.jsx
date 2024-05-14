
const ProductCounter = ({ count }) => {
    return (
        <div className="mt-4 p-4 bg-gray-100 rounded">
            <h2 className="text-lg">Total de Productos: {count}</h2>
        </div>
    );
};

export default ProductCounter;
