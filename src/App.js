import React from 'react';
import './App.css';
import './App.scss';
import '98.css';
import Main from './Components/Main/Main';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Main />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
