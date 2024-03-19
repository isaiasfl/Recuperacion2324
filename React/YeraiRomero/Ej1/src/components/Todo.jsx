// Todo.js
import React from 'react';

const Todo = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" checked={todo.done} readOnly />
      <span>{todo.desc}</span>
    </div>
  );
};

export default Todo;
