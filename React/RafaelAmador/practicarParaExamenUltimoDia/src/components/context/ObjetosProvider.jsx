import { createContext, useEffect, useState } from "react"

export const ObjetosContext= createContext();

const ObjetosProvider = ({children}) => {

    const [objetos, setObjetos] = useState([])
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [stock, setStock] = useState("");
    const [precio, setPrecio] = useState("");
    const [editingIndex, setEditingIndex] = useState(null);

    useEffect(() => {
        const nuevoProducto =JSON.parse(localStorage.getItem("producto")) || []
        setObjetos(nuevoProducto)
    }, [])
    
        
 


  return (
    <ObjetosContext.Provider value={{objetos, setObjetos , nombre, setNombre, categoria, setCategoria, stock, setStock, precio, setPrecio, setEditingIndex, editingIndex}}>
        {children}
    </ObjetosContext.Provider>
  )
}

export default ObjetosProvider