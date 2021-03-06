import * as React from "react";

import TodoItem from "./TodoItem";


export default class TodoList extends React.Component {
  renderTodoItem = (todo) => {
    return (
      <TodoItem
        key={todo.id}
        todo={todo}
        onCompletedChange={this.props.onCompletedChange}
        onTextChange={(newText) => this.props.onTextChange(todo, newText)}
      />
    );
  };

  render() {
    return (
      <ul>{this.props.todos.map(this.renderTodoItem)}</ul>
    );
  }
}
