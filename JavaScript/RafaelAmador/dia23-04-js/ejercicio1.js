const array = ["perep", "18", 19, 7,19, 8,  "7"];

const filtrarPrimos = (numeros) =>{
    const primos=[]
    for (let i = 0; i < numeros.length; i++) {
        if (typeof numeros[i] === 'number' && numeros[i] > 1) {
            let esPrimo = true;
            for (let x = 2; x < numeros[i]; x++) {
                if (numeros[i] % x === 0) {
                    esPrimo = false;
                    break;
                }
            }
            if (esPrimo) {
                primos.push(numeros[i]);
            }
        }
    }
    const setnumeros= new Set(primos)
    const arraySinRepetidos = [...setnumeros]
    
    console.log(arraySinRepetidos);
    return arraySinRepetidos;
}
console.log(`el array de partida es: ${array}`);
filtrarPrimos(array)
filtrarPrimos([2,4,6,8,9, 7, 10000019, 1000000007, 82589933])