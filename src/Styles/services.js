import styled from 'styled-components';

const Services = styled.div`
  #Services-Page {
    align-items: center;
    background: ${(props) => props.theme.color.secundary};
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    transition: 0.25s all ease-out;
    width: 100%;
  }

  .Services-Title {
    font-size: 2em;
    font-weight: 500;
    text-align: center;
    margin: 1em;
    width: 100%;
  }

  .Services-Container-Center {
    display: flex;
    font-size: 1em;
    flex-flow: row nowrap;
    margin-bottom: 5em;
    width: 80%;
  }

  .Service {
    background: ${(props) => props.theme.color.primary};
    text-align: center;
    border-radius: 0.3em;
    font-size: 0.9em;
    padding: 1em;
    margin: 1em;
    height: 20em;
    width: 25%;
  }

  .Icon-Service {
    color: #5429cf;
    text-align: center;
    padding: 2.2em 0;
  }

  .Title-Service {
    margin-bottom: 0.8em;
    font-weight: 400;
  }

  .Text-Service {
    font-weight: 600;
    line-height: 1.5em;
  }

`;

export default Services;
