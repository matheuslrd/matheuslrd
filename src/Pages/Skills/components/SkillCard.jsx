import React from 'react';
import PropsTypes from 'prop-types';

function SkillCard({ skillIcon, textSkill }) {
  return (
    <div
      className="Skill-Card"
      data-aos="zoom-in"
      data-aos-delay="100"
    >
      { skillIcon }
      <p className="Text-Skill">
        { textSkill }
      </p>
    </div>
  );
}

SkillCard.propTypes = {
  skillIcon: PropsTypes.node.isRequired,
  textSkill: PropsTypes.string.isRequired,
};

export default SkillCard;
