import React, { useEffect, useState } from 'react'
import { getCategorias } from '../helpers/getProductos ';
import { getProductos } from '../helpers/setCategorias';

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

    //   useEffect(() => {
    //     const fetchProductos = async () => {
    //       const data = await getProductos();
    //       setProductos(data);
    //     };
    //     const fetchCategorias = async () => {
    //         const data = await getCategorias();
    //         setCategorias(data);
    //       };
      
    //       fetchCategorias();
    //     fetchProductos();
    //   }, []);
    const productosFiltrados = categoriaSeleccionada
    ? productos.filter(producto => producto.categoria === categoriaSeleccionada)
    : productos;
  return (
    <div>
    <form>
      <select id="categoria" value={categoriaSeleccionada} onChange={(e)=>{setCategoriaSeleccionada((e.target.value))}}>
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
  )
}

export default Productos