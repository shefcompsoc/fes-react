import React from "react";
import "./TodoList.css";

import TodoItem from "./TodoItem";

const TodoList = ({ todos, onChange }) => (
  todos.map(todo => (
    <TodoItem
      key={ todo.id }
      todo={ todo }
      onChange={ onChange }
    />
  ))
);

export default TodoList;
