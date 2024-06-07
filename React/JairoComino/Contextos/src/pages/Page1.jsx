import React, { useContext, useEffect, useState } from 'react';

import { ConfigContext } from '../contexts/ConfigContext';
import FormInsert from '../components/FormInsert';
import { ProducContext } from '../contexts/ProducContext';
import { Link } from 'react-router-dom';
import Contador from '../components/Contador';


const Page1 = () => {
console.log("estoy engage 1");
const {tema, cambiarTema} = useContext(ConfigContext)
const  { setProduc,produc ,numeroProductos,generadorID}= useContext(ProducContext)
console.log(produc);
//   //cambia el tema claro a oscuro usando el contexto global
const handleCambiarTema=(e)=>{
    e.preventDefault();
    cambiarTema()

}
  return (
    <>
      <div className={`${tema.fondo} ${tema.fuente} ${tema.textocolor}`}  >
      
        <header className="flex items-center justify-between bg-gray-200 p-4">
          
        <Link to={'/delete'}>
        <button
            type="button"
            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Borrar🗑
          </button>
        </Link>
      
          <Link to={'/edit'}><button
          
          type="button"
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Editar♻
        </button>
        </Link>
          
          <button
            type="button"
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={ handleCambiarTema}
          >
            ⚙
          </button>


        </header>
          <FormInsert/>
          <Contador/>

        <footer className={`${tema.fondo} ${tema.fuente} ${tema.textocolor}`}>
           Estilos usados con talwin en esta pagina: {`Fondo:${tema.fondo} ,Fuente:${tema.fuente} , Color:${tema.textocolor}`}
        </footer>
      </div>
    </>
  );
}

export default Page1;

