import React, { Component } from "react";

export class AddTodo extends Component {
  state = {
    title: ""
  };

  onSubmit = e => {
    e.preventDefault();
  };

  onChange = e => this.setState({ [e.target.name]: [e.target.value] });

  render() {
    return (
      <form className="form" style={formStyle} onSubmit={this.onSubmit}>
        <input
          className="input"
          type="text"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          className="button is-success"
          style={{ marginLeft: "1rem" }}
        />
      </form>
    );
  }
}

const formStyle = {
  display: "flex",
  alignItems: "center",
  margin: "1rem 0"
};

export default AddTodo;
