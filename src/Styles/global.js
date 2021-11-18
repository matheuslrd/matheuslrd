import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

  * {
    box-sizing: border-box;
    padding: 0;
    scroll-behavior: smooth;
    text-decoration: none;
    margin: 0;
  }

  body {
    color: ${(props) => props.theme.color.text};
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
  }
`;
