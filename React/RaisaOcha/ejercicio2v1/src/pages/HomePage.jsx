import { useState, useEffect } from "react";
import AddVehicleForm from "../components/AddVehicleForm";
import NavBar from "../components/NavBar";
import VehicleCard from "../components/VehicleCard";
import Filter from "../components/Filter";

const HomePage = () => {
  const [vehicles, setVehicles] = useState([]);
  const [filteredVehicles, setFilteredVehicles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:4000/altas");
        if (!response.ok) {
          throw new Error("Error fetching");
        }

        const data = await response.json();
        setVehicles(data);
      } catch (error) {
        console.error("Error fetching data vehicles ", error);
      }
    };
    fetchData();
  }, []);

  const filtrarVehiculos = (vehicleType) => {
    if (vehicleType === "Todos") {
      setFilteredVehicles(vehicles);
    } else {
      const vehiculosFiltrados = vehicles.filter(
        (vehicle) => vehicle.type === vehicleType
      );
      setFilteredVehicles(vehiculosFiltrados);
    }
  };

  return (
    <>
      <NavBar />
      <div className="flex flex-col md:flex-row">
        {/* Columna del formulario */}
        <div className="md:w-1/2 p-4">
          <AddVehicleForm />
        </div>
        {/* Columna de la tarjeta */}
        <div className="md:w-1/2 p-4">
          <Filter onFiltrado={filtrarVehiculos} />
          {filteredVehicles.length > 0 ? (
            <div className="grid grid-cols-2 gap-4">
              {filteredVehicles.map((vehicle, index) => (
                <VehicleCard key={index} vehicle={vehicle} />
              ))}
            </div>
          ) : (
        <div className="grid grid-cols-2 gap-4">
            {vehicles.map((vehicle, index) => (
              <VehicleCard key={index} vehicle={vehicle} />
            ))}
          </div>
      )}
      </div>
      </div>
    </>
  );
};

export default HomePage;

