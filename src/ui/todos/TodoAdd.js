import * as React from "react";


export default class TodoAdd extends React.Component {
  onSave = () => {
    this.props.onSave(this._inputEl.value);
    this._inputEl.value = "";
  };

  render() {
    return (
      <div className="add-todo">
        <input
          type="text"
          ref={(el) => this._inputEl = el}
        />
        <button
          onClick={this.onSave}
        >
          Add
        </button>
      </div>
    );
  }
}
