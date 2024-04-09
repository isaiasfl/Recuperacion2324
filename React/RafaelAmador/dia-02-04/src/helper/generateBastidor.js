import { getAtributos } from "./getAtributosVehiculo";

export const generarBastidor = async () => {
    let bastidor;
    let repetido = true;

    while(repetido){
        bastidor = '';
        for (let i = 0; i < 16; i++) {
            bastidor += Math.floor(Math.random() * 10);
        }
        
        const data = await getAtributos();
        const bastidoresExistentes = data.map(item => item.bastidor);
        repetido = bastidoresExistentes.includes(bastidor);
    }

    return bastidor;
}