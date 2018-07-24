import React, { Component, Fragment } from 'react';
import {FormControl, Button, Col} from 'react-bootstrap';
import cassiopeia from '../ABIs/cassiopeia.json';

class Deposit extends Component {

  componentDidMount() {
    //const contract = new this.props.web3.eth.Contract(cassiopeia.abi, "0xf6330c053c26b65bc7fc4fc05767477de955c284"); 
    let MyContract = this.props.web3.eth.contract(cassiopeia.abi);
    let contractInstance = MyContract.at('0xf6330c053c26b65bc7fc4fc05767477de955c284');
  }

  state = { deposit: "" }

  confirmDeposit = () => {
    alert(`Are you sure you want to deposit ${this.state.deposit}?`);
  }

  changeDeposit = (event) => {
    this.setState({ deposit: event.target.value })
  } 

  render() {
    return(
      <Fragment>
      <h1>How much money would you like to deposit?</h1>
      <Col md={11}> 
        <FormControl placeholder="1" value={this.state.deposit} onChange={this.changeDeposit}/>
      </Col>
      <Col md={1}>
        <Button onClick={this.confirmDeposit}>
         Deposit 
        </Button>
      </Col>
      </Fragment>
    );
  } 
}

export default Deposit;

