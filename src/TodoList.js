import React, { Component } from "react";
import "./TodoList.css";

import TodoItem from "./TodoItem";

class TodoList extends Component {
  render() {
    return this.props.todos.map(todo => {
      return (
        <TodoItem
          key={ todo.id }
          todo={ todo }
          onChange={ this.props.onChange }
        />
      );
    });
  }
}

export default TodoList;
