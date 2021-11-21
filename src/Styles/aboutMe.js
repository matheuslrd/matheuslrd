import styled from 'styled-components';

const AboutMe = styled.div`
  #About-Me {
    background: ${(props) => props.theme.color.secundary};
    display: flex;
    flex-flow: row nowrap;
    padding: 5em 0;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .Avatar-Matheus {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: #5d2de2;
    width: 50%;
  }

  .Avatar-Matheus-Img {
    border: 3px solid #5d2de2;
    border-radius: 50%;
    width: 40%;
  }

  .Icons {
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-evenly;
    width: 100%;
  }

  .About-Me-Container {
    display: flex;
    align-items: center;
    width: 50%;
  }

  .About-Me-Center {
    width: 85%;
  }

  .Abstract-About-Me {
    text-align: start;
  }

  .Abstract-About-Me h2 {
    font-weight: 500;
  }

  .Abstract-About-Me p {
    font-weight: 400;
    line-height: 1.5em;
  }

  .About-Me-Btn-LinkedIn {
    margin: 3em 0;
    color: #fdfdfd;
    background: #5d2de2;
    transition: 0.1s all ease-out;
    height: 3em;
    width: 30%;
  }

  .About-Me-Btn-LinkedIn:hover {
    background: #351980;
  }
`;

export default AboutMe;
