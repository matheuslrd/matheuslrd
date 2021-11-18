import React from 'react';

import NavBar from './NavBar';

// eslint-disable-next-line react/function-component-definition
function Header() {
  return (
    <header className="Header">
      <div className="Logo-Matheus-Laurindo">
        <h1 className="Title-Name">
          Matheus Laurindo
        </h1>
      </div>
      <NavBar />
    </header>
  );
}

export default Header;
