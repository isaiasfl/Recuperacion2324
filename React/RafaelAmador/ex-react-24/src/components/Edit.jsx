import { useContext, useEffect, useState } from "react"
import { Navigate, useParams } from "react-router-dom"
import {  getEncuestasById } from "../helper/getEncuestas"
import { UserContextLogin } from "./context/UserProvider"
import Swal from "sweetalert2"

const Edit = () => {
  const [encuesta, setEncuesta] = useState({ title: "", questions: [] });
  const {id} = useParams()
  const {loged} = useContext(UserContextLogin)

  const handleCambiarTitulo = (e) =>{
    const value = e.target.value;
    setEncuesta((prevState) => ({
      ...prevState,
      title: value,
    }));
  
  }
  const handleCambiarPregunta = (index, e) => {
    const { name, value } = e.target;
    const actualizarPreguntas = [...encuesta.questions];
    actualizarPreguntas[index][name] = value;
    setEncuesta((prevState) => ({
      ...prevState,
      questions: actualizarPreguntas,
    }));
  };
  const handleSubmit = async (e) =>{
    e.preventDefault();
    const response = await fetch(`http://localhost:4010/surveys/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(encuesta),
    });
    if (response.ok) {
      Swal.fire({
        icon: 'success',
        title: 'Cambios realizados',
        text: `Los cambios fueron realizados con exito`,
      })
    } else {
      console.error('Error al actualizar la encuesta');
    }
  }


  useEffect(() => {
    const fetchEncuestas = async () =>{
        const encuest = await getEncuestasById(id);
        setEncuesta(encuest)
    }
    fetchEncuestas()
  }, [])



  return (
    <div>
      {!loged ? <Navigate to={"/"} /> : ""}
      <h1>Editar Encuesta</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Título:
            <input 
              type="text" 
              value={encuesta.title} 
              onChange={handleCambiarTitulo} 
            />
          </label>
        </div>
        {encuesta.questions.map((question, index) => (
          <div key={question.id}>
            <label>
              Pregunta {question.id}:
              <input 
                type="text" 
                value={question.text} 
                onChange={(e) => handleCambiarPregunta(index, e)} 
              />
            </label>
          </div>
        ))}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  )
}

export default Edit