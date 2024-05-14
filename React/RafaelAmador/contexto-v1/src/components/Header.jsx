import { Link } from "react-router-dom"
import { useConfig } from "./context/ConfigContext";


const Header = () => {
  const { toggleTheme } = useConfig();
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px', marginTop: '20px' }}>
      <Link to={'/papelera'} style={{ textDecoration: 'none' }}>
        <button style={{ backgroundColor: '#dc3545', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>🗑️</button>
      </Link>
      <Link to="/editar" style={{ textDecoration: 'none' }}>
        <button style={{ backgroundColor: '#0d6efd', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Editar</button>
      </Link>
      <Link to="/productos" style={{ textDecoration: 'none' }}>
        <button style={{ backgroundColor: '#ffc107', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Productos</button>
      </Link>
      <button onClick={toggleTheme} style={{ backgroundColor: '#6c757d', color: '#fff', padding: '10px 20px', fontSize: '16px', border: 'none', cursor: 'pointer', marginTop: '20px' }}>Cambiar Tema</button>
    </div>
  )
}

export default Header