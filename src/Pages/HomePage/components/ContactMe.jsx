import React from 'react';
import Button from '@mui/material/Button';

import { FaWhatsapp, FaGithub } from 'react-icons/fa';

function ContactMe() {
  return (
    <>
      <div className="summary-about-me">
        Olá, eu sou
        <br />
        <h2>Matheus Laurindo</h2>
        <span className="Student-Web">
          Estudante de Desenvolvimento Web.
        </span>
      </div>
      <div className="buttons-contact">

        <Button
          className="btn-contact"
          href="https://wa.me/+5551984108411?text=Ol%C3%A1,%20Matheus"
          target="_blank"
          startIcon={<FaWhatsapp size="1.2em" />}
          variant="contained"
        >
          whatsapp
        </Button>

        <Button
          className="btn-contact btn-github"
          href="https://github.com/matheuslrd"
          target="_blank"
          startIcon={<FaGithub size="1.2em" />}
          variant="contained"
        >
          GitHub
        </Button>
      </div>
    </>
  );
}

export default ContactMe;
