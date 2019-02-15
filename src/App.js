import React, { Component } from "react";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import "bulma";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Get Shit Done",
        completed: false
      },
      {
        id: 2,
        title: "Get More Shit Done",
        completed: false
      },
      {
        id: 3,
        title: "Finish Todo App",
        completed: false
      }
    ]
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };
  render() {
    const todos = this.state.todos;
    return (
      <div className="App">
        <Header />
        <AddTodo />
        <Todos
          todos={todos}
          markComplete={this.markComplete}
          delTodo={this.delTodo}
        />
      </div>
    );
  }
}

export default App;
