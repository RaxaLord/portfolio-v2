import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <div className='project-container'>
      <h3>Projects</h3>
      <div className='project-wrapper'>
        {/* <div class='window project'>
          <div class='title-bar'>
            <div class='title-bar-text'>Explor - Find your place</div>
            <div class='title-bar-controls'>
              <button aria-label='Minimize'></button>
              <button aria-label='Maximize'></button>
              <button aria-label='Close'></button>
            </div>
          </div>
          <div class='window-body'>
            <p>
              This web page was built as my final project to help wanderers find
              new places in the world!
            </p>
            <button>View Project</button>
          </div>
        </div>

        <div class='window project'>
          <div class='title-bar'>
            <div class='title-bar-text'>
              Drip - buy/sell/trade new and used fashion
            </div>
            <div class='title-bar-controls'>
              <button aria-label='Minimize'></button>
              <button aria-label='Maximize'></button>
              <button aria-label='Close'></button>
            </div>
          </div>
          <div class='window-body'>
            <p>
              This webpage was my first full stack project for Dev Mountain.
            </p>
            <button>View Project</button>
          </div>
        </div> */}

        <div>
          <img
            src='https://media.giphy.com/media/XedxBuHuek40r1J1a7/giphy.gif'
            alt='explor'
            className='explor'
          />

          <img
            src='https://media.giphy.com/media/lp26ix2nN81YKPs7UO/giphy.gif'
            alt='drip'
            className='drip'
          />
        </div>
      </div>

      {/* <section className='project drip'>
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
      </section> */}
    </div>
  );
}
