import { useContext, useEffect, useState } from "react";
import { getEncuestas } from "../helper/getEncuestas";
import { UserContextLogin } from "./context/UserProvider";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Card = () => {
    const [ encuestas, setEncuestas] = useState([])
    const { loged } = useContext(UserContextLogin)

   
    const handleEliminar = async (id) =>{  
        const result = await Swal.fire({
            icon: 'question',
            title: '¿Seguro que quiere borrar el producto?',
            showCancelButton: true,
            confirmButtonText: 'Confirmar',
            cancelButtonText: 'Cancelar',
          }) 
          if (result.isConfirmed) {
           
        const indice = encuestas.findIndex(objeto => objeto.id === id);
        if (indice !== -1) {
            const nuevaEncuesta = [...encuestas]
            nuevaEncuesta.splice(indice, 1);
            setEncuestas(nuevaEncuesta)
            const response = await fetch(`http://localhost:4010/surveys/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if(!response.ok){
                console.error("Error al borrar la encuesta");
                console.log(id);
            }else{
                Swal.fire({
                    icon: 'success',
                    title: 'Encuesta eliminada',
                    text: 'La encuesta ha sido eliminada.',
                });
            }
        } else {
            console.log(`No se encontró ninguna encuesta con ID ${id}.`);
        }
    }

    }


    
    useEffect(() => {
        const fetchEncuestas = async () =>{
            const encuest = await getEncuestas();
            setEncuestas(encuest)

        }
        fetchEncuestas()
    }, [encuestas])
    
  return (
    <div>
        {encuestas.map((encuesta)=>(
            <div key={encuesta.id}>
                <h2>{encuesta.title}</h2>
                    <div>

                    </div>
                    <Link to={`/edit/${encuesta.id}`}><button >Editar</button></Link>
                    
                    {!loged ? "": <button onClick={()=>handleEliminar(encuesta.id)}>Eliminar</button>}     
            </div>  
        ))}
    </div>
  )
}

export default Card