// ## Ejercicio 1: Sistema de Gestión de Inventario usando Map

const { set } = require("react-hook-form");

// Crea un sistema de gestión de inventario para una tienda. Creando una función `createInventory()` Debes implementar las siguientes funcionalidades almacenando la información en una estructura MAP.

// 1. Añadir un nuevo producto.
// 2. Actualizar la cantidad de un producto existente.
// 3. Eliminar un producto.
// 4. Buscar productos por categoría.
// 5. Obtener la lista de productos por orden de precio.


const createInventory= () => {
//creo la estructura para la informacion
let inventarioData=new Map();

/// metodos  para trabajar
 const addProduco=(nombre,id,categoria,precio,cantidad)=>{
    let newProduct={
        id:id,
        product:nombre, 
        category:categoria,
        quantity:cantidad,
        price:precio 
    }
    if(this.inventarioData.has(id)){
        throw "ya ia otro con el mismo id"
    }
    this.inventarioData.set(id,newProduct)
    return "objeto añadido"
 }

 const updateQuantity=(id,quantity)=>{
    if(!this.inventarioData.has(id)){
        throw "el  id no se encuentra"
    }
        let Producto=this.inventarioData.get(id)
        Producto.quantity +=quantity
        this.inventarioData.set(id,Producto)
        return "objeto aactualizdo"
    }

 const shearchProduct=(id)=>{
    if(!this.inventarioData.has(id)){
        throw "el  id no se encuentra"
    }
        let Producto=this.inventarioData.get(id)
        return Producto
 }
 const deleteProduct=(id)=>{
    if(!this.inventarioData.has(id)){
        throw "el  id no se encuentra"
    }
        this.inventarioData.delete(id)
        return "objeto eliminado"
 }
 return {addProduco,
        inventarioData,
        updateQuantity,
        shearchProduct,
        deleteProduct,
        }
}

//----------------TEST----------------------//


const inventario1=createInventory();
inventario1.addProduco("bonbilla",12,"Electronics",2,45)
console.log(inventario1);
inventario1.addProduco("lupa",2,"Electronics",6,15)
console.log(inventario1);
inventario1.updateQuantity(12,56);
console.log(inventario1);
inventario1.shearchProduct(12);
console.log(inventario1);
inventario1.deleteProduct(2);
console.log(inventario1);






////////////////////////////////////////////


