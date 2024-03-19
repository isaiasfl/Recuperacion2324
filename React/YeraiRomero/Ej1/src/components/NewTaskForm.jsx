// NewTaskForm.js
import React, { useState } from 'react';
import priorityMap from '../utils/priorityMap';

const NewTaskForm = ({ updateTask }) => {
  const [taskDesc, setTaskDesc] = useState('');
  const [priority, setPriority] = useState(1);
  const [priorityStarts, setPriorityStarts] = useState('⭐');

  const pmap = (p) => priorityMap(p);

  const handleInputChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
    setPriorityStarts(pmap(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskDesc.trim()) return;
    let data = {
      desc: taskDesc,
      done: false,
    };
    // Call updateTask function passed from parent component
    updateTask(data);

    // Clear input field after submitting
    setTaskDesc('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task description"
        value={taskDesc}
        onChange={handleInputChange}
      />
      <p>Prioridad: {priorityStarts} ({priority})</p>
      <input
        type="range"
        id="priority"
        name="priority"
        min="1"
        max="5"
        value={priority}
        onChange={handlePriorityChange}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default NewTaskForm;
