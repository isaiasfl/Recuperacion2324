import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Card2 from "../components/Card2";

const HomePage = () => {
  const [vehiculos, setVehiculos] = useState([]);
  const [vehiculosFiltrados, setVehiculosFiltrados] = useState([]);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await fetch("http://localhost:4000/altas");
        if (!response.ok) {
          throw new Error("Error fetching");
        }

        const data = await response.json();
        setVehiculos(data);
      } catch (error) {
        console.error("Error fetching data vehicles ", error);
      }
    };
    fetchdata();
  }, [vehiculos]);

  const filtrarVehiculos = (tipoVehiculo) => {
    if (tipoVehiculo === "Todos") {
      setVehiculosFiltrados(vehiculos);
    } else {
      const vehiculosFiltrados = vehiculos.filter(
        (vehiculo) => vehiculo.tipo === tipoVehiculo
      );
      setVehiculosFiltrados(vehiculosFiltrados);
    }
  };

  return (
    <>
      <Header></Header>
      <Filter onFiltrado={filtrarVehiculos}></Filter>
      {vehiculosFiltrados.length > 0 ? (
        vehiculosFiltrados.map((vehiculo) => (
          <Card2 key={vehiculo.id} vehiculo={vehiculo} />
        ))
      ) : (
        vehiculos.map((vehiculo) => (
          <Card2 key={vehiculo.id} vehiculo={vehiculo} />
        ))
      )}
      <Formulario></Formulario>
    </>
  );
};

export default HomePage;
