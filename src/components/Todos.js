import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  render() {
    const todos = this.props.todos;
    return todos.map((todo, index) => (
      <TodoItem
        key={index}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
      />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
  // markComplete: PropTypes.func.isRequired,
  // delTodo: PropTypes.func.isRequired,
};

export default Todos;
