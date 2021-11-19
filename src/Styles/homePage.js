import styled from 'styled-components';

const HomePage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap');

  #Home-Page {
    height: 100vh;
    padding-top: 8%;
    width: 100%;
  }

  .Header {
    align-items: center;
    background: ${(props) => props.theme.color.secundary};
    box-shadow: 0px 1px 10px #1a1a1a;
    display: flex;
    justify-content: space-around;
    padding: 1.3em;
    position: fixed;
    transition: 0.2s all ease-out;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .Title-Name {
    font-family: 'Merienda', cursive;
    font-size: 1.2em;
  }

  .Nav-Bar {
    width: 39%;
  }

  .Nav-Bar ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    width: 100%;
  }

  .Light-Theme-Icon {
    margin-left: 0.3em;
    margin-top: 0.1em;
  }

  .Nav-Bar ul a {
    font-weight: 500;
    color: ${(props) => props.theme.color.text};
    text-decoration: none;
    transition: all 0.1s ease-out;
  }

  .Nav-Bar ul a:hover {
    color: #5d2de2;
  }

  /* CONTEÚDO PRINCIPAL */

  .Main-Content {
    display: flex;
    justify-content: space-around;
    height: 75%;
    width: 100%;
  }

  .Main-Content .Contacte-Me-Container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 55%;
  }

  .Introduction {
    font-size: 1.5em;
  }

  .Student-Web {
    font-weight: 500;
  }

  .Main-Content .Blob-svg {
    display: flex;
    align-items: center;
    height: 100%;
    width: 45%;
  }

  .Main-Content .Blob {
    position: relative;
    z-index: 0;
    height: 100%;
    display: flex;
    width: 100%;
  }

  .Container-Buttons-Contact {
    margin-top: 0.5em;
    margin-left: 8em;
    position: absolute;
    width: 15%;
  }

  .Btn-Contact {
    background: #e3d42d;
    font-size: 1em;
    color: #202024;
    cursor: pointer;
    font-weight: 600;
    outline: none;
    border: none;
    border-radius: 0.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1em;
    height: 2.5em;
    width: 100%;
  }

  .Btn-Contact:hover {
    background: #ffef3c;
  }

  .Btn-Whatsapp {
    background: #dbcd33;
  }

  .Btn-LinkedIn {
    background: #e3d42d;
  }

  .Btn-GitHub {
    background: #dbcd33;
  }

  .whats {
    margin-left: 0.3em;
  }

  .Scrool-Text {
    margin-top: -1em;
    margin-bottom: 0.5em;
  }

  .seta {
    color: #5d2de2;
    height: 5.5em;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    width: 100%;
  }

  .Mouse-Seta {
    color: #5d2de2;
  }
`;

export default HomePage;