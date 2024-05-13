import { Link } from "react-router-dom"
import Contador from "../components/Contador"
import InsertarProductos from "../components/InsertarProductos"

const Productos = () => {
  return (
    <>
        <InsertarProductos />
        <hr />
        <Contador />
        <Link to="/editar">Editar</Link>
    </>
  )
}

export default Productos