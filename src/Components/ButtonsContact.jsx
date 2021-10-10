import React from 'react';
import { FaWhatsapp, FaLinkedin, FaGithub } from 'react-icons/fa';

function ButtonsContact() {
  return (
    <>
      <button type="button" className="Btn-Contact Btn-Whatsapp">
        <FaWhatsapp size="1.4em" />
        <span className="whats">WhatsApp</span>
      </button>
      <button type="button" className="Btn-Contact Btn-LinkedIn">
        <FaLinkedin size="1.4em" />
        <span className="whats">LinkedIn</span>
      </button>
      <button type="button" className="Btn-Contact Btn-GitHub">
        <FaGithub size="1.4em" />
        <span className="whats">GitHub</span>
      </button>
    </>
  );
}

export default ButtonsContact;
