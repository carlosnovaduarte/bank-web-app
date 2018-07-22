import React, { Component, Fragment } from 'react';

class Button extends Component {
  render() {
    return (
      <Fragment>
        <button 
            onClick={ this.props.clickHandler } >
            { this.props.text }
        </button>
      </Fragment>
    );
  }
}

export default Button;

