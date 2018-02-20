import React, { Component } from 'react';
import './App.css';

import TodoList from './TodoList'

class App extends Component {
  title = 'Front-end Showdown'

  todos = [
    { text: 'explain react', done: true },
    { text: 'write todo program', done: false },
    { text: 'go to the cavendish', done: false }
  ];

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to {this.title}</h1>
        </header>

        <TodoList todos={this.todos}></TodoList>

      </div>
    );
  }
}

export default App;
