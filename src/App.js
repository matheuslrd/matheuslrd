import React, { useContext } from 'react';

import { ThemeProvider } from 'styled-components';

import { MyContext } from './Context/MyProvider';

import HomePage from './Pages/HomePage';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Skills from './Pages/Skills';
import Footer from './Components/Footer';

import GlobalStyle from './Styles/global';
import StyledApp from './Styles/app';

import { darkTheme, lightTheme } from './Styles/Theme';

import './App.css';

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
