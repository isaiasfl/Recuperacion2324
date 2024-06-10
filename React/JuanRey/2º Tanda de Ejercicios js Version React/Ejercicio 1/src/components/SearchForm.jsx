const SearchForm = ({filter, setFilter, handleSearch}) => {
    return (
        <div className="flex items-center justify-center m-4">
            <input
            type="text"
            value={filter}
            placeholder="Introduce la categoría"
            onChange={(e) => setFilter(e.target.value)}
            className="shadow appearance-none border rounded py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            <button
            onClick={() => handleSearch(filter)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2 focus:outline-none focus:shadow-outline"
            >
            Buscar
            </button>
        </div>
        )
    }

export default SearchForm;