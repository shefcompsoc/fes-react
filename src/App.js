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
      filterBy: 'none',
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
            onClick={ this.onClick }
          />
        </form>

        <div>
          <button onClick={ () => this.setState({filterBy: 'none'}) }>
            All
          </button>
          <button onClick={ () => this.setState({filterBy: 'complete'}) }>
            Complete
          </button>
          <button onClick={ () => this.setState({filterBy: 'incomplete'}) }>
            Incomplete
          </button>
        </div>

        <hr />

        <TodoList
          todos={ this.todos.sort(byId) }
          onChange={ this.onChange }
        />
      </div>
    );
  }

  get todos () {
    if (this.state.filterBy === 'complete') {
      return this.state.todos.filter(x => x.done)
    } else if (this.state.filterBy === 'incomplete') {
      return this.state.todos.filter(x => !x.done)
    } else {
      return this.state.todos;
    }
  }

  onChange = (id, state) => {
    const todo = this.state.todos.find(x => x.id === id)
    todo.done = state

    const filtered = this.state.todos.filter(x => x.id !== id)

    this.setState({
      todos: [todo, ...filtered]
    })
  }

  onClick = (ev) => {
    ev.preventDefault()

    const added = [...this.state.todos, {
      id: this.state.maxTodoId + 1,
      text: this.refs.todoText.value,
      done: false
    }]


    this.setState({
      maxTodoId: this.state.maxTodoId + 1,
      todos: added,
    })
  }
}

export default App;
