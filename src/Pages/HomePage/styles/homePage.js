import styled from 'styled-components';

const HomePage = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Merienda:wght@400;700&display=swap');

  #Home-Page {
    height: 100vh;
    padding-top: 8%;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  #luxbar {
    background: ${(props) => props.theme.color.secundary};
    -webkit-box-shadow: 0px -6px 10px 8px rgba(0,0,0,0.43); 
    box-shadow: 0px -6px 10px 8px rgba(0,0,0,0.15);
    position: fixed;
    top: 0;
    transition: 0.25s all ease-out;
    width: 100%;
    z-index: 100;
  }

  .luxbar-menu {
    transition: 0.25s all ease-out!important;
  }

  .luxbar-menu-dark {
    background: ${(props) => props.theme.color.secundary};
    color: ${(props) => props.theme.color.text};
    padding: 0 2rem;
    overflow: hidden;
  }

  .luxbar-item {
    align-items: center;
    display: flex;
  }

  .luxbar-item:hover {
    background: none;
    color: #5d2de2;
    transition: 0.25s all ease-out;
  }

  .Title-Name {
    font-family: 'Merienda', cursive;
    font-size: 1.2em;
  }

  .Light-Theme-Icon {
    margin-left: 0.3em;
    margin-top: 0.1em;
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
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 45%;
  }

  .Main-Content .Blob {
    display: flex;
    height: 100%;
    position: relative;
    width: 100%;
    z-index: 0;
  }

  .Container-Buttons-Contact {
    margin-top: 0.5rem;
    margin-left: -10rem;
    position: absolute;
    width: 15%;
  }

  .Btn-Contact {
    align-items: center;
    background: #e3d42d;
    border: none;
    border-radius: 0.3em;
    color: #202024;
    cursor: pointer;
    display: flex;
    font-size: 1em;
    font-weight: 600;
    height: 2.5em;
    justify-content: center;
    margin-bottom: 1em;
    outline: none;
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
    margin-bottom: 0.5em;
    margin-top: -1em;
  }

  .seta {
    align-items: center;
    color: #5d2de2;
    display: flex;
    flex-flow: column nowrap;
    height: 5.5em;
    justify-content: center;
    width: 100%;
  }

  .Mouse-Seta {
    color: #5d2de2;
  }

  @media screen and (max-width: 768px) {
    #Home-Page {
      padding-top: 8%;
    }

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
      margin-left: 0;
      height: 30%;
      width: 80%;
    }

    .Btn-Contact {
      height: 3em;
    }
  }
`;

export default HomePage;
