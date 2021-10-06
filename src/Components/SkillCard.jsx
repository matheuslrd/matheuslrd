import React from 'react';
import PropsTypes from 'prop-types';

function SkillCard({ skillIcon }) {
  return (
    <div className="Skill-Card">
      { skillIcon }
    </div>
  );
}

SkillCard.propTypes = {
  skillIcon: PropsTypes.string.isRequired,
};

export default SkillCard;
