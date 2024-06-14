import { getEncuestas } from "./getEncuestas";

export const getPreguntaAleatoria = async (id) =>{
    const encuestas = await getEncuestas();
    encuestas.forEach(encuesta => { 
        if(encuesta.id==id){
            const preguntaAleatoria = Math.floor(Math.random() * encuesta.questions.length)
            const preguntaSeleccionada=encuesta.questions[preguntaAleatoria]
            return {
                pregunta: preguntaSeleccionada.text,
                respuestas: preguntaSeleccionada.options
            }
             
        }
      
    });
}