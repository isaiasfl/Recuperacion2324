
import reactLogo from './assets/react.svg';
import { FormRegister } from './components/FormRegister';
import NotiTarjet from './components/NotiTarjet';
import AltaPage from './pages/AltaPage';
import LandinPage from './pages/LandinPage';
import LoginPage from './pages/LoginPage';


// import FormAltas from './components/FormAltas';
// import Tarjet from './components/Tarjet';
// import { useEffect, useState } from 'react';
// import getdata from './helpers/getdata';
// import Filtro from './components/Filtro';
    

function App() {
  // const [vehiculos, setVehiculo] = useState([]);
  
  // const [filtro, setFiltro] = useState("todos");
  // // const [tiposvei, setTiposvei] = useState([]);
  
  

  // useEffect(() => {
  //    const fechData = async () => {
  //     try {
  //       let data=await getdata("http://localhost:4000/altas");
  //     //   console.log(data);
  //     //  console.log(data.tipo);
  //     // setTiposvei(data.tipo)
  //       if (filtro=="todos") {
  //         setVehiculo(data);
  //       }else
  //       if (filtro=="coche") { 
  //           let coches= data.filter(coche=>coche.tipo=="coche");
  //           setVehiculo(coches)
  //       }
  //       if (filtro=="camion") { 
  //         let camiones= data.filter(coche=>coche.tipo=="camion");
  //         setVehiculo(camiones)
  //       }
  //       if (filtro=="motocicleta") { 
  //         let motocicletas= data.filter(coche=>coche.tipo=="motocicleta");
  //         setVehiculo(motocicletas)
  //       }
  //     } catch (error) {
  //       console.error("Error fetching  ", error);
  //     }
  //   };

  //   // ejecuto la función
  //   fechData();
  // }, [vehiculos,filtro]);
     
  
  return (
//     <>
 
// <div className="bg-gray-800 p-4 w-full">
//   <div className=" h-4 flex justify-between items-center text-center">
//     <h1 className="text-white text-2xl font-bold">DGT</h1>
//     <a href="https://react.dev" target="_blank" className="inline-block">
//       <img src={reactLogo} className="logo react h-8" alt="React logo" />
//     </a>
//   </div>
// </div>  
// <div className="flex flex-row">
//       <div className='pt-11'>
//         <FormAltas/>
//       </div>
//       <div className='mx-auto my-16  justify-between items-center w-1/2'>
 
//         <form  className='justify-between  items-center'>
//           <label htmlFor="filtro" className=" block  text-gray-700 text-sm font-bold mb-2">Filtro</label>
//           <select
//             id="filtro"
//             name="filtro"
//             value={filtro}
//             onChange={(e) => setFiltro(e.target.value)}
//             className={`  shadow appearance-none border     rounded  py-2 px-3 px-auto leading-tight focus:outline-none focus:shadow-outline ${filtro === 'todos' ? 'text-orange-500' : filtro === 'motocicleta' ? 'text-gray-500' : filtro === 'coche' ? 'text-blue-500' : 'text-green-500'}`}
//           >
//             <option className="text-orange-500 " value="todos">Todos</option>
//             <option className="text-gray-800 " value="motocicleta">Motocicleta</option>
//             <option className="text-blue-800 " value="coche">Coche</option>
//             <option className="text-green-500 " value="camion">Camión</option>
//           </select>
//         </form>
//         <div className=" flex  flex-wrap  my-5  overflow-y-scroll h-2/5 ">
//           {vehiculos.map(vehiculo => (
//             <div key={vehiculo.id} className="h/">
//               {/* Cada vehículo se muestra en una columna de 6 columnas de ancho en dispositivos medianos */}
//               <Tarjet vehiculo={vehiculo} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//     </>

<>
<FormRegister/>
</>
  )
}

export default App
