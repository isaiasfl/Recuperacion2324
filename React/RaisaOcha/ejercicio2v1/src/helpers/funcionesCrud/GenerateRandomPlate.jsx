
const GenerateRandomPlate = () => {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let plate = '';
    for (let i = 0; i < 3; i++) {
      plate += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    for (let i = 0; i < 4; i++) {
      plate += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }
    return plate;
}

export default GenerateRandomPlate;