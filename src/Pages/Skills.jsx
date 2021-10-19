import React from 'react';
import {
  FaHtml5, FaCss3Alt, FaReact, FaJs,
} from 'react-icons/fa';
import { SiRedux, SiJest, SiVisualstudio } from 'react-icons/si';
import './skills.css';
import AbstractSkills from '../Components/AbstractSkills';
import SkillCard from '../Components/SkillCard';

function Skills() {
  return (
    <section id="Skills">

      <div className="Skills-Container">
        <AbstractSkills />

        <section className="Icons-Skills">
          <SkillCard skillIcon={<FaHtml5 size="3.5em" />} textSkill="HTML5" />
          <SkillCard skillIcon={<FaCss3Alt size="3.5em" />} textSkill="CSS3" />
          <SkillCard skillIcon={<FaReact size="3.5em" />} textSkill="React" />
          <SkillCard skillIcon={<FaJs size="3.5em" />} textSkill="JS" />
          <SkillCard skillIcon={<SiRedux size="3.5em" />} textSkill="Redux" />
          <SkillCard skillIcon={<SiJest size="3.5em" />} textSkill="Jest" />
          <SkillCard skillIcon={<SiVisualstudio size="3.5em" />} textSkill="VSCode" />
        </section>
      </div>

    </section>
  );
}

export default Skills;
