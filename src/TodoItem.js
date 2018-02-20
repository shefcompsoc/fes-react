import React from 'react';
import classNames from 'classnames';
import './TodoItem.css';

const TodoItem = ({ className, todo, onChange }) => {
  className = classNames(className, 'TodoItem', { 'done': todo.done });

  return (
    <div className={ className }>
      <label>
        { todo.text }
        <input
          type='checkbox'
          checked={ todo.done }
          // I tend to just do these inline. They are always just a bit
          // of glue.
          onChange={ ev => onChange(todo.id, ev.target.checked) }
        />
      </label>
    </div>
  );
};

export default TodoItem;
