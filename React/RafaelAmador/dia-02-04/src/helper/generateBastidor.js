export const generarBastidor = async () => {
    let bastidor;
    
   
        bastidor = '';
        for (let i = 0; i < 5; i++) {
            bastidor += Math.floor(Math.random() * 10);
        }

    return bastidor;
}