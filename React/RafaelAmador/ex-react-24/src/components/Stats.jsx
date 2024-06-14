import { useEffect, useState } from "react"
import { getEstadisticas } from "../helper/getEstadisticas"

const Stats = () => {

  const [stats, setStats] = useState([])


  useEffect(() => {
    const fetchEstadisticas = async () =>{
      const estadisticas = await getEstadisticas();
      setStats(estadisticas)
    }
    fetchEstadisticas()
  }, [])
  
  return (
    <>
    {stats.length == 0 ? "" : 
     <div>
      {stats.map((stat, index) => (
        <div key={index}>
          <h3>Pregunta: {stat.pregunta}</h3>
          <p>Respuesta más elegida: {stat.respuesta}</p>
        </div>
      ))}
     </div>   
    
    }
    </>
   
  )
}

export default Stats