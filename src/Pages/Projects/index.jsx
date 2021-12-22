import React from 'react';

import ProjectCard from './components/ProjectCard';
import projects from '../../data';

import StyledProjects from './styles/projects';

function Projects() {
  function renderProjects() {
    return (
      projects.map(({
        title, description, linkWebSite, linkGitHub, id,
      }) => (
        <ProjectCard
          description={description}
          dataAos="zoom-in"
          key={id}
          title={title}
          linkWebSite={linkWebSite}
          linkGitHub={linkGitHub}
        />
      ))
    );
  }
  return (
    <StyledProjects>
      <section id="Projects">
        <h2
          className="Title-Projects"
          data-aos="zoom-in"
          data-aos-delay="50"
        >
          Projetos
        </h2>
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
            data-aos="zoom-in"
            data-aos-delay="10"
          >
            Repositórios no GitHub
          </a>
        </div>
      </section>
    </StyledProjects>
  );
}

export default Projects;
