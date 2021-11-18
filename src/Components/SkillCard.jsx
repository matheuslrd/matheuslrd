import React from 'react';
import PropsTypes from 'prop-types';

// eslint-disable-next-line react/function-component-definition
function SkillCard({ skillIcon, textSkill }) {
  return (
    <div
      className="Skill-Card"
    >
      { skillIcon }
      <p className="Text-Skill">
        { textSkill }
      </p>
    </div>
  );
}

SkillCard.propTypes = {
  skillIcon: PropsTypes.string.isRequired,
  textSkill: PropsTypes.string.isRequired,
};

export default SkillCard;
