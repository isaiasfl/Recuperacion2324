import { useState } from "react"


const Filtro = ({Tiposvei}) => {
    const [filtro, setFiltro] = useState("")
  return (
    <>
            <form  className='justify-between  items-center'>
          <label htmlFor="filtro" className=" block  text-gray-700 text-sm font-bold mb-2">Filtro</label>
        <select
            id="filtro"
            name="filtro"
            value={filtro}
            onChange={(e) => setFiltro(e.target.value)}
            className={`  shadow appearance-none border     rounded  py-2 px-3 px-auto leading-tight focus:outline-none focus:shadow-outline ${filtro === 'todos' ? 'text-orange-500' : filtro === 'motocicleta' ? 'text-gray-500' : filtro === 'coche' ? 'text-blue-500' :  'text-green-500' }`}
        >
            <option className="text-orange-500 " value="todos">Todos</option>
            {Tiposvei.map(tipo =>(
              <option value= {tipo}>{tipo}</option>
            ))} 
          </select>
        </form>
    </>
  )
}

export default Filtro