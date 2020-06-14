import React, { Component } from 'react';

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
      <div>
        <h3>Contact</h3>
      </div>
    );
  }
}
