import React from 'react';

import PropTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { SiSitepoint } from 'react-icons/si';

import Button from '@mui/material/Button';

function ProjectCard(props) {
  const {
    description, linkWebSite, linkGitHub, title,
  } = props;

  return (
    <div className="Project">
      <h3 className="Title-Project">
        { title }
      </h3>
      <p className="Abstract-Project">
        { description }
      </p>
      <div className="Buttons-Project">
        {/* <a
          className="link-btn-project"
          href={linkWebSite}
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="Btn-Project-Links">
            <SiSitepoint />
            <span className="Btn-Project-Title">WebSite</span>
          </button>
        </a>
        <a
          className="link-btn-project"
          href={linkGitHub}
          target="_blank"
          rel="noreferrer"
        >
          <button type="button" className="Btn-Project-Links">
            <FaGithub />
            <span className="Btn-Project-Title"> GitHub </span>
          </button>
        </a> */}
        <Button
          className="btn-contact"
          href={linkWebSite}
          target="_blank"
          startIcon={<SiSitepoint />}
        >
          WebSite
        </Button>

        <Button
          className="btn-contact"
          href={linkGitHub}
          target="_blank"
          startIcon={<FaGithub />}
        >
          GitHub
        </Button>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  description: PropTypes.string.isRequired,
  linkGitHub: PropTypes.string,
  linkWebSite: PropTypes.string,
  title: PropTypes.string.isRequired,
};

ProjectCard.defaultProps = {
  linkGitHub: '',
  linkWebSite: '',
};

export default ProjectCard;
