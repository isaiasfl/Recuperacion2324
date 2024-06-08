import { Link } from "react-router-dom"
const Header = () => {
  return (
    <div><Link to={"/tienda"}>Tienda</Link> <Link to={"/insertar"}>Insertar</Link></div>
  )
}

export default Header