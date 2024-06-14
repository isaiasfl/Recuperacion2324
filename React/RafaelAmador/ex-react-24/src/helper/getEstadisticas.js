import { getEncuestas } from "./getEncuestas"

export const getEstadisticas= async (id) =>{
    const preguntasRespuestas= new Map()
    const encuestas = await getEncuestas();
    encuestas.forEach(encuesta => {
            encuesta.questions.forEach((pregunta)=>{
                const respuestaMasElegida = () =>{
                        let result = "";
                        
                        let acumulador = 0;
                        for (let i = 0; i < pregunta.responses.length; i++) {
                            let contador = 0;
                          for (let j = i + 1; j < pregunta.responses.length; j++) {
                            if (pregunta.responses[i] === pregunta.responses[j]) {
                              contador++
                            }
                          }
                          if(contador>acumulador){
                            result=pregunta.responses[i]
                            acumulador= contador
                          }   
                        }
                        return result;
                      }
                const respuestaMas = respuestaMasElegida();
                const pregunta1 = pregunta.text
                
                preguntasRespuestas.set(pregunta1,{pregunta: pregunta1, respuesta: respuestaMas})
            
                
            })
        })    
    return Array.from(preguntasRespuestas.values())
    
}