import { useEffect } from "react"
import Card from "../components/Card"
import { redirect } from "react-router-dom"


const PaginaPrincipal = () => {
  useEffect(() => {
    const fetchLocalStorage =async () =>{
      const local= await JSON.parse(localStorage.getItem("access_token"))|| []
      if(local==[]){
        redirect("/login")
      }
    }
    fetchLocalStorage()

    

  }, [])
  return (
    <div>
        <Card />

    </div>
  )
}

export default PaginaPrincipal