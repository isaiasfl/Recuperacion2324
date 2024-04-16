export const generarMatricula = () => {

    const generarNumero = () => {
        // Genera un numero aleatorio entre 0 y 9999. Se transforma a string. 
        // En caso de que el numero sea inferior a 4 digitos rellena el resto con 0
        return Math.trunc(Math.random() * 10000).toString().padStart(4, '0');
    }

    function generarLetra() {
        const letrasMayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const index = Math.floor(Math.random() * letrasMayusculas.length);
        return letrasMayusculas.charAt(index);
    }

    const numero = generarNumero();
    const letras = generarLetra() + generarLetra() + generarLetra();

    const matricula = numero + letras;

    return matricula;
}

export default generarMatricula