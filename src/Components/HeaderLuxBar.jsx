/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';

import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs';

import Switch from 'react-switch';

import { MyContext } from '../Context/MyProvider';

// eslint-disable-next-line react/function-component-definition
export default function HeaderLuxBar() {
  const { theme, setTheme } = useContext(MyContext);

  function changeTheme() {
    setTheme(!theme);
    localStorage.setItem('theme', !theme);
  }

  return (
    <header id="luxbar" classNameName="luxbar-fixed Header">
      <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
      <nav className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
        <ul className="luxbar-navigation">

          <li className="luxbar-header">
            <a href="#" className="luxbar-brand Title-Name">
              Matheus Laurindo
            </a>
            <label
              className="luxbar-hamburger luxbar-hamburger-spin"
              id="luxbar-hamburger"
              htmlFor="luxbar-checkbox"
            >
              {' '}
              <span />
              {' '}

            </label>
          </li>
          <li className="luxbar-item">
            <Switch
              activeBoxShadow="none"
              checked={theme}
              uncheckedIcon={(
                <BsFillSunFill
                  color="#fff"
                  size="0.9em"
                  className="Light-Theme-Icon"
                />
              )}
              checkedIcon={(
                <BsFillMoonFill
                  color="#fff"
                  size="0.8em"
                  className="Light-Theme-Icon"
                />
              )}
              className="Switch-Theme"
              handleDiameter={17}
              height={17}
              // eslint-disable-next-line react/jsx-no-bind
              onChange={changeTheme}
              onColor="#888"
              width={45}
            />
          </li>
          <li className="luxbar-item">
            <a href="#About-Me">
              Sobre Mim
            </a>
          </li>

          <li className="luxbar-item">
            <a href="#Projects">
              Projetos
            </a>
          </li>

          <li className="luxbar-item">
            <a href="#Services">
              Serviços
            </a>
          </li>

          <li className="luxbar-item">
            <a href="#Skills">
              Habilidades
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
