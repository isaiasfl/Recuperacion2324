

//  1- crear una funcion llamada primos que tome un array como argumjento y 
// devuelba un nuevo  array solo con los primosa sin repetir . 
// como test le pasa re un array que contenga texto y numeros

const arryaPrueva=[1,"wioh",2,3,"wopgjwpo",4,5,25,6,7,8,9,"pogkti",3,17,"73",44,57,"hola",1000000007]

//funcion que determina si un numero es
function esPrimo(num) {
    let esprimo=false;
    //modo dios
    // if (num <= 1) return false;
    //     if (num <= 3) return true;

    //     if (num % 2 === 0 || num % 3 === 0) return false;

    //     let i = 5;
    //     // La regla 6 𝑘 ± 1 6k±1 es una propiedad matemática que describe la relación entre los números primos.
    //     //  Esta regla sugiere que todos los números primos mayores que 3 se pueden representar en la forma 6 𝑘 ± 1 6k±1, 
    //     //  donde 𝑘 k es un número entero no negativo.
    //     while (i * i <= num) {
    //         if (num % i === 0 || num % (i + 2) === 0) return false;
    //         i += 6;
    //     }

    //     return true;
  
  ///compuevo si esuno y sies directamente falso ya que el 1 no es primo
    if (num <= 1) return esprimo=false;
    for (let i=2; i <num; i++) {
        ///comprovamos si el resto es 0 si es no es primo
        if (num%i=== 0 ) {
            esprimo=false;
            break;
        }else{
            esprimo= true;
        }
        
    }
    return esprimo;
}
  

const Primos=(Array)=>{
    //creo un  elemento set pra quitar los rrepetidos  y lo lleno con un resultado  del metodo filter que filtra por  tipo si es number lo mete
arraynuerico= new Set(Array.filter((item) => typeof item === "number"));

const primos =[...arraynuerico].filter((item) => esPrimo(item))

return primos;
}

console.log("Ejerccicio 1");
console.log("Array de partida es : "+arryaPrueva);
console.log("Primos: "+Primos(arryaPrueva));


// 2-carcular  una funcion llamada numero mas frecuente que le pasemos un arry 
// de numeros (obligatoriamente) y me devuelva el nummero que se repite mas

const numeros = [23,9, 56, 78, 9, 14,101, 45,14,14, 67, 32, 11, 88];


const Frecuente=(array)=>{
    let numeroMasFrecuente = null;
    let frecuenciaMaxima = 0;

for (const numero of array) {
    let frecuencia=0;
        for (let i = 0; i < array.length; i++) {
            //mira cuantas veces se repite
            if (numero==array[i]) {
                frecuencia++;
            }
        }
        //comprueva si a cambiado el que mas veces se repite
        if (frecuencia>frecuenciaMaxima) {
            frecuenciaMaxima=frecuencia;
            numeroMasFrecuente=numero;
        }
}
console.log("numero mas frecuente es "+numeroMasFrecuente+" se repite :"+frecuenciaMaxima);
return numeroMasFrecuente;
}

console.log("Ejerccicio 2");
console.log("aaray inicial"+numeros);
console.log(Frecuente(numeros));

// 3-Crear una funcion llamada crearPorPropiedad que tome como primer argumento un array de objetos y como
//  segundo el nombre de una propiedad y me devuelva im array con los datos de esa propiedad ordenados.
//   Si es texto alfabeticamente y si es numero de mayor a menor

const personas = [
    { nombre: "Juan", edad: 25, ciudad: "Madrid" },
    { nombre: "Ana", edad: 30, ciudad: "Barcelona" },
    { nombre: "Pedro", edad: 28, ciudad: "Valencia" },
    { nombre: "Maria", edad: 22, ciudad: "Sevilla" },
    { nombre: "Carlos", edad: 35, ciudad: "Bilbao" }
];

const ordenarPorPropiedad=(array,propiedad)=>{
let copia =[...array]

//usando el metodo sort para ordenar
copia.sort((a, b) => { 
    // Ordenar números de mayor a menor
    if (typeof a[propiedad] === 'number') {
        
        return b[propiedad] - a[propiedad];
        
        // Ordenar texto alfabéticamente
    } else if (typeof a[propiedad] === 'string') {
        
        return a[propiedad].localeCompare(b[propiedad]);
    } else {

        // Si no es texto ni número, mantener el orden actual
        return 0;
    }
});

 console.log("ordenado por :"+propiedad);
return copia;
}
console.log("Ejerccicio 3");
// Ordenar edades de mayor a menor
console.log("array inicial :"+personas);
console.log( ordenarPorPropiedad(personas, 'edad')); 

// Ordenar nombres alfabéticamente

console.log(ordenarPorPropiedad(personas, 'nombre'));

// Ordenar ciudades alfabéticamente

console.log(ordenarPorPropiedad(personas, 'ciudad')); 