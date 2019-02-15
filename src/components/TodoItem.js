import React, { Component } from "react";
import PropTypes from "prop-types";
import "../index.scss";
class TodoItem extends Component {
  getStyle = () => {
    return {
      width: "100%",
      display: "flex",
      flexDirection: "row",
      justifyContents: "center",
      fontStyle: this.props.todo.completed ? "italic" : "normal",
      color: this.props.todo.completed ? "grey" : "black",
      textDecoration: this.props.todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      <li className="todo-item" style={this.getStyle()}>
        <div className="checkbox">
          <input
            type="checkbox"
            onChange={this.props.markComplete.bind(this, id)}
          />
          <label>{title}</label>
        </div>
        <svg
          viewBox="0 0 40 40"
          onClick={this.props.delTodo.bind(this, id)}
          style={svgStyle}
        >
          <path d="M 10,10 L 30,30 M 30,10 L 10,30" />
        </svg>
      </li>
    );
  }
}

const svgStyle = {
  width: "1.5rem",
  stroke: "hsl(348, 100%, 61%)",
  strokeWidth: "7"
};

// PropTypes
TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

export default TodoItem;
