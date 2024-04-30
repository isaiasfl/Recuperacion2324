import { Navigate } from "react-router-dom"
import { token } from "../helper/token"



const Login = (props) => {
    
    const handleEntrar = (e) =>{
        e.preventDefault()
        token();
        props.setRedirect(true)
    }
   
    
   
  return (
    <div>
        {props.redirect==true && <Navigate to={'/inicio'} />}
        <h1>Login</h1>
        <button onClick={handleEntrar}>Entrar</button>
    </div>
  )
}

export default Login