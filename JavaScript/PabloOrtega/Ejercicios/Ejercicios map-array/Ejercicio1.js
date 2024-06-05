/**
 * Ejercicio 1: Sistema de Gestión de Inventario usando Map
 * Crea un sistema de gestión de inventario para una tienda. Creando una función createInventory() 
 * Debes implementar las siguientes funcionalidades almacenando la información en una estructura MAP.

    Añadir un nuevo producto.
    Actualizar la cantidad de un producto existente.
    Eliminar un producto.
    Buscar productos por categoría.
    Obtener la lista de productos por orden de precio.
 * 
 */


function createInventory() {
    const productos = new Map();

    
        // 1. Añadir un nuevo producto
        const añadirProducto=(id, nombre, categoria, cantidad, precio)=> {
            if (!productos.has(id)) {
                productos.set(id, { nombre, categoria, cantidad, precio });
                return `Producto "${nombre}" añadido exitosamente.`;
            } else {
                return `El producto con ID "${id}" ya existe.`;
            }
        };

        // 2. Actualizar la cantidad de un producto existente
        const actualizarCantidad=(id, cantidad) =>{
            if (productos.has(id)) {
                const producto = productos.get(id);
                producto.cantidad = cantidad;
                return `Cantidad del producto "${producto.nombre}" actualizada a ${cantidad}.`;
            } else {
                return `El producto con ID "${id}" no existe.`;
            }
        };

        // 3. Eliminar un producto
        const eliminarProducto=(id) =>{
            if (productos.has(id)) {
                productos.delete(id);
                return `Producto con ID "${id}" eliminado.`;
            } else {
                return `El producto con ID "${id}" no existe.`;
            }
        }

        // 4. Buscar productos por categoría
        const buscarProductosPorCategoria=(categoria)=> {
            const resultado = [];
            for (let [id, producto] of productos) {
                if (producto.categoria === categoria) {
                    resultado.push({ id, ...producto });
                }
            }
            return resultado;
        }

        // 5. Obtener la lista de productos por orden de precio
        const obtenerProductosPorPrecio=()=> {
            const listaProductos = Array.from(productos.values());
            listaProductos.sort((a, b) => a.precio - b.precio);
            return listaProductos;
        }

        // Método para mostrar todos los productos
        const mostrarProductos=()=> {
            return Array.from(productos.entries());
        }
    return {
        añadirProducto,
        actualizarCantidad,
        eliminarProducto,
        buscarProductosPorCategoria,
        obtenerProductosPorPrecio,
        mostrarProductos,
    };
};

// Ejemplo de uso
const inventario = createInventory();

// Añadir productos
console.log(inventario.añadirProducto(1, 'Laptop', 'Electrónica', 10, 1200));
console.log(inventario.añadirProducto(2, 'Teléfono', 'Electrónica', 25, 800));
console.log(inventario.añadirProducto(3, 'Teclado', 'Accesorios', 50, 100));
console.log(inventario.añadirProducto(4, 'Mouse', 'Accesorios', 70, 50));

// Actualizar cantidad de un producto
console.log(inventario.actualizarCantidad(2, 30));

// Eliminar un producto
console.log(inventario.eliminarProducto(3));

// Buscar productos por categoría
console.log(inventario.buscarProductosPorCategoria('Accesorios'));

// Obtener la lista de productos por orden de precio
console.log(inventario.obtenerProductosPorPrecio());

// Mostrar todos los productos
console.log(inventario.mostrarProductos());
