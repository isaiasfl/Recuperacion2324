const apiUrl="http://localhost:4000/usuarios";

export const login = (username, password) =>{
    return fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la base de datos');
            }
            return response.json();
        })
        .then(data => {
            const user = data.find(user => user.username === username && user.password === password);
            if (user) {
                console.log(user);
                return user;
            } else {
                console.log("Usuario o contraseña incorrectos");
                throw new Error('Usuario o contraseña incorrectos');
            }
        })
        .catch(error => {
            console.error(error);
        });
}