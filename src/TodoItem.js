import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
  render () {
    const classSet = [this.props.className, 'TodoItem']

    if (this.props.todo.done) {
      classSet.push('done')
    }

    return (
      <div className={ classSet.join(' ') }>
        <label>
          { this.props.todo.text }
          <input
            type='checkbox'
            checked={ this.props.todo.done }
            onChange={ this.onChange.bind(this) }
          />
        </label>
      </div>
    )
  }

  onChange (ev) {
    this.props.onChange(this.props.todo.id, ev.target.checked)
  }
}

export default TodoItem;
