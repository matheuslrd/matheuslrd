import styled from 'styled-components';

const Services = styled.div`
  #Services {
    background: #202024;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .Services-Title {
    font-size: 2em;
    font-weight: 400;
    text-align: center;
    margin: 2em;
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
    background: #121214;
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
