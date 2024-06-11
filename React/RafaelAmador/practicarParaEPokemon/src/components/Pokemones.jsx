import { useContext } from "react";
import { PokemonContext } from "./context/PokemonProvider";
import Swal from 'sweetalert2';
const Pokemones = () => {
    const { pokemones, equipo, setEquipo } = useContext(PokemonContext);
    const handleAdd = (pokemon) =>{
      if(equipo.length>=6){
        Swal.fire({
          icon: 'error',
          title: 'Equipo Completo',
          text: `Ya tienes 6 pokemones en tu equipo`,
        });
      }else{
      const equipoNuevo = [...equipo]
      equipoNuevo.push(pokemon)
      setEquipo(equipoNuevo)
      Swal.fire({
        icon: 'success',
        title: 'Pokemon capturado',
        text: `Has capturado al pokemon  y añadido a tu equipo`,
      });
      }
    }
    return (
        <div>
            {pokemones.map((pokemon) => (
                <div key={pokemon.id}>
                    <p>Nombre: {pokemon.nombre}</p>
                    <p>Fuerza: {pokemon.fuerza}</p>
                    <img src={pokemon.imagen} />
                    <button onClick={()=>handleAdd(pokemon)}>Añadir Pokemon al equipo</button>
                </div>
            ))}
        </div>
    );
}

export default Pokemones;