import styled from 'styled-components';

const App = styled.div`
  .App {
    background: ${(props) => props.theme.color.primary};
    transition: 0.25s all ease-out;
    width: 100%;
  }
`;

export default App;
