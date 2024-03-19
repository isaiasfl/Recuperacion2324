

let frase = "El cielo está enladrillado, quien lo desenladrillara, el desenladrillador que lo desenladrille, buen desenladrillador sera";

export function rellenarMap(frase) {

    const fraseSinComas = frase.replaceAll(",", "");
    const palabras = fraseSinComas.split(/\s+/);
    const mapa = new Map();

    palabras.forEach(palabra => {
        mapa.set(palabra, mapa.get(palabra) + 1 || 1);
    })
    return mapa;
}

console.log(rellenarMap(frase));