/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

// eslint-disable-next-line react/function-component-definition
export default function HeaderLuxBar() {
  return (
    <header id="luxbar" classNameName="luxbar-fixed">
      <input type="checkbox" className="luxbar-checkbox" id="luxbar-checkbox" />
      <div className="luxbar-menu luxbar-menu-right luxbar-menu-dark">
        <ul className="luxbar-navigation">
          <li className="luxbar-header">
            <a href="#" className="luxbar-brand">
              LUXBAR
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
            <a href="#">
              Sobre Mim
            </a>
          </li>

          <li className="luxbar-item">
            <a href="#">
              Projetos
            </a>
          </li>

          <li className="luxbar-item">
            <a href="#">
              Serviços
            </a>
          </li>

          <li className="luxbar-item">
            <a href="#">
              Habilidades
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
