import { Link } from "react-router-dom"

const Header = () => {
  return ( 
    <div><Link to={"/agregar"}>Agregar comentarios</Link> <Link to={"/ordenar"}>Comentarios ordenados </Link></div>
  )
}

export default Header