import React from 'react';

import ProjectCard from '../Components/ProjectCard';
import projects from '../data';

import '../Styles/projects.css';

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
        >
          Repositórios no GitHub
        </a>
      </div>
    </section>
  );
}

export default Projects;
