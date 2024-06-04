import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../firebase/productosApi";
import EditForm from "../components/EditForm";

const EditarPage = () => {
  const {idproduct} = useParams();
  const [producto, setProducto] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // console.log("Fetching product with ID:", idproduct);
        const productData = await getProductById(idproduct);
        if (productData) {
          // console.log("Product data fetched:", productData);
          setProducto(productData);
        } else {
          console.log("No product data found");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };
    
    fetchProduct();
  }, []);

  return (
    <div className="m-2">

      <div className="m-2">
        {producto ? <EditForm producto={producto} /> : <div>Loading...</div>}
      </div>
        
    </div>
  )
}

export default EditarPage