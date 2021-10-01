import React, { Component } from 'react';
import NavBar from './NavBar';

class Header extends Component {
  render() {
    return (
      <header className="Header">
        <div className="Logo-Matheus-Laurindo">
          Logo
        </div>
        <NavBar />
      </header>
    );
  }
}

export default Header;
