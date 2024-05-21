const ventas = [
  { product: "Laptop", category: "Electronics", quantity: 2, price: 1000 },
  { product: "Phone", category: "Electronics", quantity: 3, price: 500 },
  { product: "Shirt", category: "Clothing", quantity: 5, price: 30 },
  { product: "Laptop", category: "Electronics", quantity: 1, price: 1000 },
  { product: "Shoes", category: "Clothing", quantity: 2, price: 60 },
];

const gestionarVentas= () => {
  const TotalVentas = () => {
    let total = 0;
    ventas.forEach(venta => {
      total += venta.quantity * venta.price;
    });
  }
}