import React, { useContext, useState } from 'react'
import { ConfigContext } from '../contexts/ConfigContext'
import { ProducContext } from '../contexts/ProducContext'
import { useEffect } from 'react'

const Contador = () => {

    const {tema} = useContext (ConfigContext)
    const  { produc }= useContext(ProducContext)
    const [nP, setnP] = useState("");
    useEffect(() => {
      setnP(produc.length)
    }, [produc])
    
  return (
    <>
    <div className={`${tema.fondo} ${tema.fuente} ${tema.colorTexto}`}  >
        <p>Productos disponibles: {nP}</p> 
    </div> 
    </>
  )
}

export default Contador