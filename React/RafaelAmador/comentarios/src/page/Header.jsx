import { Link } from "react-router-dom"

const Header = () => {
  return ( 
    <div><Link to={"/agregar"}>Agregar comentarios</Link> <Link to={"/responder"}>Responder comentarios </Link> <Link to={"/respuestas"}>Respuestas </Link> <Link to={"/ordenar"}>Comentarios ordenados </Link></div>
  )
}

export default Header