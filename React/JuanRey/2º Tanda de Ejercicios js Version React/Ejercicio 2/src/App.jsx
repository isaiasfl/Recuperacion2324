import AddVentasForm from './components/AddVentasForm';
import RemoveVentaForm from './components/RemoveVentaForm';
import TablaDeVentas from './components/TablaDeVentas';
import Ventas from './components/Ventas';
import { VentasProvider } from './context/VentasContext';
import { ventas, totalProductosVendidos } from './utils/Funciones';

function App() {
  const resumen = totalProductosVendidos(ventas);

  return (
    <VentasProvider>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Sistema de Ventas</h1>
      <AddVentasForm />
      <TablaDeVentas/>
      <RemoveVentaForm />
      <Ventas/>
    </div>
    </VentasProvider>
  );
}

export default App;
