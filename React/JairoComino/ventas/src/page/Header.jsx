import { Link } from "react-router-dom"


const Header = () => {
  return (
    <div><Link to={"/ventasproductos"}>Ventas por producto</Link> <Link to={"/ventascategorias"}>Ventas por categoria</Link> <Link to={"/masvendido"}>Mas vendido</Link> <Link to={"/categoriamasvendida"}>Categoria mas vendida</Link></div>
  )
}

export default Header