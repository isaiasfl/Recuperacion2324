export const generateId = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
};


export const generateDni = () => {
    const num = Math.floor(Math.random() * 100000000);
    const chars = 'TRWAGMYFPDXBNJZSQVHLCKE';
    const letter = chars[num % 23];
    return `${num}${letter}`;
};


export const generateMatricula = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = Array.from({ length: 3 }, () => letters.charAt(Math.floor(Math.random() * letters.length))).join('');
    const randomNumbers = Math.floor(1000 + Math.random() * 9000);
    return `${randomNumbers}${randomLetters}`;
};

export const saveToLocalStorage = (key, data) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const saveToDbJson = async (data) => {
    try {
        const response = await fetch('http://localhost:4000/comments', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error('Error al guardar los datos en db.json');
        }

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
