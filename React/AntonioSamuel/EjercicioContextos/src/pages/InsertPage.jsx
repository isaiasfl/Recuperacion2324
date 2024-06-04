import { useContext } from "react"
import ContadorProductos from "../components/ContadorProductos"
import Header from "../components/Header"
import InsertForm from "../components/InsertForm"
import ConfigContext from "../context/ConfigContext"
import UseContext from "../context/UseContext"
import Footer from "../components/Footer"

const InsertPage = () => {
    const { configuracion, actualizarValor } = useContext(ConfigContext)
    const { objetos, añadirObjeto } = useContext(UseContext)

    const obtenerTema = () => {
        if (configuracion.value === 0) {
            return configuracion.theme[0]

        } else if (configuracion.value === 1) {
            return configuracion.theme[1]
        }
    }

    const temaSeleccionado = obtenerTema();
    

  return (
    <div className={`border border-black m-2 p-2 ${temaSeleccionado.colorFondo} ${temaSeleccionado.colorFuente} ${temaSeleccionado.fuente}`}>
        <div className="m-2">
            <Header actualizarValor={actualizarValor}/>
        </div>
        <div className="m-2">
            <InsertForm añadirObjeto={añadirObjeto}/>
        </div>
        <div className="border border-black m-2 p-2">
            <ContadorProductos objetos={objetos}/>
        </div>
        <div className="border border-black m-2 p-2">
            <Footer temaSeleccionado={temaSeleccionado}/>
        </div>
    </div>
  )
}

export default InsertPage
