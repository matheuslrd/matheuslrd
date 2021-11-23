import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaLinkedin,
} from 'react-icons/fa';

import AbstractAboutMe from '../Components/AbstractAboutMe';

import StyledAboutMe from '../Styles/aboutMe';

// eslint-disable-next-line react/function-component-definition
function AboutMe() {
  return (
    <StyledAboutMe>
      <section id="About-Me-Page">

        <section className="Avatar-Matheus">
          <div className="Icons">
            <FaHtml5 size="4em" />
            <FaJsSquare size="4em" />
          </div>
          <img
            className="Avatar-Matheus-Img"
            src="https://i.ibb.co/7NLrhTX/matheus-img.jpg"
            alt="Minha Figura"
          />
          <div className="Icons">
            <FaCss3Alt size="4em" />
            <FaReact size="4em" />
          </div>
        </section>

        <article className="About-Me-Container">
          <div className="About-Me-Center">
            <section className="Abstract-About-Me">
              <AbstractAboutMe />
            </section>

            <section className="Buttons-About-Me">
              <a
                href="https://www.linkedin.com/in/matheus-szarblewski/"
                target="_blank"
                rel="noreferrer"
              >
                <button type="button" className="About-Me-Btn-LinkedIn Btn-Contact">
                  <FaLinkedin size="1.4em" />
                  <span className="whats">LinkedIn</span>
                </button>
              </a>

            </section>
          </div>
        </article>

      </section>
    </StyledAboutMe>
  );
}

export default AboutMe;
