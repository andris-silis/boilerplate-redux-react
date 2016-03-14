import * as React from "react";

import TodoTextInput from "./TodoTextInput";


export default class TodoItem extends React.Component {
  constructor() {
    super();

    this.state = {
      editMode: false,
    }
  }

  onCompletedChange = () => {
    this.props.onCompletedChange(this.props.todo);
  };

  onEditDone = (newText) => {
    this.setState({
      editMode: false,
    });

    this.props.onTextChange(newText);
  };

  onTextClick = () => {
    this.setState({
      editMode: true,
    });
  };

  renderText() {
    if (this.state.editMode) {
      return (
        <TodoTextInput
          todo={this.props.todo}
          onEditDone={this.onEditDone}
        />
      );
    } else {
      return (
        <span
          onClick={this.onTextClick}
        >
          {this.props.todo.text}
        </span>
      );
    }
  }

  renderCompletedCheckBox = () => {
    if (this.state.editMode) {
      return null;
    }

    return (
      <input
        type="checkbox"
        value={this.props.todo.completed}
        onChange={this.onCompletedChange}
      />
    );
  };

  render() {
    return (
      <li>
        {this.renderText()}
        {this.renderCompletedCheckBox()}
      </li>
    );
  }
}
