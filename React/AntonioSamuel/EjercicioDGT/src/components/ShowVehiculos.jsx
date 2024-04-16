import { useEffect, useState } from "react"
import Card from "./Card"
import Filtro from "./Filtro"

const ShowVehiculos = () => {
  const [vehiculos, setVehiculos] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    const getVehiculosData = async (filtro) => {
      try {

        let url = 'http://localhost:4000/altas'

        if (filtro && filtro !== 'todos') {
          url += `?tipo=${filtro}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Error");
        }

        const data = await response.json();
        setVehiculos(data)

      } catch (error) {
        console.error(error);
      }
    }
    getVehiculosData(filter);
  }, [vehiculos, filter])
  
  return (
    <div className="">
      <Filtro filter={filter} setFilter={setFilter}/>
      <div className='flex flex-col items-center'>

        {
          vehiculos && vehiculos.map((vehiculo) => <Card key={vehiculo.bastidor} vehiculo={vehiculo}/>)
        }

      </div>
    </div>
  )
}

export default ShowVehiculos
