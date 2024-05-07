import { createContext } from "react";

const configContext = createContext({});

export const configProvider = ({children}) => {
    const config = [
        {
            theme: {
                dark: {
                    primary: "#000000",
                    secondary: "#F7F1F1",
                    font: "roboto",
                },
                light: {
                    primary: "#F7F1F1",
                    secondary: "#000000",
                    font: "verdana",
                }
            }
        }
    ]

    return (
        <configContext.Provider value={{config}}>
            {children}
        </configContext.Provider>
    )
};


/** 
const configContext = () => {
    const initialState = [
        {
            "id": 1,
            "nombre": "Manzana",
            "precio": 4,
            "stock": 10
        },
        {
            "id": 2,
            "nombre": "Platano",
            "precio": 3,
            "stock": 10
        },
        {
            "id": 3,
            "nombre": "Fresas",
            "precio": 10,
            "stock": 10
        }
    ]
    
    function configContext ({children}) {
        const [productos, setProductos] = useState(initialState);
    
        const agregarProducto = (nombreProducto, precioProducto, stockProducto) => {
            const nuevoProductos = {
                id: productos.length + 1,
                nombre: nombreProducto,
                precio: precioProducto,
                stock: stockProducto
            };
            setProductos([...productos, nuevoProductos]);
        }
    
        const eliminarProducto = (idProducto) => {
            setProductos(productos.filter(producto => producto.id === idProducto));
        }
    }
    
    const reducer = (state = initialState, action) => {
        switch (action.type) {
            case 'AGREGAR_PRODUCTO':
                return [...state, action.payload];
            case 'ELIMINAR_PRODUCTO':
                return state.filter(producto => producto.id !== action.payload);
            case 'ACTUALIZAR_PRODUCTO':
                return state.map(producto => {
                    if (producto.id === action.payload.id) {
                        return action.payload;
                    }
                    return producto;
                });
            default:
                return state;
        }
    }
    
    
    return (
        <div>configContext</div>
    )
}

export default configContext
*/