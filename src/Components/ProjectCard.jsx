import React from 'react';
import PropsTypes from 'prop-types';
import { FaGithub } from 'react-icons/fa';
import { SiSitepoint } from 'react-icons/si';

function ProjectCard({ titleProject, abstractProject }) {
  return (
    <>
      <div className="Project">
        <h3 className="Title-Project">
          { titleProject }
        </h3>
        <p className="Abstract-Project">
          { abstractProject }
        </p>
        <div className="Buttons-Project">
          <button type="button" className="Btn-Project-Links">
            <SiSitepoint />
            <span className="whats">WebSite</span>
          </button>
          <button type="button" className="Btn-Project-Links">
            <FaGithub />
            <span className="whats"> GitHub </span>
          </button>
        </div>
      </div>
    </>
  );
}

ProjectCard.propTypes = {
  titleProject: PropsTypes.string.isRequired,
  abstractProject: PropsTypes.string.isRequired,
};

export default ProjectCard;
