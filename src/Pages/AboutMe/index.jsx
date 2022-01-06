import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaLinkedin,
} from 'react-icons/fa';
import Button from '@mui/material/Button';

import AbstractAboutMe from './components/AbstractAboutMe';

import StyledAboutMe from './styles/aboutMe';

function AboutMe() {
  return (
    <StyledAboutMe>
      <section id="About-Me-Page">

        <section
          className="Avatar-Matheus"
          data-aos="zoom-in"
          data-aos-delay="0"
        >
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

        <article className="About-Me-Container" data-aos="zoom-in" data-aos-delay="0">
          <div className="About-Me-Center">
            <section className="Abstract-About-Me">
              <AbstractAboutMe />
            </section>

            <section className="Buttons-About-Me">
              <Button
                className="btn-contact"
                href="https://www.linkedin.com/in/matheuslrd/"
                target="_blank"
                startIcon={<FaLinkedin size="1.2em" />}
              >
                Linkedin
              </Button>
            </section>
          </div>
        </article>

      </section>
    </StyledAboutMe>
  );
}

export default AboutMe;
