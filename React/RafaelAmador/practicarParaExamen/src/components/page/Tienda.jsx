import Swal from "sweetalert2";
import Carrito from "../Carrito"
import Productos from "../Productos"
import { useEffect, useState } from "react";

const Tienda = () => {
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    try {
      const carritoLocal = localStorage.getItem('carrito');
      const parsedCarrito = carritoLocal ? JSON.parse(carritoLocal) : [];
      setCarrito(parsedCarrito);
    } catch (error) {
      console.error("Error parsing carrito from localStorage:", error);
      setCarrito([]);
    }
  }, []);

  const handleAddToCarrito = (producto) => {
    const nuevoCarrito = [...carrito, producto];
    setCarrito(nuevoCarrito);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  };

  const handleDeleteFromCarrito = (index) => {
    const nuevoCarrito = carrito.filter((_, i) => i !== index);
    setCarrito(nuevoCarrito);
    localStorage.setItem('carrito', JSON.stringify(nuevoCarrito));
  };

  const handleComprar = async (precioTotal) => {
    if (carrito.length === 0) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No hay productos en el carrito para comprar',
      });
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/compras', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({carrito, precioTotal}),
      });

      if (response.ok) {
        localStorage.clear();
        setCarrito([]);
        Swal.fire({
          icon: 'success',
          title: 'Compra realizada',
          text: 'La compra ha sido realizada con éxito',
        });
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Hubo un problema al realizar la compra',
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al realizar la compra',
      });
    }
  };

  return (
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <Productos handleAddToCarrito={handleAddToCarrito} />
      </div>
      <hr />
      <div style={{ flex: 1 }}>
        <Carrito carrito={carrito} handleDeleteFromCarrito={handleDeleteFromCarrito} handleComprar={handleComprar} />
      </div>
    </div>
  );
}

export default Tienda