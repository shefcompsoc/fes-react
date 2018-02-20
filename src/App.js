import React, { Component } from "react";
import "./App.css";

import TodoList from "./TodoList";

class App extends Component {
  title = "Front-end Showdown";

  constructor (props) {
    super(props)

    this.state = {
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
          <h1 className="App-title">Welcome to {this.title}</h1>
        </header>

        <br />
        <br />

        <form>
          <input type="text" />
          <input type="submit" value="Add Todo" />
        </form>

        <hr />

        <TodoList
          todos={ this.state.todos }
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
}

export default App;
