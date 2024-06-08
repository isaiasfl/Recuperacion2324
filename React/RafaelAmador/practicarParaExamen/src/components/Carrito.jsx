import Swal from "sweetalert2";

const Carrito = ({ carrito, handleDeleteFromCarrito, handleComprar }) => {
  const calcularPrecioTotal = () => {
    return carrito.reduce((total, producto) => total +=parseFloat(producto.precio), 0);
  };

  const handleConfirmarCompra = async () => {
    const precioTotal = calcularPrecioTotal();
    const result = await Swal.fire({
      title: 'Confirmar compra',
      text: `El precio total de la compra es de ${precioTotal}€`,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    });

    if (result.isConfirmed) {
      handleComprar(precioTotal);
    }
  };

  return (
    <div>
      {carrito.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        carrito.map((producto, index) => (
          <div key={index}>
            <li>{producto.nombre}, {producto.precio}€</li>
            <button 
              onClick={() => handleDeleteFromCarrito(index)} 
              style={{ 
                backgroundColor: '#dc3545', 
                color: '#fff', 
                padding: '10px 20px', 
                fontSize: '16px', 
                border: 'none', 
                cursor: 'pointer', 
                marginTop: '20px' 
              }}
            >
              Borrar
            </button>
          </div>
        ))
      )}
      <button 
       onClick={handleConfirmarCompra} 
        style={{ 
          backgroundColor: '#0d6efd', 
          color: '#fff', 
          padding: '10px 20px', 
          fontSize: '16px', 
          border: 'none', 
          cursor: 'pointer', 
          marginTop: '20px' 
        }}
        disabled={carrito.length === 0}
      >
        Comprar
      </button>
    </div>
  );
};


export default Carrito