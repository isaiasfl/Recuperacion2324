const letrasnumeros= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
export const token = () =>{
    let cadena='';
    
    for(let i =0; i<12; i++){
        const posicionAleatoria = Math.floor(Math.random() * letrasnumeros.length);
        const caracter=letrasnumeros.substring(posicionAleatoria, posicionAleatoria +1)
        cadena+=caracter
    }
    return  localStorage.setItem("TOKEN", cadena)

}