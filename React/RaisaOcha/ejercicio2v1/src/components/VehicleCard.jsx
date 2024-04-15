
const VehicleCard = ({ vehicle }) => {
  let backgroundColor;
  switch (vehicle.type) {
    case 'motocicleta':
      backgroundColor = 'bg-red-200';
      break;
    case 'coche':
      backgroundColor = 'bg-blue-200';
      break;
    case 'camión':
      backgroundColor = 'bg-yellow-200';
      break;
    default:
      backgroundColor = 'bg-white'; 
  }

  return (
    <div className={`rounded shadow p-4 ${backgroundColor}`}>
      <p><strong>Número de bastidor:</strong> {vehicle.numBastidor}</p>
      <p><strong>Marca:</strong> {vehicle.brand}</p>
      <p><strong>Modelo:</strong> {vehicle.model}</p>
      <p><strong>Tipo:</strong> {vehicle.type}</p>
      <p><strong>Color:</strong> {vehicle.color}</p>
      <p><strong>Fecha de registro:</strong> {vehicle.registrationDate}</p>
      <p><strong>Matrícula:</strong> {vehicle.plate}</p>
    </div>
  );
};

export default VehicleCard;
