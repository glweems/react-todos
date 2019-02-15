import React, { Component } from "react";
import Todos from "./components/Todos";
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
        completed: true
      }
    ]
  };
  render() {
    console.log(this.state.todos);
    return (
      <div className="App">
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
