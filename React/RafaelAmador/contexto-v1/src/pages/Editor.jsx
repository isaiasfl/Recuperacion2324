import { Link } from "react-router-dom"
import BuscarProduct from "../components/BuscarProduct"

const Editor = () => {
  return (
    <>
      <BuscarProduct />
      <Link to={"/productos"} ><button>Volver</button></Link>
    </>
  )
}

export default Editor