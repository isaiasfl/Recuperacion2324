import Carrito from "../pages/Carrito"
import Productos from "../pages/Productos"


const Tienda = () => {
  return (
    <div style={{display: 'flex'}}>
      <div style={{flex: 1, marginRight:"100px"}}>
        <Productos />
      </div>
      
      <div style={{flex: 1, marginLeft: "100px"}}>
        <Carrito />
      </div>
    </div>
  )
}

export default Tienda