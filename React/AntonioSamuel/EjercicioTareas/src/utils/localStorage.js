
//--------------------------| GUARDAR TAREAS EN LOCALSTORAGE |--------------------------------//

const saveTaskToLocalStorage = (key, newTask) => {
    const existingData = window.localStorage.getItem(key);
    let newData = [];

    if (existingData) {
        // Si la clave ya existe en el localStorage, obtengo los datos existentes.
        newData = JSON.parse(existingData);
    }

    // Añado la nueva tarea al array de tareas.
    newData.push(newTask);

    // Almaceno los datos actualizados en el localStorage.
    window.localStorage.setItem(key, JSON.stringify(newData));
};

export default saveTaskToLocalStorage;

//--------------------------| OBTENER TAREAS DE LOCALSTORAGE |--------------------------------//

export const getAllTasksFromLocalStorage = (key) => {
    const existingData = window.localStorage.getItem(key);

    if (existingData) {
        // Si la clave existe en el localStorage, obtenemos las tareas.
        return JSON.parse(existingData);
    }
}



//--------------------------| NUMERO DE TAREAS DE LOCALSTORAGE |--------------------------------//

export const countTasksInLocalStorage = (key) => {
    const existingData = window.localStorage.getItem(key);

    if (existingData) {
        // Si la clave existe en el localStorage, obtenemos el numero de tareas.
        const dataArray = JSON.parse(existingData);

        return dataArray.length;
        
    } else {
        // Si la clave no existe, devuelve 0.
        return 0;
    }
};

//--------------------------| NUMERO DE TAREAS PRIORITARIAS |--------------------------------//

export const countTaskWithHigherPriority = (key) => {
    const existingData = window.localStorage.getItem(key);

    if (existingData) {
        const dataArray = JSON.parse(existingData);

        const taskWithHigherPriority = dataArray.filter((task)=>task.priority === '5');

        return taskWithHigherPriority.length;
    }
    else {
        return 0;
    }
}