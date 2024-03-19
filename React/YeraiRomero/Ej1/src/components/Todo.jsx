// Todo.js
import React from 'react';
import priorityMap from '../utils/priorityMap';
const Todo = ({ todo }) => {
  const pmap = (p) => priorityMap(p);
  let priorityStars = pmap(todo.priority);
  return (
    <div>
      <input type="checkbox" checked={todo.done} readOnly />
      <span>{todo.desc}</span>
      <p>{priorityStars}</p>
    </div>
  );
};

export default Todo;
