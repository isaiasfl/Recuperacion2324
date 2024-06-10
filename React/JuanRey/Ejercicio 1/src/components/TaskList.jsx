const TaskList = ({ tasks, onDelete }) => {
    const getTaskColor = (importance) => {
        let color;
        if (importance >= 1 && importance <= 2) {
            color = 'green';
        } else if (importance >= 3 && importance <= 4) {
            color = 'yellow';
        } else {
            color = 'red';
        }
        return color;
        };
    
        const renderStars = (importance) => {
        const stars = [];
        for (let i = 0; i < importance; i++) {
            stars.push(<span key={i}>🌟</span>);
        }
        return stars;
    };
    return (
        <div>
            <h2>Lista de tareas</h2>
            {tasks.map((task, index) => (
            <div key={index} style={{ backgroundColor: getTaskColor(task.importance), padding: '10px', margin: '5px', borderRadius: '5px' }}>
                <h3>{task.name}</h3>
                <p>Importancia: {renderStars(task.importance)}</p>
                <button onClick={() => onDelete(index)}>Eliminar</button>
            </div>
            ))}
        </div>
    );
};

export default TaskList