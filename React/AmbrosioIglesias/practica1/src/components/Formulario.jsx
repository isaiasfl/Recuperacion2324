import React from 'react'

const Formulario = () => {
  return (
    <>
    <div className='items-center flex flex-col'>
      <input className ="border border-black m-1" type="text" placeholder='Numero de vastidor'/>
      <input className ="border border-black m-1" type="text" placeholder='Marca' />
      <input className ="border border-black m-1" type="text" placeholder='Modelo'/>
      <input className ="border border-black m-1" type="text" placeholder='Color'/>
      <input className ="border border-black m-1" type="text" placeholder='Tipo '/>
      <button className='bg-blue-500 rounded'>Dar de Alta</button>
    </div>
        
    </>
  )
}

export default Formulario