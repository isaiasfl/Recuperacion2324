import { useEffect } from "react";
import { useState } from "react"

const AddProduct = () => {
    const [producto, setproducto] = useState();
    
    

    return (
        <div>
            <div>
                <p>Nombre</p>
                <input type="text" />
            </div>
            <div>
                <p>Stock</p>
                <input type="text" />
            </div>
            <div>
                <p>Precio</p>
                <input type="text" />
            </div>
        </div>
    )
}

export default AddProduct