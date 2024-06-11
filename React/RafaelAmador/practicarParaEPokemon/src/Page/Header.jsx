import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div><Link to={"/equipo"} >Equipo </Link> <Link to={"/pokemones"} >Pokemones</Link> <Link to={"/desafio"} >Desafio</Link></div>
  )
}

export default Header