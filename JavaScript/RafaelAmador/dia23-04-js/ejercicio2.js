//const numeroFrecuente = (numeros) =>{
//    let contadorM= 0;
//    let masRepetido= 0;
//    for(let i=0; i<numeros.length; i++){
//        let contador=0;
//        for(let x=0; x<numeros.length; x++){
//            if(numeros[i]==numeros[x]){
//                contador++
//            }
//        }
//        if(contador>contadorM){
//            contadorM=contador
//            masRepetido=numeros[i]
//        }
//    }
//    console.log(masRepetido);
//    return masRepetido;
//}
const numeroFrecuente = (numeros) =>{
    let contadorM= 0;
    let masRepetido= 0;
    numeros.forEach(i => {
        let contador=0
        for(let x=0; x<numeros.length; x++){
            if(numeros[i]==numeros[x]){
                contador++
            }
        }
        if(contador>contadorM){
            contadorM=contador
            masRepetido=numeros[i]
        }
    });
        
    console.log(masRepetido);
    return masRepetido;
}
    

numeroFrecuente([2,3,4,5,1,1,1,1,1,1,2,3,4,24,3,2,1,1,3,3,3,3,3,3,3,3,,3,3,3,3,3,3,3,3,3,3,3]);
numeroFrecuente([2,3,4,5,2,1,2,3,4,24,3,2,1,1,2,2,2,2,2,2])



