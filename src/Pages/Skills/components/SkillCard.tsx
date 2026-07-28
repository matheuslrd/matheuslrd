import React from 'react';

type Props = {
  skillIcon: React.ReactNode;
  textSkill: string;
};

function SkillCard({ skillIcon, textSkill }: Props) {
  return (
    <div className="Skill-Card">
      {skillIcon}
      <p className="Text-Skill">{textSkill}</p>
    </div>
  );
}

export default SkillCard;
