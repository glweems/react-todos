import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../index.scss";

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar" role="navigation" style={navStyle}>
        <Link to="/" className="navbar-item">
          Home
        </Link>
        <Link to="/About" className="navbar-item">
          About
        </Link>
      </nav>
    );
  }
}

const navStyle = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "end",
  alignItems: "center"
};

export default Navbar;
