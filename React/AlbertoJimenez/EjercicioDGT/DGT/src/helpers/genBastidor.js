import verificarDuplicados from "./verificarDuplicado";

export default function genBastidor(){
    const char = "1234567890qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM";
    let str = '';
    let bastidor = "";

    while (str.length < 17){
        const indexRandom = Math.floor(Math.random() * char.length);
        str += char[indexRandom];
    }

    if (verificarDuplicados("bastidor", str)){
         bastidor = str;
    }



    return bastidor;
}