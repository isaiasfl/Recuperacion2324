import { useContext } from "react"
import Buscador from "../components/Buscador"
import Footer from "../components/Footer"
import Header from "../components/Header"
import ConfigContext from "../context/ConfigContext"
import UseContext from "../context/UseContext"

const EditarPage = () => {
  const { configuracion, actualizarValor } = useContext(ConfigContext)
    const { objetos } = useContext(UseContext)

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
      <div className="border border-black m-2">
        <Header actualizarValor={actualizarValor}/>
      </div>
      <div className="border border-black m-2">
        <Buscador objetos={objetos}/>
      </div>
      <div className="border border-black m-2 p-2">
        <Footer temaSeleccionado={temaSeleccionado}/>
      </div>
    </div>
  )
}

export default EditarPage
