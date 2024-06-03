import AddProductForm from "../components/AddProductForm"
import ProductCounter from "../helpers/productCounteer";
import useProduct from "../hooks/useProduct";
import { useTheme } from "../hooks/useTheme";


const ProductPage = () => {

  const { products } = useProduct();
const { theme } = useTheme();

  return (
   <div style={{ backgroundColor: theme.backgroundColor, textColor: theme.color, fontFamily: theme.fontFamily }}>
     <AddProductForm />
     <ProductCounter count={products.length} />
   
    </div>
  )
}

export default ProductPage