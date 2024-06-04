import { useContext } from "react"
import ShowProducts from "../components/ShowProducts"
import ProductoContext from "../context/ProductoContext"
import Header from "../components/Header"

const ShowProductsPage = () => {
  const { productos } = useContext(ProductoContext)
  return (
    <div className="m-2">
      <div className="m-2">
        <Header />
      </div>
      <div className="m-2">
        <ShowProducts productos={productos}/>
      </div>
        
    </div>
  )
}

export default ShowProductsPage