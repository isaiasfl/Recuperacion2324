import Carrito from "./CarritoPage";
import Productos from "./ProductosPage";

const TiendaPage = () => {
    return (
        <div className="flex flex-col md:flex-row items-start p-8 bg-gray-100 min-h-screen">
            <div className="flex-1 md:mr-10 mb-10 md:mb-0">
                <Productos />
            </div>
            <div className="flex-1 md:ml-10">
                <Carrito />
            </div>
        </div>
    );
};

export default TiendaPage;
