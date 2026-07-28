import React, { useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

function App() {
  const { theme } = useContext(MyContext);
  AOS.init();

  return (
    <React.StrictMode>
      <ThemeProvider theme={theme ? darkTheme : lightTheme}>
        <StyledApp>
          <GlobalStyle />
          <HomePage />
          <AboutMe />
          <Projects />
          <Services />
          <Skills />
          <Footer />
        </StyledApp>
      </ThemeProvider>
    </React.StrictMode>
  );
}

export default App;
