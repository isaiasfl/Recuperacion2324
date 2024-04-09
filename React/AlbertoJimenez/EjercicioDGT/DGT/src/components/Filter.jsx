import { useState } from "react";

const Filter = () => {
const [filtrado, setFiltrado] = useState("Todos")
    return (

        <div>

<form className=" flex items-start justify-end ">
            
            <label htmlFor="tipo_vehiculo">Tipo de vehículo:</label><br />
                <select id="tipo_vehiculo" value={filtrado} onChange={(e) => setFiltrado(e.target.value)} required>
                    <option value="Motocicleta">Motocicleta</option>
                    <option value="Coche">Coche</option>
                    <option value="Camion">Camión</option>
                    <option value="Todos">Todos</option>
                </select><br /><br />

        
        </form>



        </div>
       
    )
}

export default Filter;