import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ConfigContext } from "../contexts/ConfigContext";
import { ProducContext } from "../contexts/ProducContext";

const Page2 = () => {
  const { tema, cambiarTema } = useContext(ConfigContext);
  const { setProduc, produc, numeroProductos, generadorID ,buscarProducto} =useContext(ProducContext);
  const [buscador, setBuscador] = useState("");
const [producto, setproducto] = useState({})
const [searchResult, setSearchResult] = useState(null);

  const handleCambiarTema = (e) => {
    e.preventDefault();
    cambiarTema();
  };
  const handleBuscar = (e) => {
    e.preventDefault()
    const result = products.find(product => product.nombre.toLowerCase() === buscador.toLowerCase());
    setSearchResult(result);


  };

  const handleSaveChanges = async () => {
    if (!searchResult) return;
    try {
      await actualizarProducto(searchResult.id, {
        nombre: searchResult.nombre,
        stock: searchResult.stock,
        precio: searchResult.precio
      });

      const updatedProducts = products.map(product => {
        if (product.id === searchResult.id) {
          Swal.fire({
            icon: 'success',
            title: 'Cambios efectuados!',
            text: 'Los cambios se han efectuado correctamente.',
          });
          return searchResult;
        } else {
          return product;
        }
      });
      setProducts(updatedProducts);
      setSearchResult(null);
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un problema al actualizar el producto. Por favor, inténtalo de nuevo más tarde.',
      });
    }
  };

  return (
    <>
      <div className={`${tema.fondo} ${tema.fuente} ${tema.textocolor}`}>
        <header className="flex items-center justify-between bg-gray-200 p-4">
          <Link to={"/delete"}>
            <button
              type="button"
              className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Borrar🗑
            </button>
          </Link>

          <Link to={"/"}>
            <button
              type="button"
              className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Home🏠
            </button>
          </Link>

          <button
            type="button"
            className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-600"
            onClick={handleCambiarTema}
          >
            ⚙
          </button>
        </header>
        {/* Formularo del buscador */}
        <form className={`mb-4 ${tema.colorTexto} mt-5`}>
         
            <div className="flex">
              <input
                type="text"
                id="buscador"
                name="buscador"
                value={buscador}
                onChange={(e) => setBuscador(e.target.value)}
                className="shadow appearance-none border rounded-l w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
              />
              <button
                type="submit"
                onClick={handleBuscar}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none focus:shadow-outline"
              >
                Buscar🔎
              </button>
          </div>
        </form>
        {searchResult && (
        <form>
          <input type="text" value={searchResult.nombre} readOnly />
          <input type="number" value={searchResult.stock} onChange={(e) => setSearchResult({ ...searchResult, stock: parseInt(e.target.value) })} />
          <input type="number" value={searchResult.precio} onChange={(e) => setSearchResult({ ...searchResult, precio: parseFloat(e.target.value) })} />
          <button type="button" onClick={handleSaveChanges} style={{ backgroundColor: '#198754', color: '#fff', padding: '10px', border: 'none', cursor: 'pointer' }}>Guardar Cambios</button>
        </form>
      )}

      </div>

    </>
  );
};

export default Page2;
