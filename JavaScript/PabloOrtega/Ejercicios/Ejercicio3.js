// Ejercicio 3

// Crear una funcion llamada filtrar primos que tome un array como argumento 
// y me devuelva un nuevo array solo con los numeros primos (sin repetir). Como test le pasare un array con texto y numeros.

function filtrarPrimos(array){

    function esPrimo(num){
        let esprimo = false;
        let contador = 0;
        for(let i=num; i=2; i--){
            if(num%i == 0){
                contador++;
            }
        }
        if (contador == 1){
            esprimo = true;
        }else{
            esprimo = false;
        }    
        return esprimo;
    }

    let result = [];
    for(let i=0; i<array.length; i++){
        if (!isNaN(array[i]) && esPrimo(array[i])){
            result.push(array[i]);
        }
    }
    let setFinal = new Set(result);
    
    return setFinal;
}

const prueba = [2,3,4,5,6,7,8,9];