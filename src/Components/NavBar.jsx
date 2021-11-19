/* eslint-disable react/jsx-no-bind */
import React, { useContext, useState } from 'react';

import Switch from 'react-switch';

import { MyContext } from '../Context/MyProvider';

// eslint-disable-next-line react/function-component-definition
function NavBar() {
  const { theme, setTheme } = useContext(MyContext);

  const [themeSwitch, setThemeSwitch] = useState(theme);

  function changeTheme() {
    setTheme(!theme);
    setThemeSwitch(!theme);
  }

  return (
    <nav className="Nav-Bar">
      <ul>
        <Switch onChange={changeTheme} checked={themeSwitch} />
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
