import { useState } from "react";

const Filter = ({ onFiltrado }) => {
  const [filtrado, setFiltrado] = useState("Todos");

  const handleFiltroChange = (e) => {
    const selectedOption = e.target.value;
    setFiltrado(selectedOption);
    onFiltrado(selectedOption);
  };

  return (
    <div>
      <form className=" flex items-start justify-end ">
        <label htmlFor="tipo_vehiculo">Tipo de vehículo:</label>
        <br />
        <select
          id="tipo_vehiculo"
          value={filtrado}
          onChange={handleFiltroChange}
          required
        >
          <option value="motocicleta">Motocicleta</option>
          <option value="coche">Coche</option>
          <option value="camión">Camión</option>
          <option value="Todos">Todos</option>
        </select>
        <br />
        <br />
      </form>
    </div>
  );
};

export default Filter;