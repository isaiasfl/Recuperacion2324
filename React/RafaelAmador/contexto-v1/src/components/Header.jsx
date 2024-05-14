import { Link } from "react-router-dom"
import { useConfig } from "./context/ConfigContext";


const Header = () => {
  const { toggleTheme } = useConfig();
  return (
    <div>
      <Link to={'/papelera'}><button style={{ backgroundColor: '#dc3545' }}>🗑️</button></Link>
      <Link to="/editar"><button style={{ backgroundColor: '#0d6efd' }}>Editar</button></Link>
      <Link to="/productos"><button style={{ backgroundColor: '#ffc107' }}>Productos</button></Link>
      <button onClick={toggleTheme}  style={{ backgroundColor: '#6c757d' }}>Cambiar Tema</button>
      </div>
  )
}

export default Header