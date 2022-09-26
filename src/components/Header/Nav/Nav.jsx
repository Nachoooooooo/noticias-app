import React, { Component } from "react";
import { Link } from "react-router-dom";


class Nav extends Component {
  render() {
    return <nav>
      <div id="menu">
        <Link to="/">HOME</Link>
        <Link to="/listnews">LIST</Link>
        <Link to="/form">FORM</Link>
      </div>
    </nav>;
  }
}

export default Nav;
