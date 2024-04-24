// Ejercicio 4

// Calcular una funcion llamada numero mas frecuente que le pasaremos un array de numeros (deben ser obligatoriamente numeros)
// y me devuelva que numero se repite mas.

function numeroMasFrecuente(array){
    let mensaje = "";
    let sonNumeros = false;
    let contador = 0;
    let contadorInterno = 0;
    let variable = 0;

    for(let i = 0; i < array.length; i++){
        if(!isNaN(array[i])){
            for(let j = 0; j < array.length; j++){
                if (array[i]===array[j]){
                    contadorInterno++;
                }
            }
            if(contadorInterno > contador){
                contador = contadorInterno;
                variable = array[i];
            }
            sonNumeros = true;
        }else {
            sonNumeros = false;
            break;
        }
    }
    if(sonNumeros){
        return variable;
    }else{
        mensaje = "Todos deben de ser numeros";
        return mensaje;
    }
}
    
const prueba = [1,2,3,3,3];
const prueba2 = [1,2,3,"a",3];