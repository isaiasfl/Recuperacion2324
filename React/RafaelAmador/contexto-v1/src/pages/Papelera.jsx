import { Link } from "react-router-dom"
import TablaProducts from "../components/TablaProducts"

const Papelera = () => {
  return (
    <>
      <TablaProducts />
      <hr />
      <Link to={"/productos"} ><button>Volver</button></Link>
    </>
  )
}

export default Papelera