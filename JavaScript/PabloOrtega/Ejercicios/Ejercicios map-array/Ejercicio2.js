/**
 * Ejercicio 2: Análisis de Datos de Ventas
 * Dado un array de objetos que representa ventas, implementa las siguientes funcionalidades:

    Calcular el total de ventas por producto.
    Calcular el total de ventas por categoría.
    Encontrar el producto más vendido.
    Encontrar la categoría más vendida.

    const ventas = [
    { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
    { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
    { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
    { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
    { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
    ];
 */


// Datos de ejemplo
const ventas = [
    { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
    { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
    { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
    { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
    { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
];

// 1. Calcular el total de ventas por producto
function totalVentasPorProducto(ventas) {
    const ventasPorProducto = {};
    
    ventas.forEach(venta => {
        const { product, quantity, price } = venta;
        if (!ventasPorProducto[product]) {
            ventasPorProducto[product] = 0;
        }
        ventasPorProducto[product] += quantity * price;
    });
    
    return ventasPorProducto;
}

// 2. Calcular el total de ventas por categoría
function totalVentasPorCategoria(ventas) {
    const ventasPorCategoria = {};
    
    ventas.forEach(venta => {
        const { category, quantity, price } = venta;
        if (!ventasPorCategoria[category]) {
            ventasPorCategoria[category] = 0;
        }
        ventasPorCategoria[category] += quantity * price;
    });
    
    return ventasPorCategoria;
}

// 3. Encontrar el producto más vendido
function productoMasVendido(ventas) {
    const ventasPorProducto = totalVentasPorProducto(ventas);
    let maxVentas = 0;
    let productoMasVendido = '';
    
    for (const product in ventasPorProducto) {
        if (ventasPorProducto[product] > maxVentas) {
            maxVentas = ventasPorProducto[product];
            productoMasVendido = product;
        }
    }
    return productoMasVendido;
}

// 4. Encontrar la categoría más vendida
function categoriaMasVendida(ventas) {
    const ventasPorCategoria = totalVentasPorCategoria(ventas);
    let maxVentas = 0;
    let categoriaMasVendida = '';
    
    for (const category in ventasPorCategoria) {
        if (ventasPorCategoria[category] > maxVentas) {
            maxVentas = ventasPorCategoria[category];
            categoriaMasVendida = category;
        }
    }
    
    return categoriaMasVendida;
}

// Resultados
console.log("Total de ventas por producto:", totalVentasPorProducto(ventas));
console.log("Total de ventas por categoría:", totalVentasPorCategoria(ventas));
console.log("Producto más vendido:", productoMasVendido(ventas));
console.log("Categoría más vendida:", categoriaMasVendida(ventas));
