import React, { Component } from 'react';
import ProjectCard from '../Components/ProjectCard';
import './projects.css';

class Projects extends Component {
  render() {
    return (
      <section id="Projects">
        <h2 className="Title-Projects"> Projetos </h2>
        <div className="Projects-Container">
          <ProjectCard
            titleProject="Title Project"
            abstractProject="Aqui estará escrito sobre o que é o projeto e qual sua finalidade."
          />
          <ProjectCard
            titleProject="Title Project"
            abstractProject="Aqui estará escrito sobre o que é o projeto e qual sua finalidade."
          />
          <ProjectCard
            titleProject="Title Project"
            abstractProject="Aqui estará escrito sobre o que é o projeto e qual sua finalidade."
          />
          <ProjectCard
            titleProject="Title Project"
            abstractProject="Aqui estará escrito sobre o que é o projeto e qual sua finalidade."
          />
          <ProjectCard
            titleProject="Title Project"
            abstractProject="Aqui estará escrito sobre o que é o projeto e qual sua finalidade."
          />
          <ProjectCard
            titleProject="Title Project"
            abstractProject="Aqui estará escrito sobre o que é o projeto e qual sua finalidade."
          />
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
}

export default Projects;
