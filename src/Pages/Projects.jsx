import React from 'react';

import ProjectCard from '../Components/ProjectCard';
import projects from '../data';

import StyledProjects from '../Styles/projects';

// eslint-disable-next-line react/function-component-definition
function Projects() {
  const renderProjects = () => (
    projects.map(({
      title, description, linkWebSite, linkGitHub,
    }) => (
      <ProjectCard
        title={title}
        description={description}
        linkWebSite={linkWebSite}
        linkGitHub={linkGitHub}
      />
    ))
  );
  return (
    <StyledProjects>
      <section id="Projects">
        <h2 className="Title-Projects"> Projetos </h2>
        <div className="Projects-Container">
          { renderProjects() }
        </div>
        <div className="Repositories-On-GitHub">
          <a
            href="https://github.com/matheuslrd?tab=repositories"
            className="Link-Repositories-On-GitHub"
            target="_blank"
            rel="noreferrer"
            id="Services"
          >
            Repositórios no GitHub
          </a>
        </div>
      </section>
    </StyledProjects>
  );
}

export default Projects;
