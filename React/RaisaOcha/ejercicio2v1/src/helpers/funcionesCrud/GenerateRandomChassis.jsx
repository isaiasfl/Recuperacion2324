/**
 * Un numero de bastidor real cuenta con un total de 17 dígitos,
 * para la ejemplificación de un numero de bastidor en el ejercicio este contará
 * con 9 numeros y 8 letras aleatorios
 */
const GenerateRandomChassis = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let chassis = '';
    for (let i = 0; i < 8; i++) {
      chassis += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 9; i++) {
      chassis += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return chassis;
}

export default GenerateRandomChassis