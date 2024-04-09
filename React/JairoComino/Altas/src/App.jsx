
import reactLogo from './assets/react.svg';
import './App.css';
import FormAltas from './components/FormAltas';
import Tarjet from './components/Tarjet';
import { useEffect, useState } from 'react';
import getdata from './helpers/getdata';
    

function App() {
  const [vehiculos, setVehiculo] = useState([]);
  useEffect(() => {
    
    const fechData = async () => {
      try {
        setVehiculo( await getdata("http://localhost:4000/altas"))
        // console.log("Vehiculo en useeffect -->", vehiculos);
      } catch (error) {
        console.error("Error fetching  ", error);
      }
    };

    // ejecuto la función
    fechData();
  }, []);

  
  return (
    <>
<div className="bg-gray-800 p-4 w-full">
  <div className="max-w-7xl mx-auto flex justify-between items-center">
    <h1 className="text-white text-2xl font-bold">DGT</h1>
    <a href="https://react.dev" target="_blank" className="inline-block">
      <img src={reactLogo} className="logo react h-8" alt="React logo" />
    </a>
  </div>
</div>  
      <div>
        <div>
      <FormAltas/>
      </div>
      <div className=' mx-auto flex justify-between items-center'>
       {vehiculos.map(vehiculo=><Tarjet vehiculo={vehiculo} key={vehiculo.id} />
          // console.log(vehiculo);
        )}
        </div>
      </div>
    </>
  )
}

export default App
