
// generar dni random

function generarDNI() {
    const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    const numero = Math.floor(Math.random() * 100000000); // Generar un número aleatorio de 8 dígitos
    const letra = letras.charAt(numero % 23);
    return numero.toString().padStart(8, '0') + letra;
}

console.log(generarDNI()); // Ejemplo de salida: "12345678Z"

// generar matricula random

function generarMatricula() {
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numeros = Math.floor(Math.random() * 10000).toString().padStart(4, '0'); // Generar un número aleatorio de 4 dígitos
    const letrasMatricula = Array.from({ length: 3 }, () => letras.charAt(Math.floor(Math.random() * letras.length))).join('');
    return numeros + " " + letrasMatricula;
}

console.log(generarMatricula()); // Ejemplo de salida: "1234 ABC"

// generar numero de telefono random

function generarTelefono() {
    const prefijos = ['6', '7', '8', '9'];
    const prefijo = prefijos[Math.floor(Math.random() * prefijos.length)];
    const numero = Math.floor(Math.random() * 100000000).toString().padStart(8, '0'); // Generar un número aleatorio de 8 dígitos
    return prefijo + numero;
}

console.log(generarTelefono()); // Ejemplo de salida: "612345678"

// generar tarjeta random

function generarTarjetaCredito() {
    function luhnAlgorithm(arr) {
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            let num = parseInt(arr[i]);
            if ((arr.length - i) % 2 === 0) {
                num *= 2;
                if (num > 9) num -= 9;
            }
            sum += num;
        }
        return (sum * 9) % 10;
    }

    const longitud = 16;
    let tarjeta = Array.from({ length: longitud - 1 }, () => Math.floor(Math.random() * 10));
    tarjeta.push(luhnAlgorithm(tarjeta));
    return tarjeta.join('');
}

console.log(generarTarjetaCredito()); // Ejemplo de salida: "1234567812345670"

// generar correo electronico random

function generarCorreo() {
    const caracteres = "abcdefghijklmnopqrstuvwxyz0123456789";
    const dominios = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
    
    function generarParteAleatoria(longitud) {
        return Array.from({ length: longitud }, () => caracteres.charAt(Math.floor(Math.random() * caracteres.length))).join('');
    }

    const usuario = generarParteAleatoria(8);
    const dominio = dominios[Math.floor(Math.random() * dominios.length)];
    return usuario + "@" + dominio;
}

console.log(generarCorreo()); // Ejemplo de salida: "abcd1234@gmail.com"
