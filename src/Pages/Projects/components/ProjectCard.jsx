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
        <Button
          className="btn-contact"
          href={linkWebSite}
          target="_blank"
          startIcon={<SiSitepoint size="0.8em" />}
        >
          WebSite
        </Button>

        <Button
          className="btn-contact"
          href={linkGitHub}
          target="_blank"
          startIcon={<FaGithub size="0.8em" />}
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
