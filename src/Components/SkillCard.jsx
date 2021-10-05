import React, { Component } from 'react';

class SkillCard extends Component {
  render() {
    const { skillIcon } = this.props;
    return (
      <div className="Skill-Card">
        { skillIcon }
      </div>
    );
  }
}

export default SkillCard;
