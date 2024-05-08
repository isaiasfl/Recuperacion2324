

export default function genToken(){
    const char = "1234567890qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLÑZXCVBNM";
    
    let token = "";

    while (token.length < 12){
        const indexRandom = Math.floor(Math.random() * char.length);
        token += char[indexRandom];
    }

    localStorage.setItem('token', token);

    
}