import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />{" "}
          {title}
          <svg
            viewBox="0 0 40 40"
            style={svgStyle}
            className="button is-small is-danger is-rounded"
            onClick={this.props.delTodo.bind(this, id)}
          >
            <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
          </svg>
        </p>
      </div>
    );
  }
}

const svgStyle = {
  float: "right",
  width: "60px",
  stroke: "black",
  strokeWidth: "10"
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired
  // markComplete: PropTypes.func.isRequired,
  // delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
