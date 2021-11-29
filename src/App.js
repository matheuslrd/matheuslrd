import React, { useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import { MyContext } from './Context/MyProvider';

import HomePage from './Pages/HomePage/index';
import AboutMe from './Pages/AboutMe/index';
import Projects from './Pages/Projects/index';
import Services from './Pages/Services/index';
import Skills from './Pages/Skills/index';
import Footer from './Components/Footer';

import GlobalStyle from './Styles/global';
import StyledApp from './Styles/app';

import { darkTheme, lightTheme } from './Styles/Theme';

// eslint-disable-next-line react/function-component-definition
function App() {
  const { theme } = useContext(MyContext);

  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <ThemeProvider theme={theme ? darkTheme : lightTheme}>
      <StyledApp>
        <main className="App">
          <GlobalStyle />
          <HomePage />
          <AboutMe />
          <Projects />
          <Services />
          <Skills />
          <Footer />
        </main>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
