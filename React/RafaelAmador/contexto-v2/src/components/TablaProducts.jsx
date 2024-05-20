import  { useContext } from 'react'
import ProductContext from './context/ProductContext';
import Swal from 'sweetalert2';
import { borrarProducto } from '../firebase/products';

const TablaProducts =  () => {
  const { products, setProducts } = useContext(ProductContext);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      icon: 'question',
      title: '¿Seguro que quiere borrar el producto?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    });
    
    if (result.isConfirmed) {
      try {
        await borrarProducto(id);
        const updatedProducts = products.filter(product => product.id !== id);
        setProducts(updatedProducts);

        Swal.fire({
          icon: 'success',
          title: 'Producto Eliminado',
          text: 'El producto ha sido eliminado.',
        });
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al eliminar el producto. Por favor, inténtalo de nuevo más tarde.',
        });
      }
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Stock</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.nombre}</td> 
              <td>{product.stock}</td>
              <td>{product.precio}</td> 
              <td><button onClick={() => handleDelete(product.id)} style={{ backgroundColor: '#dc3545', color: '#fff', padding: '5px 10px', border: 'none', cursor: 'pointer' }}>Borrar</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};



export default TablaProducts