export const generarMatricula = async () => {
    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let matricula;
    
   
        matricula = '';
        for (let i = 0; i < 4; i++) {
            matricula += Math.floor(Math.random() * 10);
        }
        for (let i = 0; i < 3; i++) {
            matricula += letras.charAt(Math.floor(Math.random() * letras.length));
        }        

    return matricula;
}