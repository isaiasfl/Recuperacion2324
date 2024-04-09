
import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import Formulario from "../components/Formulario";
import Header from "../components/Header";
import Card2 from "../components/Card2";



const HomePage = () => {
    const [vehiculos, setVehiculos] = useState([]);

    useEffect(() =>{
  
        const fetchdata = async () => {
            try {
                const response = await fetch('http://localhost:4000/altas');
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
        <Header></Header>
        <Filter></Filter>
        {vehiculos.map((vehiculo) => <Card2 key={vehiculo.id} vehiculo={vehiculo} /> )}
       
        <Formulario></Formulario>
        
        </>
    )
};

export default HomePage;