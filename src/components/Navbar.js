import React, { Component } from 'react';
import "../Css/Navbar.css";

class Navbar extends Component {

  render() {
    return (
      <nav className="nav">
        <div className="title"><h2>Quantumvis</h2></div>
        <div className="group-title"><h2>persuadeam</h2></div>
        <div className="logout"><h2>Logout</h2></div>
      </nav>
    );
  }
}

export default Navbar;
