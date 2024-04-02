
const Card = () => {

    function tipoVehicle ({tipo}) {
        switch (tipo) {
            case 'coche':
                return "className=' bg-blue-500'";
            case 'moto':
                return "className=' bg-gray-500'";
            case 'camion':
                return "className=' bg-brown-500'";
        }
    }

    return (
        <div onChange={tipoVehicle}>
            <p>Numero d Bastidor: </p>
            <p>Marca: </p>
            <p>Modelo: </p>
            <p>Fecha de alta: </p>
            <p>Color: </p>
            <p>Matricula: </p>
        </div>
    )
}

export default Card