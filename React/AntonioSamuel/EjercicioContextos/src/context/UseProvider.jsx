import { useState } from "react"
import UseContext from "./UseContext"

const UseProvider = ({children}) => {
    const [objetos, setObjetos] = useState({
        listaObjetos:[
            {
                id: 1,
                nombre: "Objeto",
                stock: 1,
                precio: 10
            },
        ]
    })

    const añadirObjeto = (nuevoObjeto) => {
        setObjetos(prevState => ({
            ...prevState,
            listaObjetos: [...prevState.listaObjetos, nuevoObjeto]
        }));
    };

    const eliminarObjeto = (id) => {
        // Eliminar el objeto del estado
        const nuevosObjetos = objetos.listaObjetos.filter((objeto) => objeto.id !== id);
        setObjetos(prevState => ({
            ...prevState,
            listaObjetos: nuevosObjetos
        }));
    };

  return (
    <div className="">
        <UseContext.Provider value={{objetos, añadirObjeto, eliminarObjeto}}>
            {children}
        </UseContext.Provider>
    </div>
  )
}

export default UseProvider