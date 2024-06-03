import Searcher from "../components/Searcher";
import ProductCounter from "../helpers/productCounteer";
import useProduct from "../hooks/useProduct";
import { useTheme } from "../hooks/useTheme";


const SearchPage = () => {
 
  const { products } = useProduct();
 const { theme } = useTheme();

  return (
   <div style={{ backgroundColor: theme.backgroundColor, textColor: theme.color, fontFamily: theme.fontFamily }}>
    <Searcher />
    <ProductCounter count={products.length} />
    </div>
      );
}

export default SearchPage
