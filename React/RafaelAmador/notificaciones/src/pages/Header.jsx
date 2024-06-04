import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div><Link to={"/agregar"}>Agregar notificacion</Link> <Link to={"/lista"}>Lista notificaciones</Link> <Link to={"/noleidas"}>Lista notificaciones no leidas</Link> <Link to={"/ordenadas"}>Lista ordenada por fecha</Link>   </div>
  )
}

export default Header