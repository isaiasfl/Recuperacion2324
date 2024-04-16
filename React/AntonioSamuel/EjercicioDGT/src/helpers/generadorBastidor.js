export const generadorBastidorAleatorio = () => {
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let bastidorAleatorio = '';

    while (bastidorAleatorio.length < 17) {
        const index = Math.trunc(Math.random() * caracteresPermitidos.length);
        bastidorAleatorio += caracteresPermitidos.charAt(index);
    }

    return bastidorAleatorio;
}

export default generadorBastidorAleatorio