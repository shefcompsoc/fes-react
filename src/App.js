import React, { Component } from "react";
import "./App.css";

import TodoList from "./TodoList";

const byId = (a, b) => {
  return a.id < b.id ? -1 : 1
}

class App extends Component {
  title = "Front-end Showdown";

  constructor (props) {
    super(props)

    this.state = {
      maxTodoId: 3,
      numTodos: 3,
      todos: [
        { id: 1, text: "explain react", done: true },
        { id: 2, text: "write todo program", done: false },
        { id: 3, text: "go to the cavendish", done: false }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to { this.title }</h1>
        </header>

        <br />
        <br />

        <form>
          <input
            type="text"
            ref="todoText"
          />
          <input
            type="submit"
            value="Add Todo"
            onClick={ this.onClick.bind(this) }
          />
        </form>

        <hr />

        <TodoList
          todos={ this.state.todos.sort(byId) }
          onChange={ this.onChange.bind(this) }
        />
      </div>
    );
  }

  onChange(id, state) {
    const todo = this.state.todos.find(x => x.id === id)
    todo.done = state

    const filtered = this.state.todos.filter(x => x.id !== id)

    this.setState({
      todos: [todo, ...filtered]
    })
  }

  onClick(ev) {
    ev.preventDefault()

    const added = [...this.state.todos, {
      id: this.state.maxTodoId + 1,
      text: this.refs.todoText.value,
      done: false
    }]


    this.setState({
      numTodos: this.state.numTodos + 1,
      maxTodoId: this.state.maxTodoId + 1,
      todos: added,
    })
  }
}

export default App;
