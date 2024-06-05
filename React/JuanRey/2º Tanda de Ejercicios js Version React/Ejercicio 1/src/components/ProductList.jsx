import { useEffect, useState } from 'react';
import { db } from '../firebase/Firebase';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsubscribe = db.collection('inventory').onSnapshot((snapshot) => {
      const items = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(items);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    await db.collection('inventory').doc(id).delete();
  };

  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="px-4 py-2 border">Producto</th>
          <th className="px-4 py-2 border">Cantidad</th>
          <th className="px-4 py-2 border">Precio</th>
          <th className="px-4 py-2 border">Tipo</th>
          <th className="px-4 py-2 border">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="px-4 py-2 border">{product.product}</td>
            <td className="px-4 py-2 border">{product.quantity}</td>
            <td className="px-4 py-2 border">{product.price}</td>
            <td className="px-4 py-2 border">{product.type}</td>
            <td className="px-4 py-2 border">
              <button
                className="bg-red-500 text-white px-4 py-2"
                onClick={() => handleDelete(product.id)}
              >
                Eliminar
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductList;
