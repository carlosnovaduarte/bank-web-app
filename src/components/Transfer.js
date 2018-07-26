import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col, Row, Grid, Toolbar} from 'react-bootstrap';

class Transfer extends Component {
  state = { transferValue: "", transferType: "", address: "" }

  changeTransferValue = (event) => {
    this.setState({ transferValue: event.target.value });
  }

  changeTransferType = (type) => {
    this.setState({ transferType: type });
  }
    
  changeAddress = (event) => {
    this.setState({ address: event.target.value });
  }

  offerTransfer = (address, amount) => {
    this.props.contract.offerTransfer(this.state.address, this.state.transferValue, {
      from: this.props.web3.eth.defaultAccount,
      gasPrice: this.props.web3.toWei(20, 'gwei')
      }, (error, result) => {
        console.log(error, result);
    })
  }

  acceptTransfer = () => {
    this.props.contract.acceptTransfer({
      from: this.props.web3.eth.defaultAccount,
      gasPrice: this.props.web3.toWei(20, 'gwei')
      }, (error, result) => {
        console.log(error, result);
    });
  }

  renderContent() {
    if (this.state.transferType === "offerTransfer") {
      return (
        <Grid>
          <Row>
            <h2>How much would you like to transfer?</h2>
            <FormControl placeholder="1" value={this.state.transferValue} onChange={this.changeTransferValue}>
            </FormControl>
            <div class="row form-group"></div>
            <FormControl placeholder="1" value={this.state.address} onChange={this.changeAddress}>
            </FormControl>
          </Row>
          <div class="row form-group"></div>
          <button type="button" className="btn btn-warning btn-lg" onClick={this.offerTransfer}>
            Make offer
          </button>
        </Grid>  
        );
      }
    else if (this.state.transferType === "acceptTransfer") {
      return(
        <Fragment>
          {this.acceptTransfer()}
        </Fragment>
      ); 
    }
  }

  render() {
   return(
      <Fragment>
        <Grid>
          <Row>
            <Col>
              <div class="row form-group"></div>
              <button type="button" className="btn btn-warning btn-lg" onClick={ () => this.changeTransferType("offerTransfer") } >
                Offer transfer
              </button>
            </Col>
              <div class="row form-group"></div>
            <Col>
              <button type="button" className="btn btn-warning btn-lg" onClick={ () => this.changeTransferType("acceptTransfer") } >
                Accept transfer
              </button>
            </Col>
          </Row>
          {this.renderContent()}
      </Grid>
    </Fragment>
    );

  } 
}

export default Transfer;

