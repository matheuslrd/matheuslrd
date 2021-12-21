import styled from 'styled-components';

const App = styled.div`
  background: ${(props) => props.theme.color.primary};
  transition: 0.25s all ease-out;
  width: 100%;

  .btn-contact {
    background: #5d2de2;
    border-radius: 3px;
    color: #fdfdfd;
    height: 3em;
    font-weight: 600;
    transition: 0.2s all ease-out;
    padding: 1.2em 2em;
    width: fit-content;
    
    &:hover {
      background: #5d2de2;
      filter: brightness(0.85);
    }
  }
`;

export default App;
