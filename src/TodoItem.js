import React from 'react';
import classNames from 'classnames';
import './TodoItem.css';

const TodoItem = ({ className, todo, onChange }) => {
  const newClassName = classNames(className, 'TodoItem': todo.done);

  return (
    <div className={ newClassName }>
      <label>
        { todo.text }
        <input
          type='checkbox'
          checked={ todo.done }
          // I tend to just do these inline. They are always just a bit
          // of glue and never get very long.
          onChange={ ev => onChange(todo.id, ev.target.checked) }
        />
      </label>
    </div>
  );
};

export default TodoItem;
