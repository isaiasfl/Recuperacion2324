export default function genMatricula(){
    const letras = "WRTYPSDFGHJKLZXCVBNM"
    const num = "0123456789"
    let numMatricula = '';
    let letMatricula = '';

    while (numMatricula.length < 4){
        const indexRandom = Math.floor(Math.random() * num.length);
        numMatricula += num[indexRandom];
    }

    while (letMatricula.length < 3){
        const indexRandom = Math.floor(Math.random() * letras.length);
        letMatricula += letras[indexRandom];
    }

    const matricula = numMatricula + letMatricula; 

    return matricula;
}