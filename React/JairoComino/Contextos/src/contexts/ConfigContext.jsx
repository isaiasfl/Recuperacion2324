
import React, {  createContext, useState } from 'react';
//creamos el contexto
 export const ConfigContext=createContext();

///creamos el provaider
export  const ConfigProvider=({children})=>{
   
    const [tema, setTema] = useState({ fondo:"bg-gray-50",
        textocolor:"text-black",
        fuente:"font-robotom"})

const cambiarTema=() => {
    setTema((prevTema)=>({
        ...prevTema,
        fondo:prevTema.fondo==="bg-gray-50"?"bg-gray-800":"bg-gray-50",
        textocolor:prevTema.textocolor==="text-black"?"text-white":"text-black",
        fuente:prevTema.fuente==="font-robotom"?"sans-serif":"font-robotom"
    }))
}

    return (
        <ConfigContext.Provider value={{ cambiarTema,tema}}>
            {children}
        </ConfigContext.Provider>    
    )
}

