import React from 'react';

import { BsMouse } from 'react-icons/bs';

import HeaderLuxBar from '../../Components/HeaderLuxBar';
import ContactMe from './components/ContactMe';

import devIllustration from '../../images/illustrations/dev-illustration.svg';

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
          <section className="illustration-dev-container">
            <img
              className="illustration-dev"
              src={devIllustration}
              alt="dev-illustration"
            />
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
