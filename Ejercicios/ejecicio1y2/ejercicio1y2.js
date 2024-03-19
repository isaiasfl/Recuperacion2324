

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


 const oracion="Donquixote Rosinanteo, es que él era un Comandante de la Marina encubierto para detener a Doflamingo.";

 function fecuencia(oracion){
    const palabras=oracion.split('');

    palabras.forEach(palabra => {
      palabra=palabra.replace()
    });

 }