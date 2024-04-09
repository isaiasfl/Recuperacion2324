export default function genBastidor(){
    const char = "1234567890qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM";
    let str = '';

    while (str.length < 17){
        const indexRandom = Math.floor(Math.random() * char.length);
        str += char[indexRandom];
    }

    return str;
}