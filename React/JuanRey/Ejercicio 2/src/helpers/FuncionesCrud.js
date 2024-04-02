function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateRandomLetter() {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return alphabet.charAt(Math.floor(Math.random() * alphabet.length));
}

function generateRandomPlate() {
    let plate = '';
    for (let i = 0; i < 4; i++) {
        plate += generateRandomNumber(0, 9);
    }
    for (let i = 0; i < 3; i++) {
        plate += generateRandomLetter();
    }
    return plate;
}
