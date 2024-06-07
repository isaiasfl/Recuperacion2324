import React from 'react'
import { Link} from 'react-router-dom';
function ErrorPage() {
  return (
  <>
    <div>Error 404</div>
    <Link to={'/inicio'}  ><button>volver</button></Link>
    </>
  )
}

export default ErrorPage