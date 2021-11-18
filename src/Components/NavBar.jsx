import React, { useContext } from 'react';

import { MyContext } from '../Context/MyProvider';

// eslint-disable-next-line react/function-component-definition
function NavBar() {
  const { theme, setTheme } = useContext(MyContext);
  function changeTheme() {
    setTheme(!theme);
  }

  return (
    <nav className="Nav-Bar">
      <ul>
        <input type="checkbox" onChange={changeTheme} />
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

export default NavBar;
