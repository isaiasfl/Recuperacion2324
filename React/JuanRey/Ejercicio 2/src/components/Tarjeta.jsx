
const Tarjeta = () => {

    const getCardStyle = (tipo) => {
        switch (tipo) {
        case 'Moto':
            return 'bg-gray-300';
        case 'Coche':
            return 'bg-blue-300';
        case 'Camión':
            return 'bg-green-300';
        default:
            return 'bg-blue-300';
        }
    };

    return (
        <div className="grid grid-cols-1 gap-4 overflow-y-auto max-h-screen">
            {vehiculosFiltrados.map((vehiculo, index) => {
                const cardStyle = getCardStyle(vehiculo.tipo);
                return (
                    <div key={index} className={`p-4 rounded-lg shadow-md ${cardStyle}`}>
                        <p>Número de Bastidor: {vehiculo.numeroBastidor}</p>
                        <p>Marca: {vehiculo.marca}</p>
                        <p>Modelo: {vehiculo.modelo}</p>
                        <p>Tipo: {vehiculo.tipo}</p>
                        <p>Color: {vehiculo.color}</p>
                        <p>Matrícula: {vehiculo.matricula}</p>
                        <p>Fecha de Alta: {new Date(vehiculo.fechaAlta).toLocaleDateString()}</p>
                    </div>
                );
            })}
            </div>
    )
}

export default Tarjeta