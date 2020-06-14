import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <div className='project-wrapper'>
      <h3>Projects</h3>

      <section className='project drip'>
        <div className='project_content'>
          <h4>Explor</h4>
          <p>A place for wanderers to find new locations all in one place.</p>
          <button>View Project</button>
        </div>
      </section>

      <section className='project explor'>
        <div className='project_content'>
          <h4>Drip</h4>
          <p>A simple e-commerce for users to buy/sell new and used goods.</p>
          <button>View Project</button>
        </div>
      </section>
    </div>
  );
}
