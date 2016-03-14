import * as React from "react";


export default class TodoItem extends React.Component {
  render() {
    return (
      <li>
        {this.props.todo.text}
        <input
          type="checkbox"
          value={this.props.todo.completed}
          onChange={this.props.onCompletedChange}
        />
      </li>
    );
  }
}
