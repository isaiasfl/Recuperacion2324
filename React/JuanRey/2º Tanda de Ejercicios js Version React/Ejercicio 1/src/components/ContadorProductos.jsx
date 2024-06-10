import { useEffect, useState } from "react";

const ContadorProductos = ({objetos}) => {

    const [numObjetos, setNumObjetos] = useState(0)

    const contarObjetos = () => {
        return objetos.listaObjetos.length;
    }

    useEffect(() => {
        setNumObjetos(contarObjetos())
    }, [objetos])
    

    return (
        <div className="">
            <div className="text-center">
                <h1 className="font-bold text-xl py-3">Nº de Productos Totales</h1>
            </div>
            <div className="text-center">
                <h1 className="font-semibold pt-6">Productos: {numObjetos}</h1>
            </div>
        </div>
    )
}

export default ContadorProductos