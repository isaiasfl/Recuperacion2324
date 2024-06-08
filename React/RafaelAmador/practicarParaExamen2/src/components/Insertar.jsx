import { useContext, useState } from "react";
import { ProductosContext } from "./context/ProductosProvider";
import Swal from "sweetalert2";

const Insertar = () => {
  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState("")
  const [precio, setPrecio] = useState(0)
  const [stock, setStock] = useState(0)
  const { productos, setProductos } = useContext(ProductosContext);

  const handleClick = (e) => {
    e.preventDefault();
    
    Swal.fire({
      icon: 'warning',
      title: '¿Estás seguro?',
      text: '¿Deseas insertar el producto?',
      showCancelButton: true,
      confirmButtonText: 'Sí, insertar',
      cancelButtonText: 'No, cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        const nuevoProducto = [...productos];
        const producto = {
          nombre,
          categoria,
          precio,
          stock,
        };
        nuevoProducto.push(producto);
        setProductos(nuevoProducto);
        setNombre("");
        setCategoria("");
        setPrecio(0);
        setStock(0);
  
        Swal.fire({
          icon: 'success',
          title: 'Producto Insertado',
          text: 'El producto fue insertado correctamente',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Cancelado',
          text: 'El producto no fue insertado',
        });
      }
    });
  };

  const handleChangeName = (e) =>{
    setNombre(e.target.value)
  }
  const handleChangeCategoria = (e) =>{
    setCategoria(e.target.value)
  }
  const handleChangePrecio = (e) =>{
    setPrecio(parseFloat(e.target.value))
  }
  const handleChangeStock = (e) =>{
    setStock(parseInt(e.target.value))
  }

  return (
    <div>
      <form>
        <input type="text" placeholder="nombre" value={nombre} onChange={handleChangeName} />
        <input type="text" placeholder="categoria" value={categoria} onChange={handleChangeCategoria} />
        <input type="number" placeholder="precio" value={precio} onChange={handleChangePrecio} />
        <input type="number" placeholder="stock" value={stock} onChange={handleChangeStock} />
        <button onClick={handleClick}>Insertar</button>
      </form>
    </div>
  )
}

export default Insertar