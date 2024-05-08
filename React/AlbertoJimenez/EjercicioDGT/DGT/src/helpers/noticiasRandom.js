export default function noticiasRandom(noticias) {
   
    if (noticias.length < 3) {
        throw new Error("ERROR: FALTAN ELEMENTOS");
    }
    
    let noticiasRandom = [];
    let indicesUtilizados = [];
    while (noticiasRandom.length < 3) {
        let indiceAleatorio = Math.floor(Math.random() * noticias.length);
        
        // Verificar si el índice generado ya ha sido utilizado
        if (!indicesUtilizados.includes(indiceAleatorio)) {
            indicesUtilizados.push(indiceAleatorio);
            noticiasRandom.push(noticias[indiceAleatorio]);
        }
    }
    
    return noticiasRandom;
}
