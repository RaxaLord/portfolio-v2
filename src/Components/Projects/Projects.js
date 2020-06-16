import React from 'react';
import './Projects.css';

export default function Projects() {
  return (
    <div className='project-container'>
      <h3>Projects</h3>
      <div className='project-wrapper'>
        <container>
          <div className='explor-holder'>
            <img
              src='https://media.giphy.com/media/XedxBuHuek40r1J1a7/giphy.gif'
              alt='explor'
              className='explor grow'
            />

            <div class='window explor-window grow1'>
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
                  This website was built as my final project for Dev Mountain,
                  utlizing all the technologies I learned throughout the
                  program.
                  <br />
                  <br />
                  The inspiration to build this came from wanting to see more in
                  the world, and what better way to do that than to simplify
                  everything and just have the worlds best locations all on one
                  platform?
                </p>
                <br />
                <br />
                {/* <button>View Project</button> */}
                <a
                  href='https://github.com/RaxaLord/final_project'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <button>View GitHub Repo</button>
                </a>
              </div>
            </div>
          </div>

          <div className='drip-holder'>
            <img
              src='https://media.giphy.com/media/lp26ix2nN81YKPs7UO/giphy.gif'
              alt='drip'
              className='drip grow'
            />

            <div class='window drip-window grow1'>
              <div class='title-bar'>
                <div class='title-bar-text'>Drip - buy/sell/trade clothing</div>
                <div class='title-bar-controls'>
                  <button aria-label='Minimize'></button>
                  <button aria-label='Maximize'></button>
                  <button aria-label='Close'></button>
                </div>
              </div>
              <div class='window-body'>
                <p>
                  This was my first personal project made while studying at Dev
                  Mountain.
                  <br />
                  <br />
                  It is a simple but modern styled ecommerce platform dedicated
                  to users who like to buy/sell/trade new and useds goods!
                  <br />
                  <br />
                  {/* <span className='warning'>
                    *disclamer, the hosted project is currently not functioning
                    correctly*
                  </span>
                  <br />
                  <br /> */}
                  <a
                    href='http://64.227.48.205:4040/#/'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    {/* <button>View Project</button> */}
                  </a>
                  <a
                    href='https://github.com/RaxaLord/peersonal-project_drip'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button>View GitHub Repo</button>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </container>
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
