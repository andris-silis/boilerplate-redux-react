import * as React from "react";
import { max } from "lodash";

import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";


export default class TodoApp extends React.Component {
  constructor() {
    super();

    this.state = {
      todos: [
        {id: 1, text: "todo 1", completed: true,},
        {id: 2, text: "todo 2", completed: false,},
        {id: 3, text: "todo 3", completed: true,},
        {id: 4, text: "todo 4", completed: false,},
        {id: 5, text: "todo 5", completed: false,},
        {id: 6, text: "todo 6", completed: true,},
        {id: 7, text: "todo 7", completed: false,},
      ]
    };
  }

  onCompletedChange = (todo) => {
    todo.completed = !todo.completed;
    this.setState({
      todos: this.state.todos,
    });
  };

  onTextChange = (todo, text) => {
    todo.text = text;
    this.setState({
      todos: this.state.todos,
    });
  };

  onAdd = (text) => {
    this.state.todos.push({
      id: max(this.state.todos.map((todo) => todo.id)) + 1,
      text: text,
    });

    this.setState({
      todos: this.state.todos,
    });
  };

  render() {
    return (
      <div className="app">
        <TodoList
          todos={this.state.todos}
          onCompletedChange={this.onCompletedChange}
          onTextChange={this.onTextChange}
        />
        <TodoAdd
          onSave={this.onAdd}
        />
      </div>
    );
  }
}
