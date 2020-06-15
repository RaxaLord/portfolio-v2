import React from 'react';
import './Skills.css';

export default function Skills() {
  return (
    <div className='skills-container'>
      <h3>Skills</h3>

      <div className='skills-wrapper'>
        <ul class='tree-view'>
          <li>
            Front-End
            <ul>
              <li>JavaScript</li>
              <li>React Js</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS/SCSS</li>
            </ul>
          </li>

          <li>
            Back-End
            <ul>
              <li>Node Js</li>
              <li>PostgreSQL</li>
            </ul>
          </li>

          <li>
            More
            <ul>
              <li>NPM</li>
              <li>JEST</li>
              <li>Rellax</li>
            </ul>
          </li>

          <li>
            Creative
            <ul>
              <li>Photoshop</li>
              <li>Lightroom</li>
              <li>Primiere Pro</li>
              <li>XD</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}
