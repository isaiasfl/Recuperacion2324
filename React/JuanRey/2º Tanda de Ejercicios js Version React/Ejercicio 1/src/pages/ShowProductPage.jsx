import { useContext } from "react"
import ProductList from "../components/ProductList"
import ProductoContext from "../context/ProductContext"
import Header from "../components/Header"

const ShowProductPage = () => {
    const { productos } = useContext(ProductoContext)
    return (
        <div className="m-2">
            <div className="m-2">
                <Header />
            </div>
            <div className="m-2">
                <ProductList productos={productos}/>
            </div>
        </div>
    )
}

export default ShowProductPage