import React, { Component } from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiSitepoint } from 'react-icons/si';

class ProjectCard extends Component {
  render() {
    const { titleProject, abstractProject } = this.props;
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
}

export default ProjectCard;
