import React, { useContext, useState } from 'react'
import { ConfigContext } from '../contexts/ConfigContext'
import { ProducContext } from '../contexts/ProducContext'
import Swal from "sweetalert2";
const FormInsert = () => {
  const [nombre, setNombre] = useState("")
  const [stock, setStock] = useState("")
  const [precio, setPrecio] = useState("")

  const {tema} = useContext(ConfigContext)
  const  { setProduc,produc ,numeroProductos,generadorID}= useContext(ProducContext)


  const handleSubmit=(e)=>{
      e.preventDefault()
      if (nombre==""&& stock==""&& precio=="") {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Campos vacios!",
          
        });
      }else{
        ///creacion del nuevo producto
        let newproduct={
          id:generadorID(),
          Nombre:nombre,
          Stock:stock,
          Precio:precio
        }

        let newproducros=produc;
        newproducros.push(newproduct);
        //alerta 
        Swal.fire({
            title: "AÑADIDO",
            text: `Producto: ${nombre}`,
            icon: "info"
        });
        //seteacion a estado inicial
        console.log(produc);
        setProduc(newproducros)
        setNombre("")
        setPrecio("")
        setStock("")


    
      }}

return (
<>
    <div className={`${tema.fondo} ${tema.fuente} ${tema.textocolor} max-w-md mx-auto  shadow-lg  rounded px-8 pt-9 pb-8 mb-4`} >
        <form>
          <div className={`mb-4 ${tema.colorTexto}`}>
            <label
              htmlFor="nombre"
              className="block  text-sm font-bold mb-2"
            >
              Nombre:
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className={`mb-4 ${tema.colorTexto}`}>
            <label
              htmlFor="stock"
              className="block  text-sm font-bold mb-2"
            >
              Stock:
            </label>
            <input
              type="text"
              id="stock"
              name="stock"
              value={stock}
              onChange={(e) => setStock(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className={`mb-4 ${tema.colorTexto}`}>
            <label
              htmlFor="precio"
              className="block  text-sm font-bold mb-2"
            >
              Precio:
            </label>
            <input
              type="text"
              id="precio"
              name="precio"
              value={precio}
              onChange={(e) => setPrecio(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>

          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Enviar
          </button>
        </form>
      </div>
</>
)
}

export default FormInsert