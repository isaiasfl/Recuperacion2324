const apiUrl="http://localhost:4000/usuarios";

export const register = (username, password, dni, fecha) =>{
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la base de datos');
            }
            return response.json();
        })  
        .then(data => {
        const existingUser = data.find(user => user.username === username || user.DNI === dni);
        if (existingUser) {
            throw new Error('El nombre de usuario o el DNI ya están en uso');
        } else {
            const newUser = {
                username: username,
                password: password,
                DNI: dni,
                fecha_N: fecha
            };
            return fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newUser)
            });
        }
        })
        .catch(error => {
            console.error('Error al registrar usuario:', error);
        });
       
}