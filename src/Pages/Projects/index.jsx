import React from 'react';

import ProjectCard from './components/ProjectCard';
import projects from '../../data';

import StyledProjects from './styles/projects';

// eslint-disable-next-line react/function-component-definition
function Projects() {
  function renderProjects() {
    return (
      projects.map(({
        title, description, linkWebSite, linkGitHub, id,
      }) => (
        <ProjectCard
          key={id}
          title={title}
          description={description}
          linkWebSite={linkWebSite}
          linkGitHub={linkGitHub}
        />
      ))
    );
  }
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
