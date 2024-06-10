
    ///GENERA LAS MATRICULAS

/**
 * 
 * @returns  matricula
 */    
function generarMatricula() {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let matricula = '';
  
    // Generar los 4 números al principio
    for (let i = 0; i < 4; i++) {
      matricula += Math.floor(Math.random() * 10);
    }
  
    // Generar las 3 letras al final
    for (let i = 0; i < 3; i++) {
      matricula += letras.charAt(Math.floor(Math.random() * letras.length));
    }
  
    return matricula;
  }
  export default generarMatricula;