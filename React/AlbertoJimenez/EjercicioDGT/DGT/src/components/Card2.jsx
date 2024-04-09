
const Card2 = ({vehiculo}) => {
    const {nBastidor, marca, modelo, tipo, color, fecha, matricula} = vehiculo ;
    const tipoVehiculo = vehiculo.tipo.toLowerCase();
     console.log("VECHIULO ->", vehiculo);


  return (
          
<div className={`inline-block rounded overflow-hidden shadow-md transform float-right ${tipoVehiculo === 'motocicleta' ? 'bg-gray-400' : tipoVehiculo === 'coche' ? 'bg-blue-400' : tipoVehiculo === 'camion' ? 'bg-amber-700' : ''}`}>
  <h2 className="text-white text-lg font-semibold px-4 py-2">{tipoVehiculo}</h2>
  <div className="flex flex-col gap-4">
    <div className="flex flex-row justify-between">
      <div className="flex flex-col">
        <span className="text-xl text-gray-50 font-bold mx-1">{nBastidor}</span>
        <p className="text-xs text-black ">{marca}</p>
        <p className="text-xs text-black ">{modelo}</p>
        <p className="text-xs text-black ">{tipo}</p>
        <p className="text-xs text-black ">{color}</p>
        <p className="text-xs text-black ">{fecha}</p>
        <p className="text-xs text-black ">{matricula}</p>
      </div>
    </div>
  </div>
</div>


  )
}

export default Card2