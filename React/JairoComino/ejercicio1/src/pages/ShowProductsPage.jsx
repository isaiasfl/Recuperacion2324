import { useContext } from "react"
import ProductoContext from "../contexts/ProductoContext"
import Header from "../components/Header"

const ShowProductsPage = () => {
  const { productos } = useContext(ProductoContext)
  return (
    <div className="m-2">
      <div className="m-2">
        <Header/> 
      </div>
      <div className="m-2">
      <ShowProduct productos={productos}/>
      </div>
        
    </div>
  )
}

export default ShowProductsPage