import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col} from 'react-bootstrap';

class Transfer extends Component {
  state = { transferValue: "", transferType: "" }

  //TODO: need to create new class with the transfer type buttons
  showTransferBtns = () => {
  }

  changeTransfer = (event) => {
    this.setState({ transfer: event.target.value });
  }


  render() {
   return(
      <Fragment>
        <Col>
          <button type="button" className="btn btn-danger btn-lg" onClick={ this.setState({ transferType: "offerTransfer" }) } >
            Offer transfer
          </button>
          <button type="button" className="btn btn-danger btn-lg" onClick={ this.setState({ transferType: "acceptTransfer" }) } >
            Accept transfer
          </button>
      </Col>
    </Fragment>
    );

  } 
}

export default Transfer;

