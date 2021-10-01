import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <nav className="Nav-Bar">
        <ul>
          <li>
            <a href="#About-Me"> Sobre Mim </a>
          </li>
          <li>
            <a href="#Projects"> Projetos </a>
          </li>
          <li>
            <a href="#Services"> Serviços </a>
          </li>
          <li>
            <a href="#Skills"> Habilidades </a>
          </li>
        </ul>
      </nav>
    );
  }
}
    
export default NavBar;
    