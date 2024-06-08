import { useContext } from "react";
import { ProductosContext } from "../components/context/ProductosProvider";
import Swal from "sweetalert2";

const Productos = () => {
    const { productos, setProductos, carrito, setCarrito } = useContext(ProductosContext);
    const handleAdd = (producto) => {
      if( producto.stock>0){
        const carro = [...carrito];
        carro.push(producto);
        const productosActualizados = productos.map(prod => {
          if (prod.id === producto.id) {
              return { ...prod, stock: prod.stock - 1 }; 
          }
          return prod;
        });
        setProductos(productosActualizados)
        setCarrito(carro);
        localStorage.setItem("carrito", JSON.stringify(carro)); 
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Fuera de stock',
          text: 'El producto esta fuera de stock',
        });
      }
    }
      
  return (
    <div>
        {productos.length === 0 ? "sin productos" : 
        <div>
            {productos.map((producto, index) => (
              <div key={index}>
                <p>{producto.nombre}</p>
                <p>{producto.precio}€</p>
                <p>{producto.categoria}</p>
                <p>stock: {producto.stock}</p>
                <button onClick={() => handleAdd(producto)} disabled={producto.stock <= 0} style={{ backgroundColor: '#0d6efd', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>
                  Añadir
                </button>
              </div>
            ))}
        </div>
        }
    </div>
  )
}

export default Productos