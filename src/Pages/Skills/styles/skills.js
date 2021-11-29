import styled from 'styled-components';

const Skills = styled.div`
  #Skills-Page {
    align-items: center;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    height: 88vh;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .Skills-Container {
    align-items: center;
    display: flex;
    flex-flow: row nowrap;
    width: 80%;
  }

  .Abstract-Skills {
    line-height: 1.5em;
    padding-right: 4em;
    width: 50%;
  }

  .Skills-Title {
    margin-bottom: 1em;
    font-size: 1.8em;
    font-weight: 500;
  }

  .Abstract-Skills-Text {
    font-weight: 500;
  }

  .Icons-Skills {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 50%;
  }

  .Skill-Card {
    border: 4px solid ${(props) => props.theme.color.secundary};
    border-radius: 0.3em;
    box-shadow: 0 0 12px rgba(0, 0, 0, 0.20);
    background: ${(props) => props.theme.color.secundary};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #5429cf;
    padding: 1.4em 0.9em;
    margin: 0.5em;
    height: 9em;
    width: 20%;
  }

  .Text-Skill {
    display: none;
    margin-top: 0.5em;
    font-weight: 500;
  }

  .Skill-Card:hover {
    border-bottom: 4px solid #5429cf;
  }

  @media screen and (max-width: 768px) {
    .Skills-Container {
      display: flex;
      flex-flow: column nowrap;
      font-size: 0.95em;
      padding: 1em;
      width: 98%;
    }

    .Abstract-Skills {
      padding: 0;
      width: 100%;
    }

    .Skills-Title {
      text-align: center;
      margin-bottom: 0.8em;
    }

    .Icons-Skills {
      margin: 3em;
      width: 100%;
    }

    .Skill-Card {
      font-size: 0.9em;
      height: 7em;
      width: 20%;
    }
  }
`;

export default Skills;
