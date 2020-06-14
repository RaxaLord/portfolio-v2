import React from 'react';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

export default function Home() {
  return (
    <div>
      <Main />
      <Projects />
      <Skills />
      <Contact />
      <div id='bottombar'>
        <div id='right'>imRaxa@outlook.com</div>
        <div id='start'>Start</div>
        <div class='task'>Internet Explorer</div>
      </div>
    </div>
  );
}
