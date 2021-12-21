import styled from 'styled-components';

const App = styled.div`
  background: ${(props) => props.theme.color.primary};
  transition: 0.25s all ease-out;
  width: 100%;

  .btn-contact {
    background: #5d2de2;
    border-radius: 3px;
    width: fit-content;
    
    &:hover {
      background: #5d2de2;
      filter: brightness(0.9);
    }
  }
`;

export default App;
