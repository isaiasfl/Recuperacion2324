// Ejercicio 1: Sistema de Gestión de Inventario usando Map

// Crea un sistema de gestión de inventario para una tienda. 
// Creando una función `createInventory()` Debes implementar las siguientes funcionalidades 
// almacenando la información en una estructura MAP.

// 1. Añadir un nuevo producto.
// 2. Actualizar la cantidad de un producto existente.
// 3. Eliminar un producto.
// 4. Buscar productos por categoría.
// 5. Obtener la lista de productos por orden de precio.


function createInventory() {
    // Estructura donde me piden que guarde la informacion
    const dataInventory = new Map();

    // 1. Añadir un nuevo producto.
    const addProducto = (id, name, price, stock, category) => {
        if (dataInventory.has(id)) {
            throw new Error("El producto ya esta añadido")
        }
        dataInventory.set(id, {nombre: name, precio: price, stock: stock, categoria: category})
        
    }

    // 2. Aumentar la cantidad de un producto existente.
    const updateStockProducto = (id, newStock) => {
        if (dataInventory.has(id)) {
            const producto = dataInventory.get(id)
            producto.stock += newStock
            dataInventory.set(id, producto)
        }
    }

    // 3. Eliminar un producto.
    const deleteProducto = (id) => {
        if (dataInventory.has(id)) {
            dataInventory.delete(id)
        }
    }

    // 4. Buscar productos por categoría.
    const findProductByCategory = (category) => {
        const resultado = []; 
        dataInventory.forEach((producto) => {
            if (producto.categoria === category) {
                resultado.push(producto);
            }
        });
        return resultado;
    }

    // 5. Obtener la lista de productos por orden de precio.
    const getProductsByPriceOrder = () => {
        return [...dataInventory.values()].sort((a, b) => a.precio - b.precio);
    }

    // 6. Devolver el Map
    const returnMap = () => {
        console.log(dataInventory)
    }


    // Metodos para trabajar con los elementos del inventario
    return {
        addProducto,
        updateStockProducto,
        deleteProducto,
        findProductByCategory,
        getProductsByPriceOrder,
        returnMap

    }
}

// -----------| PRUEBAS |-------------
const miInventario = createInventory();

// -------> AÑADIR PRODUCTOS
miInventario.addProducto(2, "Monitor", 150, 10, "Electronica")
miInventario.addProducto(3, "Cepillo", 15, 35, "Limpieza")
miInventario.addProducto(4, "Agua", 1.5, 80, "Alimentacion")
miInventario.addProducto(5, "Leche", 1.2, 100, "Alimentacion")
// miInventario.returnMap()

// -------> AUMENTAR EL STOCK DE PRODUCTOS
miInventario.updateStockProducto(2, 5)
// miInventario.returnMap()

// -------> ELIMINAR UN PRODUCTO
// miInventario.deleteProducto()

// -------> BUSCAR PRODUCTO POR CATEGORIA
console.log("-------------------")
console.log(miInventario.findProductByCategory("Alimentacion"))
