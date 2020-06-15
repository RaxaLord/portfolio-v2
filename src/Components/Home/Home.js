import React from 'react';
import Main from '../Main/Main';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

import './Home.css';

export default function Home() {
  return (
    <div className='home'>
      <Main />
      <Projects />
      <Skills />
      <Contact />
      <div id='bottombar'>
        <div id='right'>info@workwithraxa.com</div>
        <div id='start'>Start</div>
        {/* <div class='task'>Internet Explorer</div> */}
        <div class='task'>
          <a
            href='https://github.com/RaxaLord'
            target='__blank'
            id='github_text'
          >
            GitHub
          </a>
        </div>
        <div class='task'>
          <a
            href='https://www.linkedin.com/in/raxahansana/'
            target='__blank'
            id='github_text'
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
