import  { createContext, useEffect, useState } from 'react'
import { getPokemones } from '../../helper/getPokemones';

export const PokemonContext = createContext();
const PokemonProvider = ({children}) => {
    const [pokemones, setPokemones] = useState([])
    const [equipoCampeon, setEquipoCampeon] = useState(() => {
      const savedEquipoCampeon = localStorage.getItem('equipoCampeon');
      return savedEquipoCampeon ? JSON.parse(savedEquipoCampeon) : [];
    });
    const [equipo, setEquipo] = useState(() => {
        const savedEquipo = localStorage.getItem('equipo');
        return savedEquipo ? JSON.parse(savedEquipo) : [];
    });
    useEffect(() => {
        const equipoCampeonNuevo = [];
        const length = pokemones.length;
  
        for (let i = 0; i < 6; i++) {
          let randomIndex = Math.floor(Math.random() * length);
          equipoCampeonNuevo.push(pokemones[randomIndex]);
        }
        setEquipoCampeon(equipoCampeonNuevo);
        localStorage.setItem('equipoCampeon', JSON.stringify(equipoCampeonNuevo));
      
    }, [pokemones]);
       

    useEffect(() => {
        const fetchPokemones = async () =>{
            const pokemons = await getPokemones();
            setPokemones(pokemons)
        }
        fetchPokemones()
    }, [])
    useEffect(() => {
        localStorage.setItem('equipo', JSON.stringify(equipo));
    }, [equipo]);

    

  return (
    <PokemonContext.Provider value={{ pokemones, setPokemones, equipo, setEquipo, equipoCampeon, setEquipoCampeon }}>
      {children}
    </PokemonContext.Provider>
  )
}

export default PokemonProvider