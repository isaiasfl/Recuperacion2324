import { useContext } from "react"
import { PokemonContext } from "./context/PokemonProvider"
import { addHall } from "../firebase/pokemon"
import Swal from "sweetalert2"

const Desafio = () => {
    const {equipo, setEquipo, equipoCampeon} = useContext(PokemonContext)

    const handleEnfrentar = async () =>{
          let poderEquipo = 0;
          let poderEquipoCampeon= 0;
          equipo.forEach((poke) => {  
            poderEquipo+=poke.fuerza
          })
          equipoCampeon.forEach((poke)=>{
            poderEquipoCampeon+=poke.fuerza
          })
          if(poderEquipo>poderEquipoCampeon){
            Swal.fire({
              icon: "succes",
              title: "CAMPEON",
              text: "Tu equipo es el campeon de la liga pokemon"
            })
            try {
              await addHall(equipo);
            } catch (error) {
              console.error("Error al agregar al hall: ", error.message);
            }
          }else{
            if(poderEquipo<poderEquipoCampeon){
              Swal.fire({
                icon: "error",
                title: "PERDEDOR",
                text: "Fuiste fuertemente humillado por el campeon"
              })
            }else{
              Swal.fire({
                icon: "question",
                title: "Empate",
                text: "Empataste contra el campeon de la liga pokemon"
              })
            } 
        }
        setEquipo([])
      }

  return (
    <div>
        <div>
            <h2>Mi equipo</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            {equipo && equipo.map((poke) => (
    <div key={poke.id} style={{ textAlign: 'center' }}>
        <p>{poke.nombre}</p>
        <p><img src={poke.imagen} alt={poke.nombre} /></p>
    </div>
))}
            </div>
        </div>
        <hr />
        <div>
            <h2>Equipo campeón</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                {equipoCampeon && equipoCampeon.map((poke, index) => (
                    <div key={index} style={{ textAlign: 'center' }}>
                        <p>{poke.nombre}</p>
                        <p><img src={poke.imagen} alt={poke.nombre} /></p>
                    </div>
                ))}
            </div>
        </div>
        <button onClick={handleEnfrentar} disabled={equipo.length === 0}>Enfrentar al alto mando</button>
    </div>
  )
}

export default Desafio