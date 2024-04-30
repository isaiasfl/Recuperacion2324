import { Link, Navigate } from "react-router-dom"

const About = (props) => {
    
  return (
    <div>
        {props.redirect==false && <Navigate to={'/login'} />}
        <h1>About</h1>
        <Link to={'/inicio'}><button>Volver</button></Link>
    </div>
  )
}

export default About