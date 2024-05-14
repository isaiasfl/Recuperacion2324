import  { useContext } from 'react'
import ProductContext from './context/ProductContext';
import Swal from 'sweetalert2';

const TablaProducts =  () => {
    const { products, setProducts } = useContext(ProductContext);

    const handleDelete = async  (id) => {
  
        const result = await Swal.fire({
          icon: 'question',
          title: '¿Seguro que quiere borrar el producto?',
          showCancelButton: true,
          confirmButtonText: 'Confirmar',
          cancelButtonText: 'Cancelar',
        }) 
        if (result.isConfirmed) {
          Swal.fire({
              icon: 'success',
              title: 'Producto Eliminado',
              text: 'El producto ha sido eliminaado.',
          });
          const updatedProducts = products.filter(product => product.id !== id);
          setProducts(updatedProducts);
      }
       
     
      
    };
  
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }} >
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
                <td>{product.name}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td><button onClick={() => handleDelete(product.id)} style={{ backgroundColor: '#dc3545' }}>Borrar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


export default TablaProducts