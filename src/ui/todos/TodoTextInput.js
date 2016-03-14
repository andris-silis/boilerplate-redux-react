import * as React from "react";


export default class TodoTextInput extends React.Component {
  onInputMount = (el) => {
    if (!el) {
      return;
    }

    this._inputEl = el;
    el.focus();
  };

  onSave = () => {
    this.props.onEditDone(this._inputEl.value);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          defaultValue={this.props.todo.text}
          ref={this.onInputMount}
        />
        <button
          onClick={this.onSave}
        >
          Save
        </button>
      </div>
    );
  }
}
