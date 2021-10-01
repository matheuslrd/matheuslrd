import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="Nav-Bar">
        <ul>
          <li>
            <a href="#About-Me"> About Me </a>
          </li>
          <li>
            <a href="#Projects"> Projects </a>
          </li>
          <li>
            <a href="#Services"> Services </a>
          </li>
          <li>
            <a href="#Skills"> Skills </a>
          </li>
        </ul>
      </nav>
    );
  }
}
    
export default NavBar;
    