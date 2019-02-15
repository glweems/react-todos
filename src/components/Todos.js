import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

class Todos extends Component {
  delTodo = id => {
    console.log(id);
  };
  render() {
    const todos = this.props.todos;
    return todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={this.props.markComplete}
        delTodo={this.delTodo}
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
