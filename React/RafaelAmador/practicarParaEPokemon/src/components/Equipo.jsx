import { useContext } from "react"
import { PokemonContext } from "./context/PokemonProvider"
import Swal from "sweetalert2"


const Equipo = () => {
  const { equipo, setEquipo,} = useContext(PokemonContext)
  const handleDelete = async (index) =>{
    
    const result = await Swal.fire({
      icon: 'question',
      title: '¿Seguro que quiere borrar el producto?',
      showCancelButton: true,
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar',
    }) 
    if (result.isConfirmed) {
      Swal.fire({
          icon: 'success',
          title: 'Pokemon eliminado',
          text: 'El pokemon ha sido eliminaado.',
      });
      const nuevoEquipo = equipo.filter((_, i) => i !== index);
      setEquipo(nuevoEquipo);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Cancelado',
        text: 'El pokemon no ha sido eliminado',
    });
    }
  }
  
  
  return (
    <div>
      {equipo.length<0 ? "equipo vacio":
      equipo.map((poke, index)=>(
        <div key={poke.id}>
          <p>{poke.nombre}</p>
          <p>{poke.fuerza}</p>
          <img src={poke.imagen} />
          <button onClick={()=>handleDelete(index)}>Quitar del equipo</button>
        </div>
      ))
      }
     
    </div>
  )
}

export default Equipo