import React from "react";
import Header from "../components/layout/Header";

function About() {
  return (
    <React.Fragment>
      <Header title="About" background="is-primary" />
      <div className="container">
        <p>This is a todo list application using React, React-Router</p>
      </div>
    </React.Fragment>
  );
}

export default About;
