
const Filtro = (props) => {
  const { filter, setFilter } = props
  return (
    <div className="m-2">
        <div className="mx-2">
            <select 
            name="tipo" 
            id="tipo" 
            className="shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-blue-500"
            required
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            >
                <option value="todos">Todos</option>
                <option value="coche">Coche</option>
                <option value="moto">Moto</option>
                <option value="camion">Camion</option>
            </select>
        </div>
    </div>
  )
}

export default Filtro
