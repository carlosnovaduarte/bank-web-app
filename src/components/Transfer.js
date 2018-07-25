import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col} from 'react-bootstrap';

class Transfer extends Component {
  state = { transfer: "" }

  confirmTransfer = () => {
    this.contract.transfer({
      from: this.props.web3.eth.defaultAccount,
      value: this.transfer,
      gasPrice: this.props.web3.toWei(20, 'gwei')

    }, (error, result) => {
      console.log(error, result);
      }
    );
  }

  changeTransfer = (event) => {
    this.setState({ transfer: event.target.value });
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
         Transfer 
        </Button>
      </Col>
      </Fragment>
    );
  } 
}

export default Transfer;

