
const Footer = ({temaSeleccionado}) => {
    return (
        <div>
            <div className="text-center">
                <h1 className="font-bold text-xl py-6">Info Tema Colores</h1>
            </div>
            <div className="text-center mt-4">
                <h3 className="font-semibold">{`Color de Fondo: ${temaSeleccionado.colorFondo}`}</h3>
                <h3 className="font-semibold">{`Color de la Fuente: ${temaSeleccionado.colorFuente}`}</h3>
                <h3 className="font-semibold">{`Tipo de la Fuente: ${temaSeleccionado.fuente}`}</h3>
            </div>
        </div>
        )
    }

export default Footer