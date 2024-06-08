import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div><Link to={"/insertar"}>Insertar nuevo producto</Link> <Link to={"/tienda"}>Tienda</Link></div>
  )
}

export default Header