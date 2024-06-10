
function genrarBastidor(){
 
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let bastidor = '';
  
    for (let i = 0; i < 16; i++) {
      const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
      bastidor += caracteres.charAt(indiceAleatorio);
    }
  
    return bastidor;
  }
  // Ejemplo de uso:

export default genrarBastidor;