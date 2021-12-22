import React from 'react';

import HeaderLuxBar from '../../Components/HeaderLuxBar';
import ContactMe from './components/ContactMe';
import ArrowDown from './components/ArrowDown';

import devIllustration from '../../images/illustrations/dev-illustration.svg';

import StyledHomePage from './styles/homePage';

function HomePage() {
  return (
    <StyledHomePage>
      <section id="Home-Page">
        <HeaderLuxBar />

        <main className="Main-Content">
          <section className="Contacte-Me-Container" data-aos="fade-right">
            <div className="summary-container">
              <ContactMe />
            </div>
          </section>
          <section
            className="illustration-dev-container"
            data-aos="fade-left"
          >
            <img
              className="illustration-dev"
              src={devIllustration}
              alt="dev-illustration"
            />
          </section>
        </main>

        <a href="#About-Me" data-aos="fade-up">
          <div
            className="arrow"
            id="About-Me"
          >
            <ArrowDown />
          </div>
        </a>
      </section>
    </StyledHomePage>
  );
}

export default HomePage;
