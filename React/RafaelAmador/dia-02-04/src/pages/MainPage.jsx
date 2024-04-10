import { useEffect, useState } from "react";
import Form from "../components/Form"
import Header from "../components/Header"
import ListaVehiculos from "../components/ListaVehiculos"
import {  getVehiculos } from "../helper/getVehiculos";

const MainPage = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [tipo, setTipo] = useState("Todos")

 
    useEffect(() => {
      getVehiculos((data) => {
        setVehiculos(data);
      }, tipo)
      
    }, [vehiculos, tipo]);
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", maxWidth: "1200px", margin: "0 auto" }}>
      <Header />
      
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div style={{ width: "45%", marginRight: "20px" }}>
          <Form />
        </div>
        <div style={{ width: "45%", marginLeft: "20px", borderLeft: "1px solid #ccc", paddingLeft: "20px" }}>
        <form>
          <select
            name="tipo"
            id="tipo"
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            style={{ width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '5px', border: '1px solid #ccc' }}
          >
            <option value="Todos">Todos</option>
            <option value="Coche">Coche</option>
            <option value="Moto">Moto</option>
            <option value="Camion">Camión</option>
          </select>
        </form>
          {vehiculos.map(vehiculo=> <ListaVehiculos vehiculo={vehiculo} key={vehiculo.id} />)}
        </div>
      </div>
    </div>
  )
}

export default MainPage