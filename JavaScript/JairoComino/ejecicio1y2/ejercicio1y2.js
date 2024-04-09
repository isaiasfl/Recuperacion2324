

function quitarDuplicados(miarray,operador){
    
      const dupliQuitados=[...new Set(miarray)];
     if (operador && (operador.toLowerCase() === 'r')) {
        dupliQuitados.sort((a, b) => {return b.length - a.length}); 
    }
    return dupliQuitados;
     
 };
 const miarray=["hola","hola","audioScheduledSourceNode","dios","adios","adios"];
 console.log("Sin letra 'r' y con'fwfegeege':", quitarDuplicados(miarray,'fwfegeege')); // Sin letra 'r'
 console.log("Con letra 'r':", quitarDuplicados(miarray, 'r')); // Con letra 'r', ordenadas por longitud
 
 ////ejercicio 2
 /**
  * 2º escribe nuna funcion que cuente la frecuencia que una oracion    debolviendo un map con el numero de palabrs encon
  * tradas y cunantas veces se repiten
  */


 const oracion="Donquixote Rosinanteo, es que que que él era un Comandante de la Marina encubierto para detener a Doflamingo.";

 function fecuencia(oracion){
 
    const palabras=oracion.split(' ');

    const numeroPlablabras=new Map()
    palabras.forEach(palabra => {
    //   Utilizamos una  expresión regular para buscar cualquier puntuación alrededor de la palabra
    // La expresión regular busca cualquier puntuación al principio o al final de una palabra
    // y la reemplaza por una cadena vacía
    // esdecir coge cualquier  caracter especial  como ejemplo :. , # @ |!· $ % & / ? ¿  y lo cambia por ' '
      palabra=palabra.replace(/\b[.,\/#!$%\^&\*;:{}=\-_`~()]+\b/g,'')
      palabra.toLowerCase();
      // Incrementar el numero de veces que aparece  la palabra en el mapa
      if (numeroPlablabras.has(palabra)) {
        numeroPlablabras.set(palabra, numeroPlablabras.get(palabra) + 1);
      }   else {
      numeroPlablabras.set(palabra, 1);
      }

    });
    return numeroPlablabras;

 }
 
 const npalabras = fecuencia(oracion);
 console.log("Oracion:");
 console.log(oracion);
console.log("Frecuencia de palabras:");
console.log(npalabras);


