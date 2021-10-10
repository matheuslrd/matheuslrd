import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { BiUpArrowAlt } from 'react-icons/bi';
import './footer.css';

function Footer() {
  return (
    <footer className="Footer">

      <div className="Footer-Icons-Container">
        <div className="Icons-Footer">
          <a
            href="https://www.linkedin.com/in/matheus-szarblewski/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="Icon-Footer" size="1.7em" />
          </a>
          <a
            href="https://github.com/matheuslrd"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className="Icon-Footer" size="1.7em" />
          </a>
          <a
            href="https://www.instagram.com/matheuslrd_/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className="Icon-Footer" size="1.7em" />
          </a>
        </div>
      </div>

      <div className="Icon-Back-To-Home">
        <a href="#Home-Page">
          <BiUpArrowAlt className="Back-To-Home" size="2.5em" />
        </a>
      </div>

    </footer>
  );
}

export default Footer;
