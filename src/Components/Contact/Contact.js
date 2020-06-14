import React, { Component } from 'react';
import './Contact.css';

export default class Contact extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      comapany: '',
      message: '',
    };
  }

  render() {
    return (
      <div className='contact'>
        <h3>Contact</h3>

        <div className='contact-form'>
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
        </div>
      </div>
    );
  }
}
