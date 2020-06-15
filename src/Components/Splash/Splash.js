import React from 'react';
import './Splash.css';
import { Link } from 'react-router-dom';

export default function Splash() {
  return (
    <div class='container'>
      <div class='msg' align='center'>
        <p class='highlight'>Windows</p>
        <p>
          A fatal exception 0E has occured at 028:C00068F8 in VxD VMM(01)
          000059F8. The current application will be terminated.
        </p>
        <p>* Press any key to terminate the application.</p>
        <p>
          * Press CTRL+ALT+DEL to restart your computer. You will lose any
          unsaved information in all aplications.
        </p>
        <br />
        <br />

        <p className='warning'>
          Just kidding, you just made it to my portfolio!
        </p>
        <br />
        <br />
        <p class='continue'>
          Press{' '}
          <Link to='/home' id='splash-link'>
            here
          </Link>{' '}
          to continue <span class='blink'>_</span>
        </p>
      </div>
    </div>
  );
}
