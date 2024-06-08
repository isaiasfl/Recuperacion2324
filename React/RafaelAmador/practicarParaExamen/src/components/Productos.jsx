import { useEffect, useState } from "react";
import { getProductos } from "../helper/productos";
import { getCategorias } from "../helper/categorias";

const Productos = ({ handleAddToCarrito }) => {
    const [categorias, setCategorias] = useState([]);
    const [productos, setProductos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  
    useEffect(() => {
      const fetchProductos = async () => {
        const data = await getProductos();
        setProductos(data);
      };
  
      fetchProductos();
    }, []);
  
    useEffect(() => {
      const fetchCategorias = async () => {
        const data = await getCategorias();
        setCategorias(data);
      };
  
      fetchCategorias();
    }, []);
  
    const handleCategoriaChange = (e) => {
      setCategoriaSeleccionada(e.target.value);
    };
  
    const productosFiltrados = categoriaSeleccionada
      ? productos.filter(producto => producto.categoria === categoriaSeleccionada)
      : productos;
  
    return (
      <div>
        <form>
          <select id="categoria" value={categoriaSeleccionada} onChange={handleCategoriaChange}>
            <option value="">Todas</option>
            {categorias.map((categoria, index) => (
              <option key={index} value={categoria}>{categoria}</option>
            ))}
          </select>
        </form>
        <ul>
          {productosFiltrados.map((producto) => (
            <li key={producto.nombre}>
              <div>{producto.nombre}</div>
              <div>{producto.categoria}</div>
              <div>{producto.stock}</div>
              <div>{producto.precio}€</div>
              <button onClick={() => handleAddToCarrito(producto)} style={{ backgroundColor: '#28a745', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>
                Añadir
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  

export default Productos;