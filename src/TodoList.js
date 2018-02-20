import React, { Component } from 'react';

const TodoList = ({todos}) => {
  return (
    todos.map((todo) => {
      return (
        <div>
          { todo.text }
        </div>
      )
    })
  )
}

export default TodoList;
