import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col} from 'react-bootstrap';

class Withdraw extends Component {
  state = { withdraw: "" }

  confirmWithdraw = () => {
    alert(`Are you sure you want to withdraw ${this.state.withdraw}?`);
  }

  changeWithdraw = (event) => {
    this.setState({ withdraw: event.target.value })
  } 

  render() {
    return(
      <Fragment>
      <h1>How much money would you like to withdraw?</h1>
      <Col md={11}> 
        <FormControl placeholder="1" value={this.state.withdraw} onChange={this.changeWithdraw}/>
      </Col>
      <Col md={1}>
        <Button onClick={this.confirmWithdraw}>
          Pay
        </Button>
      </Col>
      </Fragment>
    );
  } 
}

export default Withdraw;
