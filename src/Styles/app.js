import styled from 'styled-components';

const App = styled.div`
  .App {
    background: ${(props) => props.theme.color.primary};
    transition: 0.25s all ease-out;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .Header {
      display: none;
    }

    .Nav-Bar {
      display: none;
    }

    .Main-Content {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      height: 78%;
      justify-content: space-evenly;
    }

    .Main-Content .Contacte-Me-Container {
      height: 30%;
      text-align: center;
      width: 80%;
    }

    .Blob-svg {
      height: 50%!important;
      width: 100%!important;
    }

    .Main-Content .Blob {
      display: none;
      height: 100%;
      width: 100%;
    }

    .Container-Buttons-Contact {
      display: flex;
      flex-flow: column nowrap;
      justify-content: space-around;
      margin-left: 2em;
      height: 30%;
      width: 80%;
    }

    .Btn-Contact {
      height: 3em;
    }

    /*About Me Page*/
    #About-Me {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
    }

    .Avatar-Matheus {
      padding: 0 0 2em 0;
      width: 100%;
    }

    .Avatar-Matheus-Img {
      width: 10em;
    }

    .Icons {
      display: none;
    }

    .About-Me-Container {
      width: 85%;
    }

    .About-Me-Center {
      width: 100%;
    }

    .About-Me-Btn-LinkedIn {
      width: 100%;
    }

    /*Projects Page*/
    .Projects-Container {
      display: flex;
      flex-flow: row wrap;
      width: 98%;
    }

    .Title-Projects {
      padding-bottom: 0.5em;
    }

    .Project {
      font-size: 0.7em;
      height: 17em;
      padding: 1.3em;
      width: 43%;
    }

    .Buttons-Project {
      display: flex;
      flex-flow: column nowrap;
    }

    .Abstract-Project {
      font-size: 0.95em;
      height: 45%;
    }

    .Buttons-Project {
      height: 35%;
    }

    .link-btn-project {
      width: 100%;
    }

    .Btn-Project-Links {
      font-size: 0.9em;
      height: 2.5em;
    }

    /*Services Page*/
    .Services-Container-Center {
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      width: 98%;
    }

    .Service {
      font-size: 0.8em;
      height: 19em;
      width: 40%;
    }

    .Icon-Service {
      padding: 1.5em;
    }

    .Text-Service {
      line-height: 1.1em;
    }

    /*Skills Page*/
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

    /* Footer */
    .Footer-Icons-Container {
      width: 70%;
    }

    .Icons-Footer {
      margin: 0;
      width: 70%;
    }
}

`;

export default App;
