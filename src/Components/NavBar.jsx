/* eslint-disable react/jsx-no-bind */
import React, { useContext } from 'react';

import Switch from 'react-switch';

import { BsFillSunFill } from 'react-icons/bs';

import { MyContext } from '../Context/MyProvider';

// eslint-disable-next-line react/function-component-definition
function NavBar() {
  const { theme, setTheme } = useContext(MyContext);

  function changeTheme() {
    setTheme(!theme);
    localStorage.setItem('theme', !theme);
  }

  return (
    <nav className="Nav-Bar">
      <ul>
        <li>
          <Switch
            activeBoxShadow="none"
            checked={theme}
            checkedIcon={(
              <BsFillSunFill
                color="#fff"
                size="0.9em"
                className="Light-Theme-Icon"
              />
            )}
            className="Switch-Theme"
            handleDiameter={17}
            height={17}
            onChange={changeTheme}
            onColor="#888"
            width={45}
          />
        </li>
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
