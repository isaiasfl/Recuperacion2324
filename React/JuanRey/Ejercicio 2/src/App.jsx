import Formulario from './components/Formulario';
import Lista from "./components/Card";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">Dirección General de Tráfico</h1>
      <div className="max-w-screen-lg w-full p-6 bg-white rounded-lg shadow-md grid grid-cols-2 gap-6">
        <div className="col-span-1">
          <Formulario />
        </div>
        <div className="col-span-1">
          <h2 className="text-xl font-semibold mb-4">Lista de Vehículos</h2>
          <Lista />
        </div>
      </div>
    </div>
  );
}

export default App;

