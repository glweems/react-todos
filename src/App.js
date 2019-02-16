import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./pages/AboutPage.js";
import uuid from "uuid";
import "bulma";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "Get Shit Done",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "Get More Shit Done",
        completed: false
      },
      {
        id: uuid.v4(),
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

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    const todos = this.state.todos;
    return (
      <Router>
        <div className="app">
          <Route
            path="/"
            exact
            render={props => (
              <React.Fragment>
                <Header title="Todos" background="is-link" />
                <AddTodo addTodo={this.addTodo} />
                <div className="container">
                  <ul>
                    <Todos
                      todos={todos}
                      markComplete={this.markComplete}
                      delTodo={this.delTodo}
                    />
                  </ul>
                </div>
              </React.Fragment>
            )}
          />
          <Route path="/about" component={About} exact />
        </div>
      </Router>
    );
  }
}

export default App;
