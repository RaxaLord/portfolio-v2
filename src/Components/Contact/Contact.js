import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      message: '',
    };
  }

  render() {
    return (
      <div className='contact'>
        <h3>Contact</h3>

        <div class='window'>
          <div class='title-bar'>
            <div class='title-bar-text'>Want to send me an email?</div>
            <div class='title-bar-controls'>
              <button aria-label='Minimize'></button>
              <button aria-label='Maximize'></button>
              <button aria-label='Close'></button>
            </div>
          </div>
          <div class='window-body'>
            <div className='contact-form'>
              <div class='field-row-stacked'>
                <label>Email</label>
                <input type='text' placeholder='yourname@email.com' />
              </div>

              <div class='field-row-stacked'>
                <label>Message</label>
                <textarea
                  type='text'
                  rows='8'
                  placeholder='What would you like to say?'
                ></textarea>
              </div>

              <button className='submit-btn'>Submit</button>
            </div>
          </div>
        </div>

        {/* <div className='contact-form'>
          <div class='field-row-stacked'>
            <label for='text18'>Name</label>
            <input id='text18' type='text' />
          </div>
          <div class='field-row-stacked'>
            <label for='text19'>Email</label>
            <input id='text19' type='text' />
          </div>

          <div class='field-row-stacked'>
            <label for='text20'>Message</label>
            <textarea type='text' id='text20' rows='8'></textarea>
          </div>

          <button className='submit-btn'>Submit</button>
        </div> */}
      </div>
    );
  }
}
