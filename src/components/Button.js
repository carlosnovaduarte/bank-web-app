import React, { Component, Fragment } from 'react';

class Button extends Component {
  clickHandler() {
    alert("Autch, that click hurt!");
  }

  render() {
    return (
      <Fragment>
        <h1>Click this button!</h1>
        <button 
          onClick={this.clickHandler} >
          Life on Mars
        </button>
      </Fragment>
    );
  }
}

export default Button;

