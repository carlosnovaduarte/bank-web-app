import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col} from 'react-bootstrap';

class Transfer extends Component {
  state = { transfer: "" }

  confirmTransfer = () => {
    alert(`Are you sure you want to transfer ${this.state.transfer}?`);
  }

  changeTransfer = (event) => {
    this.setState({ transfer: event.target.value })
  } 

  render() {
    return(
      <Fragment>
      <h1>How much money would you like to transfer?</h1>
      <Col md={11}> 
        <FormControl placeHolder="1" value={this.state.transfer} onChange={this.changeTransfer}/>
      </Col>
      <Col md={1}>
        <Button onClick={this.confirmTransfer}>
          Pay
        </Button>
      </Col>
      </Fragment>
    );
  } 
}

export default Transfer;
