import React from 'react'
import { Link} from 'react-router-dom';

const InicioPage = (props) => {

  const handleSalir=()=>{
    if (localStorage.getItem('Token')) {
       localStorage.removeItem('Token');
       props.setToken(false);
    }
   
  }
  return (
    <>
     <div>
      INICIO
     </div>
    <Link to={'/about'}><button>About</button></Link>
    <Link to={'/login'}><button onClick={handleSalir}>Salir</button></Link>
     
    </>
    
  )
}

export default InicioPage