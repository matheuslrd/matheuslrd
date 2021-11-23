import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

// eslint-disable-next-line react/function-component-definition
function ButtonsContact() {
  return (
    <>
      <a
        href="https://wa.me/+5551984108411?text=Ol%C3%A1,%20Matheus"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="Btn-Contact Btn-Whatsapp">
          <FaWhatsapp size="1.4em" />
          <span className="whats">WhatsApp</span>
        </button>
      </a>

      <a
        href="https://www.linkedin.com/in/matheus-szarblewski/"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="Btn-Contact Btn-LinkedIn">
          <FaLinkedin size="1.4em" />
          <span className="whats">LinkedIn</span>
        </button>
      </a>

      <a
        href="https://github.com/matheuslrd"
        target="_blank"
        rel="noreferrer"
      >
        <button type="button" className="Btn-Contact Btn-GitHub">
          <FaGithub size="1.4em" />
          <span className="whats">GitHub</span>
        </button>
      </a>

    </>
  );
}

export default ButtonsContact;
