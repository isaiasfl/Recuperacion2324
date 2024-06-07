
import React, {  createContext, useState } from 'react';
//creamos el contexto
 export const ProducContext=createContext();

///creamos el provaider
export  const ProducProvider=({children})=>{
   
    const [produc, setProduc] = useState([]) 

    function generadorID(){
 
        const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let id = '';
      
        for (let i = 0; i < 16; i++) {
          const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
          id += caracteres.charAt(indiceAleatorio);
        }
      
        return id;
      }
      function buscarProducto(itemsearch){
        const productsearch = produc.find(producto => producto.Nombre.toLowerCase().includes(itemsearch.toLowerCase()))
        return productsearch;
      } 
      // Ejemplo de uso:
    const numeroProductos=()=>{
      let nproduc=produc.length();
      return nproduc;
    }
    return (
        <ProducContext.Provider value={{ setProduc,produc ,numeroProductos,generadorID,buscarProducto}}>
            {children}
        </ProducContext.Provider>    
    )
}
