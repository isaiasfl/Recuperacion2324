export const generarToken = () => {
    const caracteresPermitidos = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let tokenAleatorio = '';

    while (tokenAleatorio.length < 12) {
        const index = Math.trunc(Math.random() * caracteresPermitidos.length);
        tokenAleatorio += caracteresPermitidos.charAt(index);
    }

    localStorage.setItem('token', tokenAleatorio);
}

export default generarToken