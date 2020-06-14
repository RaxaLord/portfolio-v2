import React from 'react';
import './App.css';
import './App.scss';
import '98.css';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Skills from './Components/Skills/Skills';

function App() {
  return (
    <div className='App'>
      <Main />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
