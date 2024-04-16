
const Card = (props) => {
    const { vehiculo } = props;

    const getTipoColor = (tipo) => {
        switch (tipo) {
          case "coche":
            return "bg-blue-300";
          case "moto":
            return "bg-gray-200";
          case "camion":
            return "bg-amber-600";
          default:
            return "bg-white";
        }
      };
    
  return (
    <div className={`w-1/2 rounded overflow-hidden shadow-lg m-4 ${getTipoColor(vehiculo.tipo)}`}>
      <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">Detalles del Vehículo</div>
          <p className="text-gray-800 text-base">
            <span className="font-semibold">Nº Bastidor:</span> {vehiculo.bastidor}
          </p>
          <p className="text-gray-800 text-base">
            <span className="font-semibold">Matrícula:</span> {vehiculo.matricula}
          </p>
          <p className="text-gray-800 text-base">
            <span className="font-semibold">Marca:</span> {vehiculo.marca}
          </p>
          <p className="text-gray-800 text-base">
            <span className="font-semibold">Modelo:</span> {vehiculo.modelo}
          </p>
          <p className="text-gray-800 text-base">
            <span className="font-semibold">Tipo:</span> {vehiculo.tipo}
          </p>
          <p className="text-gray-800 text-base">
            <span className="font-semibold">Color:</span> {vehiculo.color}
          </p>
          <p className="text-gray-800 text-base">
            <span className="font-semibold">Fecha Alta:</span> {vehiculo.fechaAlta}
          </p>
      </div>
    </div>

  )
}

export default Card
