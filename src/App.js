import React from 'react';

import HomePage from './Pages/HomePage';
import AboutMe from './Pages/AboutMe';
import Projects from './Pages/Projects';
import Services from './Pages/Services';
import Skills from './Pages/Skills';
import Footer from './Components/Footer';

import './Styles/App.css';

// eslint-disable-next-line react/function-component-definition
function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <main className="App">
      <HomePage />
      <AboutMe />
      <Projects />
      <Services />
      <Skills />
      <Footer />
    </main>
  );
}

export default App;
