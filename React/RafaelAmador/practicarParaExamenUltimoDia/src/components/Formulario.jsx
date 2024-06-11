import { useContext, useState } from "react";
import { ObjetosContext } from "./context/ObjetosProvider";

const Formulario = () => {
    const {objetos, setObjetos,nombre, categoria, stock, precio, setNombre, setCategoria, setStock, setPrecio, editingIndex, setEditingIndex} = useContext(ObjetosContext);

    const handleChangeName = (e) =>{
        setNombre(e.target.value)
    }
    const handleChangeCategoria = (e) =>{
        setCategoria(e.target.value)
    }
    const handleChangeStock = (e) =>{
        setStock(e.target.value)
    }
    const handleChangePrecio = (e) =>{
        setPrecio(e.target.value)
    }

    const handleEnviar = (e) => {
        e.preventDefault();
        if (editingIndex !== null) {
            const updatedObjetos = [...objetos];
            updatedObjetos[editingIndex] = {
                nombre,
                categoria,
                stock: parseInt(stock),
                precio: parseFloat(precio),
            };
            setObjetos(updatedObjetos);
            localStorage.setItem("productos", JSON.stringify(objetos))
        } else {
            const nuevoProducto = [...objetos, {
                nombre,
                categoria,
                stock: parseInt(stock),
                precio: parseFloat(precio),
            }];
            setObjetos(nuevoProducto);
            localStorage.setItem("productos", JSON.stringify(objetos))
        }

        // Resetear los campos del formulario
        setNombre("");
        setCategoria("");
        setStock("");
        setPrecio("");
        setEditingIndex(null); // Resetear el índice de edición
    };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <form onSubmit={handleEnviar} style={{display: 'flex', flexDirection: 'column', width: '300px', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
            <input type="text" placeholder="nombre" name="nombre" onChange={handleChangeName} value={nombre} required
            style={{ marginBottom: '20px', padding: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '20px',}}
            />
            <input type="text" placeholder="categoria" name="categoria" onChange={handleChangeCategoria} value={categoria} required
             style={{ marginBottom: '20px', padding: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '20px',}}
            />
            <input type="number" placeholder="stock" name="stock" onChange={handleChangeStock} value={stock} required
             style={{ marginBottom: '20px', padding: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '20px',}}
            />
            <input type="number" placeholder="precio" name="precio" onChange={handleChangePrecio} value={precio} required
             style={{ marginBottom: '20px', padding: '15px', borderRadius: '5px', border: '1px solid #ccc', fontSize: '20px',}}
            />
            <button type="submit" style={{padding: '10px', borderRadius: '5px', border: 'none', backgroundColor: '#28a745', color: '#fff', fontSize: '16px', cursor: 'pointer',}}>Enviar</button>
        </form>
    </div>
  )
}

export default Formulario