import React from 'react';

import { BsMouse } from 'react-icons/bs';

import HeaderLuxBar from '../../Components/HeaderLuxBar';
import ContactMe from './components/ContactMe';
import ButtonsContact from './components/ButtonsContact';

import StyledHomePage from './styles/homePage';

function HomePage() {
  return (
    <StyledHomePage>
      <section id="Home-Page">
        <HeaderLuxBar />

        <main className="Main-Content">
          <section className="Contacte-Me-Container">
            <ContactMe />
          </section>
          <section className="Blob-svg">
            <div className="Blob">
              <svg className="blob-img" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path fill="#5429cf" d="M21.5,-27.9C33.4,-25.8,52.5,-29.2,62.6,-23.7C72.6,-18.2,73.6,-3.7,70.3,9.2C67,22,59.2,33.4,49.2,39.7C39.2,46.1,26.8,47.6,15.3,49.8C3.9,52.1,-6.6,55.1,-13.6,51C-20.7,46.8,-24.2,35.4,-37.1,28C-50,20.6,-72.1,17.1,-75.7,9.3C-79.2,1.6,-64,-10.4,-57.1,-26.3C-50.2,-42.2,-51.4,-62.1,-43.3,-66C-35.1,-69.9,-17.6,-57.7,-6.4,-47.7C4.8,-37.8,9.6,-30.1,21.5,-27.9Z" transform="translate(100 100)" />
              </svg>
            </div>
            <div className="Container-Buttons-Contact">
              <ButtonsContact />
            </div>
          </section>
        </main>

        <section className="seta">
          <p className="Scrool-Text">
            ROLE PARA BAIXO
          </p>
          <a href="#About-Me" className="Mouse-Seta">
            <BsMouse size="3em" id="About-Me" />
          </a>
        </section>
      </section>
    </StyledHomePage>
  );
}

export default HomePage;
