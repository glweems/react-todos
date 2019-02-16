import React, { Component } from "react";
import PropTypes from "prop-types";
import Navbar from "./Navbar";
export class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <section className={headerClasses() + " " + this.props.background}>
          <div className="hero-body">
            <h1 className="title">{this.props.title}</h1>
          </div>
        </section>
        <Navbar />
      </React.Fragment>
    );
  }
}

const headerClasses = () => ["hero container"];

// PropTypes
Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
