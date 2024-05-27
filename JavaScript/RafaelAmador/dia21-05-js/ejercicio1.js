const createInventory = () =>{
    const inventario = new Map();

    // 1- Añadir producto
    const addProduct = (id, nombre, categoria, cantidad, precio) =>{
        if(this.inventario.has(id)){
            console.log("Este producto ya esta insertado");
            throw new Error("El producto ya esta insertado");
        }
        this.inventario.set(id,{nombre, categoria, cantidad, precio})
        console.log("Producto añadido");
        console.log(this.inventario);
        return this.inventario
        
    }
    
    // 2- Actualizar cantidad
    
    const updateProduct = (id, newCantidad) =>{
        if(!this.inventario.has(id)){
            console.log("Este producto no existe");
            throw new Error("Este producto no existe");
        }
            let producto=this.inventario.get(id)
            producto.cantidad += newCantidad;
            this.inventario.set(id, producto)
            console.log("Producto actualizado");
            console.log(this.inventario);
            return this.inventario
    }
    
    // 3- Eliminar producto
    
    const deleteProduct = (id) =>{
        if(!this.inventario.has(id)){
            console.log("Este producto no existe");
            throw new Error("Este producto no existe");
        }
            this.inventario.delete(id);
            console.log("Producto eliminado");
            console.log(this.inventario);
            return this.inventario 
    }
    
    // 4- Buscar productos por categoria
    
    const searchProduct = (categoria) =>{
        const productos=[...this.inventario];
        const mismaCategoria= [];
        for( let i= 0; i<productos.length; i++){
            if(productos[i].categoria===categoria){
                mismaCategoria.push(productos[i])
            }
        }
        console.log(mismaCategoria);
        return mismaCategoria
    }

    // 5- Obtener productos por orden de precio

    const listProduct = () =>{
        return [...this.inventario.values].sort((a,b)=> parseInt(a.precio)- parseInt(b.precio))
    }

    // Mostrar el objeto
    const mostrar = () =>{
        console.log(this.inventario);
        return this.inventario
    }
    return {
        addProduct,
        updateProduct,
        searchProduct,
        deleteProduct,
        listProduct,
        mostrar
    }
}
// --------- TEST -------------

const nuevoInventario = createInventory();
nuevoInventario.addProduct(1, "tele", "tecnologia", 100, 100);
nuevoInventario.addProduct(2, "monitor", "tecnologia", 100, 80);
nuevoInventario.addProduct(3, "raton", "tecnologia", 100, 10);
nuevoInventario.updateProduct(1, 12)
nuevoInventario.deleteProduct(3)
nuevoInventario.searchProduct("tecnologia")
nuevoInventario.listProduct()
nuevoInventario.mostrar()