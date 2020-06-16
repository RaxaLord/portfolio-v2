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

        {/* <div class='window'>
          <div class='title-bar'>
            <div class='title-bar-text'>ERROR</div>
            <div class='title-bar-controls'>
              <button aria-label='Close'></button>
            </div>
          </div>
          <div class='window-body'>
            <p>
              Sorry, this portion of the website is currently being worked on.
              <br />
              <hr />
              <br />
              Please feel free to send any messages to the email located in the
              lower right of your monitor or try again soon!
            </p>
            <br />

            <button disabled>I'LL BE BACK SOON!</button>
          </div>
        </div> */}

        {/* *** windows version ***  */}
        <div class='window form'>
          <div class='title-bar'>
            <div class='title-bar-text'>Want to send me an message?</div>
            <div class='title-bar-controls'>
              <button aria-label='Minimize'></button>
              <button aria-label='Maximize'></button>
              <button aria-label='Close'></button>
            </div>
          </div>

          <div class='window-body'>
            <p>
              Please feel free to send me a message with any questions you may
              have and I will respond with an email as quickly as I can
            </p>
            <br />
            <br />

            <form name='contact' method='POST' data-netlify='true'>
              <input type='hidden' name='form-name' value='contact' />
              <div className='contact-form'>
                <div class='field-row-stacked'>
                  <label>Name</label>
                  <input
                    type='text'
                    name='name'
                    placeholder='FirstName LastName'
                    required
                  />
                </div>

                <div class='field-row-stacked'>
                  <label>Email</label>
                  <input
                    type='email'
                    name='email'
                    placeholder='FirstLast123@Email.com'
                    required
                  />
                </div>

                <div class='field-row-stacked'>
                  <label>Message</label>
                  <textarea
                    // type='message'
                    name='message'
                    rows='8'
                    placeholder='What can we create together?'
                    required
                  ></textarea>
                </div>

                <div className='field'>
                  <div data-netlify-recaptcha='true'></div>
                </div>

                <input
                  className='submit-btn'
                  type='submit'
                  value='Send Message'
                />
              </div>
            </form>
          </div>
        </div>

        {/* *** different version ***  */}
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
