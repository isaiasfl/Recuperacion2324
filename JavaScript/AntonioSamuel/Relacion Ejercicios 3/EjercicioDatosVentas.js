// Ejercicio 2: Análisis de Datos de Ventas

// Dado un array de objetos que representa ventas, implementa las siguientes funcionalidades:

// 1. Calcular el total de ventas por producto.
// 2. Calcular el total de ventas por categoría.
// 3. Encontrar el producto más vendido.
// 4. Encontrar la categoría más vendida.


// 1. Calcular el total de ventas por producto.
const calcularTotalVentasPorProducto = (array) => {
    const productos = {};
    array.map(({ product, quantity, price }) => {
        let totalVenta = quantity * price;
        
        if (productos[product]) {
            productos[product] += totalVenta;
        } else {
            productos[product] = totalVenta;
        }
    });

    return productos
}

// 2. Calcular el total de ventas por categoría.
const calcularTotalVentasPorCategoria = (array) => {
    const categorias = {};

    array.forEach(({ category, quantity, price }) => {
        const totalVenta = quantity * price;
        
        if (categorias[category]) {
            categorias[category] += totalVenta;
        } else {
            categorias[category] = totalVenta;
        }
    });

    return categorias;
};

// 3. Encontrar el producto más vendido.
const encontrarProductoMasVendido = (array) => {
    let productoMasVendido = null;
    let maxCantidadVendida = 0;

    array.forEach((producto) => {
        if (producto.quantity > maxCantidadVendida) {
            maxCantidadVendida = producto.quantity;
            productoMasVendido = producto.product;
        }
    })

    return productoMasVendido
}

// 4. Encontrar la categoría más vendida.
const encontrarCategoriaMasVendida = (array) => {
    const categorias = {};

    // Sumar las cantidades vendidas para cada categoría
    array.forEach(({ category, quantity }) => {
        if (categorias[category]) {
            categorias[category] += quantity;
        } else {
            categorias[category] = quantity;
        }
    });

    let categoriaMasVendida = null;
    let maxCantidadVendida = 0;

    // Encontrar la categoría con la mayor cantidad vendida
    for (const category in categorias) {
        if (categorias[category] > maxCantidadVendida) {
            maxCantidadVendida = categorias[category];
            categoriaMasVendida = category;
        }
    }

    return categoriaMasVendida;
};

const ventas = [
    { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
    { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
    { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
    { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
    { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
];

console.log(calcularTotalVentasPorProducto(ventas)) 
console.log(calcularTotalVentasPorCategoria(ventas)) 
console.log(encontrarProductoMasVendido(ventas)) 
console.log(encontrarCategoriaMasVendida(ventas)) 