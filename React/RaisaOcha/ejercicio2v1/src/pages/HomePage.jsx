import { useEffect, useState } from "react";
import AddVehicleForm from "../components/AddVehicleForm";
import NavBar from "../components/NavBar";
import VehicleCard from "../components/VehicleCard";

const HomePage = () => {
   const [vehicles, setVehiculos] = useState([]);

    useEffect(() =>{
  
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:4000');
                if (!response.ok){
                    throw new Error("Error fetching");
                }
  
                const data = await response.json();

                console.log("Data -> ",data);

                setVehiculos(data);
  
               
    
            } catch (error) {
                console.error("Error fetching data vehicles ", error);
              }
  
        }
  
        fetchdata();
    }, []);


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
          <div className="grid grid-cols-2 gap-4">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
