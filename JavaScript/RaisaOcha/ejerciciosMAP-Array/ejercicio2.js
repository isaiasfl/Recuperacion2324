/**
 * ## Ejercicio 2: Análisis de Datos de Ventas

Dado un array de objetos que representa ventas, implementa las siguientes funcionalidades:

1. Calcular el total de ventas por producto.
2. Calcular el total de ventas por categoría.
3. Encontrar el producto más vendido.
4. Encontrar la categoría más vendida.

```javascript
const ventas = [
  { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
  { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
  { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
  { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
  { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
];
 */

const ventas = [
  { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
  { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
  { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
  { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
  { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
];

/**
 * Función para calcular el total de productos vendidos de cada tipo de producto
 * @param {Array} ventas
 * @returns
 */
const totalSalesPerProduct = (ventas) => {
  const totalPerProducto = {};

  ventas.forEach(({ product, quantity }) => {
    if (!totalPerProducto[product]) {
      totalPerProducto[product] = 0;
    }
    totalPerProducto[product] += quantity;
  });

  return totalPerProducto;
};

/**
 * Función para calcular el total de ventas de cada categoria
 * @param {Array} ventas
 * @returns
 */
const totalSalesPerCategory = (ventas) => {
  const totalPerCategory = {};

  ventas.forEach(({ category, quantity }) => {
    if (!totalPerCategory[category]) {
      totalPerCategory[category] = 0;
    }
    totalPerCategory[category] += quantity;
  });

  return totalPerCategory;
};

/**
 * Función para mostrar el producto más vendido
 * @param {Array} ventas 
 * @returns 
 */
const bestSellingProduct = (ventas) => {
  const totalPerProduct = totalSalesPerProduct(ventas);
  let maxSales = 0;
  let productMax = null;

  for (const product in totalPerProduct) {
    if (totalPerProduct[product] > maxSales) {
      maxSales = totalPerProduct[product];
      productMax = product;
    }
  }

  return productMax;
};

const bestSellingCategory = (ventas) => {
    const totalPerCategory = totalSalesPerCategory(ventas);
    let maxSales = 0;
    let categoryMax = null;

    for (const category in totalPerCategory) {
        if(totalPerCategory[category] > categoryMax) {
            maxSales = totalPerCategory[category];
            categoryMax = category;
        }

    }
    return categoryMax;
}


// Ejemplos de uso
console.log("Total de ventas por producto:", totalSalesPerProduct(ventas));
console.log("Total de ventas por categoría:", totalSalesPerCategory(ventas));
console.log("Producto más vendido: ", bestSellingProduct(ventas));
console.log("La categoría que más ventas tiene es: ", bestSellingCategory(ventas));
