import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <section className={headerClasses()}>
        <div className="hero-body">
          <h1 className="title">Todos</h1>
        </div>
      </section>
    );
  }
}

const headerClasses = () => ["hero is-primary"];

export default Header;
