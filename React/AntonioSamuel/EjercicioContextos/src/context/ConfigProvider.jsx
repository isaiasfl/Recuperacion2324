import { useState } from "react"
import ConfigContext from "./ConfigContext"

const ConfigProvider = ({children}) => {
    const [configuracion, setConfiguracion] = useState({
        value: 0, 
        theme: [
            {
                colorFondo: "bg-slate-100", 
                colorFuente: "text-black", 
                fuente: "font-sans"
            },
            {
                colorFondo: "bg-gray-700", 
                colorFuente: "text-white", 
                fuente: "font-roboto"
            }
        ]
    })

    const actualizarValor = () => {
        setConfiguracion(prevConfiguracion => ({
            ...prevConfiguracion,
            value: prevConfiguracion.value === 0 ? 1 : 0
        }));
    };

  return (
    <div>
        <ConfigContext.Provider value={{configuracion, actualizarValor}}>
            {children}
        </ConfigContext.Provider>
    </div>
  )
}

export default ConfigProvider
