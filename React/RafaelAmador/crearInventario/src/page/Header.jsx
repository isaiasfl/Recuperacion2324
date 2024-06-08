import { Link } from "react-router-dom"

const Header = () => {
  return ( 
    <div><Link to={"/productos"}>Productos</Link> <Link to={"/editar"}>Editar </Link><Link to={"/papelera"}>Borrar</Link> <Link to={"/buscar"}>Buscar por categoria</Link> </div>
  )
}

export default Header