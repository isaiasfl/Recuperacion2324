import { useContext } from "react";
import { ObjetosContext } from "./context/ObjetosProvider";

const Objetos = () => {
  const {objetos, setObjetos, setNombre, setCategoria, setPrecio, setStock, setEditingIndex, } = useContext(ObjetosContext);
  const handleEditar = (index) =>{
    const objeto = objetos[index];
    setNombre(objeto.nombre);
    setCategoria(objeto.categoria);
    setStock(objeto.stock.toString());
    setPrecio(objeto.precio.toString());
    setEditingIndex(index)

  } 
  const handleBorrar = (index) =>{
    const nuevosObjetos = [...objetos]
    nuevosObjetos.splice(index, 1)
    setObjetos(nuevosObjetos)
  }
    
  return (
    <div style={{marginTop: '20px', display: 'flex', justifyContent: 'center'}} >
      {objetos.length === 0 ? (
          <p>No hay objetos</p>
      ) : (
          <table style={{ width: '80%', borderCollapse: 'collapse', textAlign: 'left'}} >
              <thead>
                  <tr>
                      <th style={{borderBottom: '2px solid #ddd', padding: '10px'}}>Nombre</th>
                      <th style={{borderBottom: '2px solid #ddd', padding: '10px'}}>Precio</th>
                      <th style={{borderBottom: '2px solid #ddd', padding: '10px'}}>Stock</th>
                      <th style={{borderBottom: '2px solid #ddd', padding: '10px'}}>Categoría</th>
                      <th style={{borderBottom: '2px solid #ddd', padding: '10px'}}>Acciones</th>
                  </tr>
              </thead>
              <tbody>
                  {objetos.map((objeto, index) => (
                      <tr key={index}>
                          <td style={{borderBottom: '1px solid #ddd', padding: '10px'}}>{objeto.nombre}</td>
                          <td style={{borderBottom: '1px solid #ddd', padding: '10px'}}>{objeto.precio}€</td>
                          <td style={{borderBottom: '1px solid #ddd', padding: '10px'}}>{objeto.stock}</td>
                          <td style={{borderBottom: '1px solid #ddd', padding: '10px'}}>{objeto.categoria}</td>
                          <td style={{borderBottom: '1px solid #ddd', padding: '10px'}}>
                            <button onClick={()=>handleEditar(index)} style={{backgroundColor: '#6c757d', margin: '10px'}}>Editar</button>
                            <button onClick={()=>handleBorrar(index)} style={{backgroundColor: '#dc3545', margin: '10px'}}>Borrar</button>
                            </td>
                      </tr>
                  ))}
              </tbody>
          </table>
      )}
    </div>
  )
}

export default Objetos